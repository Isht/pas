Ext.define('Pas.model.shared.DataPasien', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'pasienId',
            type: 'string'
        },
        {
            name: 'pasienName',
            type: 'string'
        },
        {
            name: 'pasienAddr',
            type: 'string'
        },
        {
            name: 'kotaId',
            type: 'int'
        },
        {
            name: 'kotaName',
            type: 'string'
        },
        {
            name: 'telpNo',
            type: 'string'
        },
        {
            name: 'gsmNo',
            type: 'string'
        },
        {
            name: 'isMember',
            type: 'boolean'
        },
        {
            name: 'memberType',
            type: 'int'
        },
        {
            name: 'rekananId',
            type: 'int'
        },
        {
            name: 'statusNikah',
            type: 'boolean'
        },
        {
            name: 'isKk',
            type: 'boolean'
        },
        {
            name: 'kkId',
            type: 'int'
        },
        {
            name: 'dob',
            type: 'date'
        },
        {
            name: 'sex',
            type: 'int'
        },
        {
            name: 'agamaId',
            type: 'int'
        },
        {
            name: 'cabangId',
            type: 'int'
        }
    ],
    idProperty: 'id'
});