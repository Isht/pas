Ext.define('Pas.model.stock.StockSatuanItem', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'barangId',
            type: 'int'
        },
        {
            name: 'satuanId',
            type: 'int'
        },
        {
            name: 'satuanKonversi',
            type: 'int'
        },
        {
            name: 'satuanName',
            type: 'string'
        },
        {
            name: 'isDefault',
            type: 'boolean'
        }
    ],
    idProperty: 'id'
});