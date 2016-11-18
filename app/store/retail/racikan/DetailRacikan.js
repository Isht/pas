/**
 * Store for managing stock*/
Ext.define('Pas.store.retail.racikan.DetailRacikan', {
    extend: 'Ext.data.Store',
    alias: 'store.retail.racikan.detailracikan',
    requires: [
        'Pas.model.racikan.DetailRacikan'
    ],
    storeId: 'RetailDetailRacikan',
    model: 'Pas.model.racikan.DetailRacikan',
    remoteFilter: true,
    remoteSort: true,
    autoLoad: false,
    proxy: {
        success: true,
        type: 'ajax',
        url: 'racikan/detail',
        reader: {
            type: 'json',
            root: 'data',
            totalProperty: 'total',
            api: {
                create: 'racikan/detail/create',
                read: 'racikan/detail',
                update: 'racikan/detail/update',
                destroy: 'racikan/detail/delete'
            }
        }
    }
});