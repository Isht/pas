/**
 * Store for managing stock*/
Ext.define('Pas.store.retail.Stocks', {
    extend: 'Ext.data.Store',
    alias: 'store.retail.stocks',
    requires: [
        'Pas.model.stock.StockBase'
    ],
    storeId: 'RetailStocks',
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