/**
 * Store for managing stock*/
Ext.define('Pas.store.retail.DataDokter', {
    extend: 'Ext.data.Store',
    alias: 'store.retail.datadokter',
    requires: [
        'Pas.model.shared.DataDokter'
    ],
    storeId: 'RetailDataDokter',
    model: 'Pas.model.shared.DataDokter',
    remoteFilter: true,
    remoteSort: true,
    autoLoad: false,
    proxy: {
        success: true,
        type: 'ajax',
        url: 'shared/dokter',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total',
            api: {
                create: 'shared/dokter/create',
                read: 'shared/dokter',
                update: 'shared/dokter/update',
                destroy: 'shared/dokter/delete'
            }
        }
    }
});