/**
 * Store for managing stock*/
Ext.define('Pas.store.retail.racikan.JenisRacikan', {
    extend: 'Ext.data.Store',
    alias: 'store.retail.racikan.jenisracikan',
    requires: [
        'Pas.model.racikan.JenisRacikan'
    ],
    storeId: 'RetailRacikanJenis',
    model: 'Pas.model.racikan.JenisRacikan',
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
            read: 'racikan/jenis',
            create: 'racikan/jenis/create',
            update: 'racikan/jenis/update',
            destroy: 'racikan/jenis/delete'
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