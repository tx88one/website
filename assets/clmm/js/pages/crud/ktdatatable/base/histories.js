"use strict";
// Class definition

var KTDatatableJsonRemoteDemo = function() {
    // Private functions

    // basic demo
    var demo = function() {
        var datatable = $('#kt_datatable').KTDatatable({
            // datasource definition
            data: {
                type: 'remote',
                source: '/api/momo/histories',
                pageSize: 10,
            },

            // layout definition
            layout: {
                scroll: true, // enable/disable datatable scroll both horizontal and vertical when needed.
                footer: false // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch'
            },

            // columns definition
            columns: [{
                field: 'RecordID',
                title: '#',
                sortable: true,
                order: [[ 0, "desc" ]],
                width: 35,
                type: 'number',
                textAlign: 'center',
            }, {
                field: 'Phone',
                title: 'Người Gửi',
                
            },{
                field: 'Name',
                title: 'Tên Người Gửi',
                
            }, {
                field: 'tranId',
                title: 'TranID',
                template: function(row) {
                    return 'MomoID: ' + row.momo_id + '</br> Mã Giao Dịch: ' + row.tranId;
                },
            },{
                field: 'Amount',
                title: 'Số Tiền',
                
            },{
                field: 'Comment',
                title: 'Nội Dung',
                
            }, {
                field: 'Date',
                title: 'Thời Gian',
            }, {
                field: 'Status',
                title: 'Status',
                // callback function support for column rendering
                template: function(row) {
                    var status = {
                        0: {
                            'title': 'Thua cuộc',
                            'class': ' label-light-danger'
                        },
                        1: {
                            'title': 'Chiến thắng',
                            'class': ' label-light-success'
                        },
                        
                        /*2: {
                            'title': 'Delivered',
                            'class': ' label-light-primary'
                        },*/
                        2: {
                            'title': 'Lỗi(Chờ hoàn)',
                            'class': ' label-light-info'
                        },
                        3: {
                            'title': 'Hoàn trả',
                            'class': ' label-light-warning'
                        },
                        4: {
                            'title': 'Sai nội dung',
                            'class': ' label-light-warning'
                        },
                        5: {
                            'title': 'Sai hạn mức',
                            'class': ' label-light-warning'
                        },
                        6: {
                            'title': 'Lỗi(Đã hoàn)',
                            'class': ' label-light-primary'
                        },
                        7: {
                            'title': 'Nạp tiền',
                            'class': ' label-light-success'
                        },
                        8: {
                            'title': 'Bị block chơi',
                            'class': ' label-light-success'
                        },
                        
                    };
                    return '<span class="label font-weight-bold label-lg' + status[row.Status].class + ' label-inline">' + status[row.Status].title + '</span>';
                },
            }, {
                field: 'Actions',
                title: 'Actions',
                sortable: false,
                width: 125,
                autoHide: false,
                overflow: 'visible',
                template: function(row) {
                    return '\
                        <div class="dropdown dropdown-inline">\
                            <a href="javascript:;" class="btn btn-sm btn-clean btn-icon mr-2" data-toggle="dropdown">\
                                <span class="svg-icon svg-icon-md">\
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
                                        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                                            <rect x="0" y="0" width="24" height="24"/>\
                                            <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>\
                                        </g>\
                                    </svg>\
                                </span>\
                            </a>\
                            <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
                                <ul class="navi flex-column navi-hover py-2">\
                                    <li class="navi-header font-weight-bolder text-uppercase font-size-xs text-primary pb-2">\
                                        Choose an action:\
                                    </li>\
                                    <li class="navi-item">\
                                        <a href="#" onclick="view_detail(' + row.RecordID + ')" class="navi-link">\
                                            <span class="navi-icon"><i class="la la-info"></i></span>\
                                            <span class="navi-text">Chi Tiết</span>\
                                        </a>\
                                    </li>\
                                    <li class="navi-item">\
                                        <a href="#" onclick="view_log(' + row.RecordID + ')" class="navi-link">\
                                            <span class="navi-icon"><i class="la la-info"></i></span>\
                                            <span class="navi-text">Log actions</span>\
                                        </a>\
                                    </li>\
                                </ul>\
                            </div>\
                        </div>\
                        <div class="modal fade" id="log' + row.RecordID + '" tabindex="-1" role="dialog" aria-labelledby="log' + row.RecordID + '" aria-hidden="true">\
                    <div class="modal-dialog" role="document">\
                            <div class="modal-content">\
            <div class="modal-header">\
                <h5 class="modal-title" id="log' + row.RecordID + '">Log actions #' + row.RecordID + '</h5>\
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                    <i aria-hidden="true" class="ki ki-close"></i>\
                </button>\
            </div>\
            <div class="modal-body">\
            </div>\
            <div class="modal-footer">\
                <button type="button" class="btn btn-light-primary font-weight-bold" data-dismiss="modal">Close</button>\
            </div>\
        </div>\
                        </div>\
                        </div>\
                        <div class="modal fade" id="detail' + row.RecordID + '" tabindex="-1" role="dialog" aria-labelledby="detail' + row.RecordID + '" aria-hidden="true">\
                    <div class="modal-dialog" role="document">\
                            <div class="modal-content">\
            <div class="modal-header">\
                <h5 class="modal-title" id="detail' + row.RecordID + '">Chi tiết #' + row.RecordID + '</h5>\
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">\
                    <i aria-hidden="true" class="ki ki-close"></i>\
                </button>\
            </div>\
            <div class="modal-body">\
            </div>\
            <div class="modal-footer">\
                <button type="button" id="submit" class="btn btn-primary font-weight-bold" onclick="tra(' + row.RecordID + ')">Trả/Hoàn/Hoàn Thành</button>\
                <button type="button" class="btn btn-light-primary font-weight-bold" data-dismiss="modal">Close</button>\
            </div>\
        </div>\
                            </div>\
                        </div>\
                    ';
                },
            }],

        });

        $('#kt_datatable_search_status').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'Status');
        });

        $('#kt_datatable_search_status, #kt_datatable_search_type').selectpicker();
    };

    return {
        // public functions
        init: function() {
            demo();
        }
    };
}();

jQuery(document).ready(function() {
    KTDatatableJsonRemoteDemo.init();
});
