/**
 * Store for managing stock*/
Ext.define('Pas.store.retail.ItemListRetail', {
    extend: 'Ext.data.Store',
    alias: 'store.retail.itemlistretail',
    requires: [
        'Pas.model.retail.ItemListRetail'
    ],
    storeId: 'RetailItemList',
    model: 'Pas.model.retail.ItemListRetail',
    remoteFilter: true,
    remoteSort: true,
    autoLoad: false,
    proxy: {
        success: true,
        type: 'ajax',
        url: 'retail/detail',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total',
            api: {
                create: 'retail/detail/create',
                read: 'retail/detail',
                update: 'retail/detail/update',
                destroy: 'retail/detail/delete'
            }
        }
    }
});