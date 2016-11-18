/**
 * Store for managing stock*/
Ext.define('Pas.store.retail.racikan.BiayaRacikan', {
    extend: 'Ext.data.Store',
    alias: 'store.retail.racikan.biayaracikan',
    requires: [
        'Pas.model.racikan.BiayaRacikan'
    ],
    storeId: 'RetailRacikanBiaya',
    model: 'Pas.model.racikan.BiayaRacikan',
    remoteFilter: false,
    remoteSort: true,
    autoLoad: true,
    proxy: {
        success: true,
        type: 'ajax',
        url: 'racikan/biaya',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total',
            api: {
                create: 'racikan/biaya/create',
                read: 'racikan/biaya',
                update: 'racikan/biaya/update',
                destroy: 'racikan/biaya/delete'
            }
        }
    }
});