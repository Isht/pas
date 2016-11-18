Ext.define('Pas.model.retail.ItemListRetail', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'jualId',
            type: 'int'
        },
        {
            name: 'itemType',
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
            name: 'itemDosis',
            type: 'int'
        },
        {
            name: 'itemDosisSatuanName',
            type: 'string'
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
            name: 'itemSubTotal',
            type: 'float'
        },
        {
            name: 'isTemp',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'itemJualDosis',
            mapping: 'itemDosis',
            convert: function (v, record) {
                return v + ' ' + record.get('itemDosisSatuanName');
            }
        }
    ],
    idProperty: 'id'
});