/**
 * @author Isht.Ae
 * Controller for Penjualan Retail
 */

Ext.define('Pas.controller.getStock', {
    extend: 'Pas.controller.Base',
    models: [
        // controllers models
        'stock.StockBase',
        'stock.StockZatActive',
        'stock.StockSatuanItem'
    ],
    stores: [
        // controllers stores
        'stock.Stocks',
        'stock.StocksZatActive'
    ],
    views: [
        // controllers views
        'stock.getStock',
        'stock.StockGrid'
    ],
    refs: [
        //controllers view refs
        {ref: "GridStock", selector: "[xtype=stock.stockgrid]"}
    ],
    init: function () {
        this.listen({
            component: {
                //list component controller
                '#txtNamaBarang': {
                    specialkey: function (f, e) {
                        if (e.getKey() === e.ENTER) {
                            this.filterStore();
                        }
                    },
                    change: function (f, e) {
                        this.filterStore();
                    }
                },
                '#formBarangGrid button[action=searchStockData]': {
                    click: this.filterStore
                },
                '#formBarangGrid button[action=showAllData]': {
                    click: this.showAllData
                },
                '#formBarangGrid button[action=refreshData]': {
                    click: this.refreshData
                }
            }
        });
    },
    filterStore: function () {
        var store = this.getStore('stock.Stocks'),
                grid = this.getGridStock(),
                filter = [];

        if (!Ext.isEmpty(grid.down('#txtNamaBarang').getValue())) {
            filter.push({property: 'mi_name', operator: 'like', type: 'string', value: grid.down('#txtNamaBarang').getValue()});
        }

        if (!Ext.isEmpty(grid.down('#cmbJenisBarang').getValue())) {
            filter.push({property: 'mi_jenis', operator: 'where', type: 'numeric', value: grid.down('#cmbJenisBarang').getValue()});
        }

        if (!Ext.isEmpty(grid.down('#cmbZatAktif').getValue())) {
            filter.push({property: 'mi_zataktif', operator: 'where', type: 'numeric', value: grid.down('#cmbZatAktif').getValue()});
        }

        if (Ext.isEmpty(filter)) {
            store.removeAll();
            return false;
        }

        grid.getSelectionModel().clearSelections();
        store.clearFilter(true);
        store.filter(filter);
    },
    showAllData: function (button, e, eOpts) {
        var store = this.getStore('stock.Stocks'),
                grid = this.getGridStock();
        grid.getSelectionModel().clearSelections();
        store.clearFilter(true);
        store.load();
    },
    refreshData: function (button, e, eOpts) {
        var store = this.getStore('stock.Stocks'),
                grid = this.getGridStock();
        grid.getSelectionModel().clearSelections();
        store.load();
    },
    onSuccess: function (resp, id) {
        //TODO ajax request response success by id
    },
    onFailure: function (resp, id) {
        //TODO ajax request response failed by id
    }
});
