Ext.define('Pas.model.racikan.Racikan', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'resepNo',
            type: 'string'
        },
        {
            name: 'racikanType',
            type: 'int'
        },
        {
            name: 'racikanName',
            type: 'string'
        },
        {
            name: 'racikanQty',
            type: 'int'
        },
        {
            name: 'racikanNetto',
            type: 'float'
        },
        {
            name: 'cabangId',
            type: 'int'
        },
        {
            name: 'typeName',
            type: 'string'
        }
    ],
    idProperty: 'id'
});