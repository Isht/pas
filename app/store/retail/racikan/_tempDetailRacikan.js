/**
 * Store for managing stock*/
Ext.define('Pas.store.retail.racikan._tempDetailRacikan', {
    extend: 'Ext.data.Store',
    alias: 'store.retail.racikan._tempdetailracikan',
    requires: [
        'Pas.model.racikan.DetailRacikan'
    ],
    storeId: '_tempRetailDetailRacikan',
    model: 'Pas.model.racikan.DetailRacikan',
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
            read: 'racikan/detail/_temp',
            create: 'racikan/detail/_temp_create',
            update: 'racikan/detail/_temp_update',
            destroy: 'racikan/detail/_temp_delete'
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