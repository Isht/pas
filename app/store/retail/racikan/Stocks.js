/**
 * Store for managing stock*/
Ext.define('Pas.store.retail.racikan.Stocks', {
    extend: 'Ext.data.Store',
    alias: 'store.retail.racikan.stocks',
    requires: [
        'Pas.model.stock.StockBase'
    ],
    storeId: 'RetailStocksRacikan',
    model: 'Pas.model.stock.StockBase',
    remoteFilter: true,
    remoteSort: true,
    autoLoad: false,
    proxy: {
        success: true,
        type: 'ajax',
        url: 'barang',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total',
            api: {
                create: 'barang/create',
                read: 'barang',
                update: 'barang/update',
                destroy: 'barang/delete'
            }
        }
    }
});