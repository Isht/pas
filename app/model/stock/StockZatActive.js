Ext.define('Pas.model.stock.StockZatActive', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'zatActiveName',
            type: 'string'
        },
        {
            name: 'statusSimpan',
            type: 'int'
        }
    ],
    idProperty: 'id'
});