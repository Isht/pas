/**
 * Store for managing stock*/
Ext.define('Pas.store.retail.DataPasien', {
    extend: 'Ext.data.Store',
    alias: 'store.retail.datapasien',
    requires: [
        'Pas.model.shared.DataPasien'
    ],
    storeId: 'RetailDataPasien',
    model: 'Pas.model.shared.DataPasien',
    remoteFilter: true,
    remoteSort: true,
    autoLoad: false,
    proxy: {
        success: true,
        type: 'ajax',
        url: 'shared/pasien',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total',
            api: {
                create: 'shared/pasien/create',
                read: 'shared/pasien',
                update: 'shared/pasien/update',
                destroy: 'shared/pasien/delete'
            }
        }
    }
});