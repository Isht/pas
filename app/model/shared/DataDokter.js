Ext.define('Pas.model.shared.DataDokter', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'dokterId',
            type: 'string'
        },
        {
            name: 'dokterName',
            type: 'string'
        },
        {
            name: 'firstTitle',
            type: 'int'
        },
        {
            name: 'lastTitle',
            type: 'int'
        },
        {
            name: 'sexId',
            type: 'int'
        },
        {
            name: 'agamaId',
            type: 'int'
        },
        {
            name: 'dob',
            type: 'date'
        },
        {
            name: 'homeAddress',
            type: 'string'
        },
        {
            name: 'praktekId',
            type: 'int'
        },
        {
            name: 'kotaId',
            type: 'int'
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
            name: 'faxNo',
            type: 'string'
        },
        {
            name: 'haveCp',
            type: 'int'
        },
        {
            name: 'dokterStatus',
            type: 'int'
        },
        {
            name: 'marketingId',
            type: 'int'
        },
        {
            name: 'cabangId',
            type: 'int'
        },
        {
            name: 'kotaName',
            type: 'string'
        },
        {
            name: 'agamaName',
            type: 'string'
        }
    ],
    idProperty: 'id'
});