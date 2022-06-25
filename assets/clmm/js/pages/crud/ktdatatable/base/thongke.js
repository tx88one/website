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
				source: '/api/quanly/thongke?type=month',
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
				field: 'partnerName',
				title: 'Tên',
			}, {
				field: 'partnerId',
				title: 'SĐT',
			}, {
				field: 'amount',
				title: 'Đơn Chơi',
				template: function(row) {
					return '' + row.amount + '</br>' + row.total;
				}
			}, {
				field: 'win',
				title: 'Đã Win',
				template: function(row) {
					return '' + row.amount_paid + '</br>' + row.win;
				}
			}, {
				field: 'lose',
				title: 'Đơn Thua',
				template: function(row) {
					return '' + row.amount_lose + '</br>' + row.lose;
				}
			}],
		});
		$('#kt_datatable_search_status').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'Status');
		});
		$('#kt_datatable_search_status, #kt_datatable_search_type').selectpicker();
	};
	// basic demo
	var demo1 = function() {
		var datatable = $('#kt_datatable1').KTDatatable({
			// datasource definition
			data: {
				type: 'remote',
				source: '/api/quanly/thongke?type=day',
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
				input: $('#kt_datatable1_search_query'),
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
				field: 'partnerName',
				title: 'Tên',
			}, {
				field: 'partnerId',
				title: 'SĐT',
			}, {
				field: 'amount',
				title: 'Đơn Chơi',
				template: function(row) {
					return '' + row.amount + '</br>' + row.total;
				}
			}, {
				field: 'win',
				title: 'Đã Win',
				template: function(row) {
					return '' + row.amount_paid + '</br>' + row.win;
				}
			}, {
				field: 'lose',
				title: 'Đơn Thua',
				template: function(row) {
					return '' + row.amount_lose + '</br>' + row.lose;
				}
			}],
		});
		$('#kt_datatable1_search_status').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'Status');
		});
		$('#kt_datatable1_search_status, #kt_datatable1_search_type').selectpicker();
	};
	// basic demo
	var demo2 = function() {
		var datatable = $('#kt_datatable2').KTDatatable({
			// datasource definition
			data: {
				type: 'remote',
				source: '/api/quanly/thongke?type=week',
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
				input: $('#kt_datatable2_search_query'),
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
				field: 'partnerName',
				title: 'Tên',
			}, {
				field: 'partnerId',
				title: 'SĐT',
			}, {
				field: 'amount',
				title: 'Đơn Chơi',
				template: function(row) {
					return '' + row.amount + '</br>' + row.total;
				}
			}, {
				field: 'win',
				title: 'Đã Win',
				template: function(row) {
					return '' + row.amount_paid + '</br>' + row.win;
				}
			}, {
				field: 'lose',
				title: 'Đơn Thua',
				template: function(row) {
					return '' + row.amount_lose + '</br>' + row.lose;
				}
			}],
		});
		$('#kt_datatable2_search_status').on('change', function() {
			datatable.search($(this).val().toLowerCase(), 'Status');
		});
		$('#kt_datatable2_search_status, #kt_datatable2_search_type').selectpicker();
	};
	return {
		// public functions
		init: function() {
			demo();
			demo1();
			demo2();
		}
	};
}();
jQuery(document).ready(function() {
	KTDatatableJsonRemoteDemo.init();
});