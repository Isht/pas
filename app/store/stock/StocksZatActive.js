/**
 * Store for managing stock*/
Ext.define('Pas.store.stock.StocksZatActive', {
    extend: 'Ext.data.Store',
    alias: 'store.stock.stockszatactive',
    requires: [
        'Pas.model.stock.StockZatActive'
    ],
    storeId: 'StocksZatActive',
    model: 'Pas.model.stock.StockZatActive',
    remoteFilter: true,
    remoteSort: true,
    autoLoad: false,
    proxy: {
        success: true,
        type: 'ajax',
        url: 'barang/zat_active',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total',
            api: {
                create: 'barang/zat_active/create',
                read: 'barang/zat_active',
                update: 'barang/zat_active/update',
                destroy: 'barang/zat_active/delete'
            }
        }
    }
});