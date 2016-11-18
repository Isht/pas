/**
 * Store for managing stock*/
Ext.define('Pas.store.retail.StocksSatuanItem', {
    extend: 'Ext.data.Store',
    alias: 'store.retail.stockssatuanitem',
    requires: [
        'Pas.model.stock.StockSatuanItem'
    ],
    storeId: 'RetailStocksSatuanItem',
    model: 'Pas.model.stock.StockSatuanItem',
    remoteFilter: true,
    remoteSort: true,
    autoLoad: false,
    proxy: {
        success: true,
        type: 'ajax',
        url: 'barang/satuan',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total',
            api: {
                create: 'barang/satuan/create',
                read: 'barang/satuan',
                update: 'barang/satuan/update',
                destroy: 'barang/satuan/delete'
            }
        }
    }
});