/**
 * Store for managing stock*/
Ext.define('Pas.store.retail.racikan.Racikan', {
    extend: 'Ext.data.Store',
    alias: 'store.retail.racikan.racikan',
    requires: [
        'Pas.model.racikan.Racikan'
    ],
    storeId: 'RetailRacikan',
    model: 'Pas.model.racikan.Racikan',
    remoteFilter: true,
    remoteSort: true,
    autoLoad: false,
    proxy: {
        success: true,
        type: 'ajax',
        url: 'racikan',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total',
            api: {
                create: 'racikan/create',
                read: 'racikan',
                update: 'racikan/update',
                destroy: 'racikan/delete'
            }
        }
    }
});