Ext.define('Pas.model.shared.DataDiskon', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'diskonName',
            type: 'string'
        },
        {
            name: 'diskonValue',
            type: 'float'
        }
    ],
    idProperty: 'id'
});