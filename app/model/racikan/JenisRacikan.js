Ext.define('Pas.model.racikan.JenisRacikan', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'jenisName',
            type: 'string'
        },
        {
            name: 'kemasanPrice',
            type: 'float'
        },
        {
            name: 'materialPrice',
            type: 'float'
        },
        {
            name: 'satuanId',
            type: 'int'
        },
        {
            name: 'satuanName',
            type: 'string'
        }
    ],
    idProperty: 'id'
});