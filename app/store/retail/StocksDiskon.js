/**
 * Store for managing stock*/
Ext.define('Pas.store.retail.StocksDiskon', {
    extend: 'Ext.data.Store',
    alias: 'store.retail.stocksdiskon',
    requires: [
        'Pas.model.shared.DataDiskon'
    ],
    storeId: 'RetailStocksDiskon',
    model: 'Pas.model.shared.DataDiskon',
    remoteFilter: true,
    remoteSort: true,
    autoLoad: false,
    proxy: {
        success: true,
        type: 'ajax',
        url: 'shared/diskon',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total',
            api: {
                create: 'shared/diskon/create',
                read: 'shared/diskon',
                update: 'shared/diskon/update',
                destroy: 'shared/diskon/delete'
            }
        }
    }
});