/**
 * Store for Racikan*/
Ext.define('Pas.store.retail.racikan._tempRacikan', {
    extend: 'Ext.data.Store',
    alias: 'store.retail.racikan._tempracikan',
    requires: [
        'Pas.model.racikan.Racikan'
    ],
    storeId: '_tempRetailRacikan',
    model: 'Pas.model.racikan.Racikan',
    remoteFilter: true,
    remoteSort: true,
    autoLoad: false,
    proxy: {
        success: true,
        type: 'ajax',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total'
        },
        api: {
            read: 'racikan/temp',
            create: 'racikan/temp_create',
            update: 'racikan/temp_update',
            destroy: 'racikan/temp_delete'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            allowSingle: true,
            encode: true,
            root: 'data'
        }
    }
});