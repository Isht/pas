Ext.define('Pas.model.stock.StockBase', {
    extend: 'Ext.data.Model',
    fields: [
        {
            name: 'id',
            type: 'int'
        },
        {
            name: 'itemName',
            type: 'string'
        },
        {
            name: 'golBarang',
            type: 'int'
        },
        {
            name: 'golBarangName',
            type: 'string'
        },
        {
            name: 'jenisBarang',
            type: 'int'
        },
        {
            name: 'zatAktif',
            type: 'int'
        },
        {
            name: 'zatAktifName',
            type: 'string'
        },
        {
            name: 'dosisBarang',
            type: 'int'
        },
        {
            name: 'dosisSatuan',
            type: 'int'
        },
        {
            name: 'dosisSatuanLongName',
            type: 'string'
        },
        {
            name: 'dosisSatuanName',
            type: 'string'
        },
        {
            name: 'typeBarang',
            type: 'int'
        },
        {
            name: 'typeBarangName',
            type: 'string'
        },
        {
            name: 'satuanJual',
            type: 'int'
        },
        {
            name: 'satuanJualName',
            type: 'string'
        },
        {
            name: 'hargaDasar',
            type: 'float',
            defaultValue: 0
        },
        {
            name: 'hargaJualBarang',
            type: 'float',
            defaultValue: 0
        },
        {
            name: 'hargaJualRacikan',
            type: 'float',
            defaultValue: 0
        },
        {
            name: 'diskonBarang',
            type: 'int'
        },
        {
            name: 'isPpn',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'isExpired',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'showWeb',
            type: 'boolean',
            defaultValue: true
        },
        {
            name: 'minStock',
            type: 'int',
            defaultValue: 0
        },
        {
            name: 'maxStock',
            type: 'int',
            defaultValue: 0
        },
        {
            name: 'currentStock',
            type: 'int',
            defaultValue: 0
        },
        {
            name: 'satuanDefault',
            type: 'int'
        },
        {
            name: 'satuanKonversi',
            type: 'int'
        },
        {
            name: 'nameJualDosis',
            mapping: 'itemName',
            convert: function (v, record) {
                return v + ' [' + record.get('dosisBarang') + ' ' + record.get('dosisSatuanName') + ']'+ ' - ' + record.get('currentStock') + ' ' + record.get('satuanJualName');
            }
        }
    ],
    idProperty: 'id'
});