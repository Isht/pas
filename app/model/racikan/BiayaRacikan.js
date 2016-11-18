Ext.define('Pas.model.racikan.BiayaRacikan', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'biayaName',
            type: 'string'
        },
        {
            name: 'biayaValue',
            type: 'float'
        }
    ],
    idProperty: 'id'
});