Ext.define('Pas.model.racikan.DetailRacikan', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'racikanId',
            type: 'int'
        },
        {
            name: 'itemId',
            type: 'int'
        },
        {
            name: 'itemName',
            type: 'string'
        },
        {
            name: 'isLangsung',
            type: 'boolean'
        },
        {
            name: 'langsungQty',
            type: 'float'
        },
        {
            name: 'zaQty',
            type: 'float'
        },
        {
            name: 'dosisQty',
            type: 'float'
        },
        {
            name: 'itemQty',
            type: 'int'
        },
        {
            name: 'itemPrice',
            type: 'float'
        },
        {
            name: 'itemSatuan',
            type: 'int'
        },
        {
            name: 'itemSatuanName',
            type: 'string'
        },
        {
            name: 'dosisSatuan',
            type: 'int'
        },
        {
            name: 'dosisSatuanSym',
            type: 'string'
        },
        {
            name: 'dosisSatuanName',
            type: 'string'
        },
        {
            name: 'cabangId',
            type: 'int'
        },
        {
            name: 'itemSubTotal',
            type: 'float'
        },
        {
            name: 'isTemp',
            type: 'boolean',
            defaultValue: true
        }
    ],
    idProperty: 'id'
});