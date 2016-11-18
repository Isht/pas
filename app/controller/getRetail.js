/**
 * @author Isht.Ae
 * Controller for Penjualan Retail
 */

Ext.define('Pas.controller.getRetail', {
    extend: 'Pas.controller.Base',
    models: [
        // controllers models
        'retail.ItemListRetail',
        // racikan
        'racikan.JenisRacikan',
        'racikan.Racikan',
        'racikan.DetailRacikan'
    ],
    stores: [
        // controllers stores
        'retail.ItemListRetail',
        'retail.Stocks',
        'retail.StocksZatActive',
        'retail.StocksSatuanItem',
        'retail.StocksDiskon',
        'retail.DataPasien',
        'retail.DataDokter',
        // racikan
        'retail.racikan.Stocks',
        'retail.racikan.JenisRacikan',
        'retail.racikan.Racikan',
        'retail.racikan.DetailRacikan',
        'retail.racikan._tempRacikan',
        'retail.racikan._tempDetailRacikan'
    ],
    views: [
        // controllers views
        'retail.getRetail',
        'retail.FormPenjualan',
        'retail.FormDetailPenjualan',
        'retail.GridItemJual',
        'retail.RacikanWin',
        'retail.PmrWin',
        'retail.NonTunaiWin',
        'retail.DokterWin',
        //RACIKAN VIEW
        'retail.FormRacikan',
        'retail.GridItemRacikan',
        'retail.CariRacikanWin',
        'retail.JenisRacikanWin',
        //OTHER VIEW
        'retail.PasienWin'
    ],
    refs: [
        // controllers view refs
        {ref: "FormJual", selector: "[xtype=retail.formpenjualan]"},
        {ref: "FormDetailJual", selector: "[xtype=retail.formdetailpenjualan]"},
        {ref: "GridItemJual", selector: "[xtype=retail.griditemjual]"},
        // racikan
        {ref: "FormRacikan", selector: "[xtype=retail.formracikan]"},
        {ref: "GridItemRacikan", selector: "[xtype=retail.griditemracikan]"}
    ],
    init: function () {
        this.listen({
            component: {
                // list component controller
                '#formPenjualan combobox[name=CMB_ZAT_ACTIVE]': {
                    select: this.filterItemStore
                },
                '#formPenjualan button[action=resetZa]': {
                    click: this.resetZatActive
                },
                '#formPenjualan button[action=showRacikan]': {
                    click: this.showRacikan
                },
                '#formPenjualan combobox[name=CMB_ITEM_JUAL]': {
                    select: this.cmbBarangSelect
                },
                '#formPenjualan button[action=addItemJual]': {
                    click: this.addItemJual
                },
                '#gridItemJual': {
                    actionDelete: this.removeItemJual
                },
                '#formDetailPenjualan checkbox[name=CHK_IS_RESEP]': {
                    change: this.isResep
                },
                '#formDetailPenjualan checkbox[name=CHK_IS_KIRIM]': {
                    change: this.isKirim
                },
                '#formDetailPenjualan checkbox[name=CHK_IS_BIAYA]': {
                    change: this.isBiaya
                },
                '#formDetailPenjualan combobox[name=CMD_DISC_TYPE]': {
                    select: this.countNetto
                },
                '#formDetailPenjualan checkbox[name=CHK_PPN]': {
                    change: this.countNetto
                },
                '#formDetailPenjualan numberfield[name=NUM_UANG_BAYAR]': {
                    change: this.countUangKembali
                },
                '#formDetailPenjualan button[action=showPmr]': {
                    click: this.showPmr
                },
                '#formDetailPenjualan button[action=saveTunai]': {
                    click: this.processPenjualan
                },
                '#formDetailPenjualan button[action=printTunai]': {
                    click: this.processPenjualan
                },
                '#formDetailPenjualan button[action=saveNonTunai]': {
                    click: this.showNonTunai
                },
                '#formDetailPenjualan button[action=resetTrx]': {
                    click: this.cancelPenjualan
                },
                '#formDetailPenjualan button[action=addDokter]': {
                    click: this.showAddDokter
                },
                '#formDetailPenjualan button[action=addPasien]': {
                    click: this.showAddPasien
                },
                '#formRacikan button[action=jenisRacikan]': {
                    click: this.showJenisRacikan
                },
                '#formRacikan button[action=searchRacikan]': {
                    click: this.showSearchRacikan
                },
                '#formRacikan combobox[name=CMB_RACIKAN_TYPE]': {
                    select: this.setHargaKemasan
                },
                '#formRacikan numberfield[name=NUM_RACIKAN_QTY]': {
                    change: this.setHargaKemasan
                },
                '#formRacikan combobox[name=CMB_BARANG_RACIKAN]': {
                    select: this.cmbItemRacikan
                },
                '#formRacikan numberfield[name=NUM_QTY_DOSIS]': {
                    blur: this.setHargaRacikan
                },
                '#formRacikan numberfield[name=NUM_QTY_ZA]': {
                    blur: this.setHargaRacikan
                },
                '#formRacikan numberfield[name=NUM_LANGSUNG_QTY]': {
                    blur: this.setHargaRacikanLangsung
                },
                '#formRacikan button[action=tambahDetRacikan]': {
                    click: this.addItemRacikan
                },
                '#gridItemRacikan': {
                    actionDelete: this.removeItemRacikan
                },
                '#gridItemRacikan numberfield[name=NUM_RACIKAN_SUBTOTAL]': {
                    change: this.countTotalRacikan
                },
                '#gridItemRacikan numberfield[name=NUM_RACIKAN_KEMASAN]': {
                    change: this.countTotalRacikan
                },
                '#racikanWin': {
                    beforeclose: this.racikanClearAll
//                    close: this.addRacikanItemJual
                },
                '#racikanWin button[action=newRacikan]': {
                    click: this.newRacikan
                },
                '#racikanWin button[action=batalRacikan]': {
                    click: this.newRacikan
                },
                '#racikanWin button[action=saveRacikan]': {
                    click: this.newRacikan
                }
            }
        });
    },
    filterItemStore: function (f, e) {
        var form = this.getFormJual().getForm(),
                comboItem = form.findField('CMB_ITEM_JUAL'),
                itemStore = comboItem.getStore();

        itemStore.clearFilter(true);
        itemStore.filter('mi_zataktif', f.getValue());
    },
    resetZatActive: function (b, e, eOpt) {
        var form = this.getFormJual().getForm(),
                comboZa = form.findField('CMB_ZAT_ACTIVE'),
                comboItem = form.findField('CMB_ITEM_JUAL'),
                itemStore = comboItem.getStore();

        comboZa.reset();
        itemStore.clearFilter(true);
    },
    showRacikan: function () {
        Ext.widget('retail.racikanwin');
    },
    cmbBarangSelect: function (f, e) {
        var form = this.getFormJual().getForm(),
                record = f.findRecordByValue(f.getValue()),
                numHarga = form.findField('NUM_HARGA_BARANG'),
                numQty = form.findField('NUM_QTY_BARANG'),
                cmbSatuan = form.findField('CMB_STUAN_ITEM'),
                satuanStore = cmbSatuan.getStore();

        numHarga.setReadOnly(false);
        numHarga.setValue(record.get('hargaJualBarang'));
        cmbSatuan.setReadOnly(false);
        satuanStore.clearFilter(true);
        satuanStore.filter('dis_itemid', f.getValue());
        cmbSatuan.setValue(record.get('satuanDefault'));
        numQty.setReadOnly(false);
        numQty.focus(false, 200);
    },
    addItemJual: function () {
        var form = this.getFormJual(),
                formDetail = this.getFormDetailJual(),
                values = form.getValues(),
                cmbItem = form.getForm().findField('CMB_ITEM_JUAL'),
                numHarga = form.getForm().findField('NUM_HARGA_BARANG'),
                numQty = form.getForm().findField('NUM_QTY_BARANG'),
                cmbSatuan = form.getForm().findField('CMB_STUAN_ITEM'),
                satuanStore = cmbSatuan.getStore(),
                record = cmbItem.findRecordByValue(values.CMB_ITEM_JUAL),
                numSubTotal = formDetail.getForm().findField('NUM_SUB_TOTAL'),
                numNettTotal = formDetail.getForm().findField('NUM_NETT_TOTAL'),
                sum = 0;

        // simple validation
        if (Ext.isEmpty(values.NUM_HARGA_BARANG) || Ext.isEmpty(values.NUM_QTY_BARANG) || Ext.isEmpty(values.CMB_STUAN_ITEM)) {
            Ext.Msg.alert('Attention', 'Please complete Form Penjualan!');
            return false;
        }
        // checking if qty more than stock
        if (numQty.getValue() > record.get('currentStock')) {
            Ext.Msg.alert('Attention', 'Jumlah Stock tidak mencukupi');
            return false;
        }

        var grid = this.getGridItemJual(),
                store = grid.getStore();

//        console.log(values);
        store.add({
            id: store.getCount() + 1,
            jualId: 0,
            itemType: 1,
            itemId: cmbItem.getValue(),
            itemName: record.get('itemName'),
            itemJualDosis: record.get('dosisBarang') + ' ' + record.get('dosisSatuanName'),
            itemPrice: numHarga.getValue(),
            itemQty: numQty.getValue(),
            itemSatuanName: record.get('satuanJualName'),
            itemSubTotal: numHarga.getValue() * numQty.getValue()
        });

//        sum total harga
        store.each(function (rec) {
            sum += rec.get('itemSubTotal');
        });

        numSubTotal.setValue(sum);
        numNettTotal.setValue(sum);

        form.getForm().reset();
        satuanStore.clearFilter(true);
        cmbSatuan.setReadOnly(true);
        cmbItem.focus(false, 200);
//        Ext.Msg.alert('Attention', 'Ext4.1.2�µ�Bug�Ľ�������������µ��µ�¯ßøøøøøøø˙œ,,,,“');
    },
    addRacikanItemJual: function () {
        var form = this.getFormJual(),
                formDetail = this.getFormDetailJual(),
                values = form.getValues(),
                cmbItem = form.getForm().findField('CMB_ITEM_JUAL'),
                numHarga = form.getForm().findField('NUM_HARGA_BARANG'),
                numQty = form.getForm().findField('NUM_QTY_BARANG'),
                cmbSatuan = form.getForm().findField('CMB_STUAN_ITEM'),
                satuanStore = cmbSatuan.getStore(),
                record = cmbItem.findRecordByValue(values.CMB_ITEM_JUAL),
                numSubTotal = formDetail.getForm().findField('NUM_SUB_TOTAL'),
                numNettTotal = formDetail.getForm().findField('NUM_NETT_TOTAL'),
                sum = 0;

        // simple validation
        if (Ext.isEmpty(values.NUM_HARGA_BARANG) || Ext.isEmpty(values.NUM_QTY_BARANG) || Ext.isEmpty(values.CMB_STUAN_ITEM)) {
            Ext.Msg.alert('Attention', 'Please complete Form Penjualan!');
            return false;
        }
        // checking if qty more than stock
        if (numQty.getValue() > record.get('currentStock')) {
            Ext.Msg.alert('Attention', 'Jumlah Stock tidak mencukupi');
            return false;
        }

        var grid = this.getGridItemJual(),
                store = grid.getStore();

//        console.log(values);
        store.add({
            id: store.getCount() + 1,
            jualId: 0,
            itemType: 1,
            itemId: cmbItem.getValue(),
            itemName: record.get('itemName'),
            itemJualDosis: record.get('dosisBarang') + ' ' + record.get('dosisSatuanName'),
            itemPrice: numHarga.getValue(),
            itemQty: numQty.getValue(),
            itemSatuanName: record.get('satuanJualName'),
            itemSubTotal: numHarga.getValue() * numQty.getValue()
        });

//        sum total harga
        store.each(function (rec) {
            sum += rec.get('itemSubTotal');
        });

        numSubTotal.setValue(sum);
        numNettTotal.setValue(sum);

        form.getForm().reset();
        satuanStore.clearFilter(true);
        cmbSatuan.setReadOnly(true);
        cmbItem.focus(false, 200);
//        Ext.Msg.alert('Attention', 'Ext4.1.2�µ�Bug�Ľ�������������µ��µ�¯ßøøøøøøø˙œ,,,,“');
    },
    removeItemJual: function (rec, index) {
        var form = this.getFormJual(),
                formDetail = this.getFormDetailJual(),
                cmbItem = form.getForm().findField('CMB_ITEM_JUAL'),
                cmbSatuan = form.getForm().findField('CMB_STUAN_ITEM'),
                satuanStore = cmbSatuan.getStore(),
                numSubTotal = formDetail.getForm().findField('NUM_SUB_TOTAL'),
                numNettTotal = formDetail.getForm().findField('NUM_NETT_TOTAL'),
                sum = 0;

        var grid = this.getGridItemJual(),
                store = grid.getStore();

//        console.log(values);
        store.removeAt(index);

//        sum total harga
        store.each(function (rec) {
            sum += rec.get('itemSubTotal');
        });

        numSubTotal.setValue(sum);
        numNettTotal.setValue(sum);

        form.getForm().reset();
        satuanStore.clearFilter(true);
        cmbSatuan.setReadOnly(true);
        cmbItem.focus(false, 200);
    },
    showSearchRacikan: function () {
        Ext.widget('retail.cariracikanwin');
    },
    showJenisRacikan: function () {
        Ext.widget('retail.jenisracikanwin');
    },
    setHargaKemasan: function () {
        var form = this.getFormRacikan().getForm(),
                gridRacikan = this.getGridItemRacikan(),
                numRacikanQty = form.findField('NUM_RACIKAN_QTY'),
                cmbJenisRacikan = form.findField('CMB_RACIKAN_TYPE'),
                numKemasan = gridRacikan.down('#NUM_RACIKAN_KEMASAN');

        if (!Ext.isEmpty(numRacikanQty.getValue())) {
            if (Ext.isEmpty(cmbJenisRacikan.getValue())) {
                cmbJenisRacikan.markInvalid();
                cmbJenisRacikan.reset();
                cmbJenisRacikan.focus(false, 200);
                this.showWarningNotif('Jenis Racikan belum di isi');
                return false;
            }

            var record = cmbJenisRacikan.findRecordByValue(cmbJenisRacikan.getValue());
            numKemasan.setValue(numRacikanQty.getValue() * record.get('kemasanPrice'));
        }
    },
    cmbItemRacikan: function (f, e) {
        var form = this.getFormRacikan().getForm(),
                record = f.findRecordByValue(f.getValue()),
                numQty = form.findField('NUM_RACIKAN_QTY'),
                txtSatDosis = form.findField('TXT_SATUAN_DOSIS'),
                txtSatItem = form.findField('TXT_SATUAN_ITEM'),
                numSatDosisId = form.findField('TXT_SATUAN_DOSIS_ID'),
                numSatItemId = form.findField('TXT_SATUAN_ITEM_ID');

        if (Ext.isEmpty(numQty.getValue())) {
            numQty.markInvalid();
            numQty.focus(false, 200);
            f.reset();
            this.showWarningNotif('Jumlah Racikan belum di isi');
            return false;
        }

        txtSatDosis.setValue(Ext.isEmpty(record.get('dosisSatuanLongName')) ? 'Belum Ada Data' : record.get('dosisSatuanLongName'));
        txtSatItem.setValue(Ext.isEmpty(record.get('satuanJualName')) ? 'Belum Ada Data' : record.get('satuanJualName'));
        numSatDosisId.setValue(Ext.isEmpty(record.get('dosisSatuan')) ? 0 : record.get('dosisSatuan'));
        numSatItemId.setValue(Ext.isEmpty(record.get('satuanJual')) ? 0 : record.get('satuanJual'));
    },
    setHargaRacikan: function (f, eOpt) {
        var form = this.getFormRacikan().getForm(),
                numRacikanQty = form.findField('NUM_RACIKAN_QTY'),
                numDosisQty = form.findField('NUM_QTY_DOSIS'),
                numZaQty = form.findField('NUM_QTY_ZA'),
                cmbBarangRacikan = form.findField('CMB_BARANG_RACIKAN'),
                numHargaItemRacikan = form.findField('NUM_HARGA_ITEM_RC'),
                numQtyPembulatan = form.findField('NUM_QTY_PEMBULATAN'),
                dosis = 0, pembulatan = 0, price = 0, za = 0;
        if (!Ext.isEmpty(f.getValue())) {
            if (Ext.isEmpty(cmbBarangRacikan.getValue()) || Ext.isEmpty(numRacikanQty.getValue())) {
                cmbBarangRacikan.markInvalid();
                cmbBarangRacikan.reset();
                cmbBarangRacikan.focus(false, 200);

                numZaQty.reset();
                numDosisQty.reset();

                this.showWarningNotif('Item barang atau jumlah racikan belum di isi.');
                return false;
            }

            var recItem = cmbBarangRacikan.findRecordByValue(cmbBarangRacikan.getValue()),
                    hargaJual = recItem.get('hargaJualRacikan'), valTemp;

            if (recItem.get('satuanDefault') !== recItem.get('satuanJual')) {
                hargaJual = hargaJual * recItem.get('satuanKonversi');
            }

            if (f.getName() === 'NUM_QTY_DOSIS') {
                valTemp = f.getValue() * numRacikanQty.getValue();
                za = valTemp / recItem.get('dosisBarang');
                pembulatan = Math.ceil(za);
                price = hargaJual * pembulatan;

                numZaQty.setValue(za);
            } else if (f.getName() === 'NUM_QTY_ZA') {
                valTemp = f.getValue() * recItem.get('dosisBarang');
                dosis = valTemp / numRacikanQty.getValue();
                pembulatan = Math.ceil(f.getValue());
                price = hargaJual * pembulatan;

                numDosisQty.setValue(dosis);
            }

            numHargaItemRacikan.setValue(price);
            numQtyPembulatan.setValue(pembulatan);
        }
    },
    setHargaRacikanLangsung: function (f, eOpt) {
        var form = this.getFormRacikan().getForm(),
                numRacikanQty = form.findField('NUM_RACIKAN_QTY'),
                numDosisQty = form.findField('NUM_DOSIS_LANGSUNG'),
                numZaQty = form.findField('NUM_ZA_LANGSUNG'),
                cmbBarangRacikan = form.findField('CMB_BARANG_RACIKAN'),
                numHargaItemRacikan = form.findField('NUM_HARGA_ITEM_RC'),
                numQtyPembulatan = form.findField('NUM_QTY_PEMBULATAN'),
                dosis = 0, za = 0, pembulatan, price;

        if (!Ext.isEmpty(f.getValue())) {
            if (Ext.isEmpty(cmbBarangRacikan.getValue()) || Ext.isEmpty(numRacikanQty.getValue())) {
                cmbBarangRacikan.markInvalid();
                cmbBarangRacikan.reset();
                cmbBarangRacikan.focus(false, 200);

                this.showWarningNotif('Item barang atau jumlah racikan belum di isi.');
                return false;
            }

            var recItem = cmbBarangRacikan.findRecordByValue(cmbBarangRacikan.getValue()),
                    hargaJual = recItem.get('hargaJualRacikan'), valTemp1;

            if (recItem.get('satuanDefault') !== recItem.get('satuanJual')) {
                hargaJual = hargaJual * recItem.get('satuanKonversi');
            }

            valTemp1 = numRacikanQty.getValue() * f.getValue();
            dosis = numRacikanQty.getValue() * recItem.get('dosisBarang');
            za = valTemp1 / recItem.get('dosisBarang');
            pembulatan = Math.ceil(za);
            price = hargaJual * valTemp1;

            numDosisQty.setValue(dosis);
            numZaQty.setValue(za);
            numQtyPembulatan.setValue(pembulatan);
            numHargaItemRacikan.setValue(price);
        }
    },
    checkRacikanId: function () {
        var form = this.getFormRacikan().getForm(),
                store = this.getStore('retail.racikan._tempRacikan'),
                numRacikanId = form.findField('NUM_ID'),
                cmbRacikanType = form.findField('CMB_RACIKAN_TYPE'),
                txtRacikanName = form.findField('TXT_RACIKAN_NAME'),
                numRacikanQty = form.findField('NUM_RACIKAN_QTY');


        if (numRacikanId.getValue() === 0) {
            var racikanMd = Ext.create('Pas.model.racikan.Racikan');
            racikanMd.set("id", 0);
            racikanMd.set("resepNo", "0");
            racikanMd.set("racikanType", cmbRacikanType.getValue());
            racikanMd.set("racikanName", txtRacikanName.getValue());
            racikanMd.set("racikanQty", numRacikanQty.getValue());
            racikanMd.set("racikanNetto", 0);
            racikanMd.set("cabangId", 0);

            store.add(racikanMd);

            store.sync({
                scope: this,
                success: function (batch, eOpt) {
                    numRacikanId.setValue(batch.proxy.getReader().rawData.data.id);
                    this.addItemRacikan();
                },
                failure: function (batch, eOpts) {
//                    Sync failed
                },
                callback: function () {
                    store.load();
                }
            });

        } else {
            this.addItemRacikan();
        }
    },
    addItemRacikan: function () {
        var form = this.getFormRacikan().getForm(),
                values = this.getFormRacikan().getValues(),
                gridRacikan = this.getGridItemRacikan(),
                store = gridRacikan.getStore(),
                cmbBarangRacikan = form.findField('CMB_BARANG_RACIKAN'),
                chkIsLangsung = form.findField('CHK_IS_LANGSUNG'),
                numRacikanSubtotal = gridRacikan.down('#NUM_RACIKAN_SUBTOTAL'),
                numHargaItemRacikan = form.findField('NUM_HARGA_ITEM_RC'),
                numRacikanId = form.findField('NUM_ID'),
                sum = 0;

        if (numRacikanId.getValue() === 0) {
            this.checkRacikanId();
            return false;
        }
        // simple validation
        if (Ext.isEmpty(values.NUM_HARGA_ITEM_RC) || Ext.isEmpty(values.NUM_RACIKAN_QTY) || Ext.isEmpty(values.CMB_BARANG_RACIKAN)) {
            Ext.Msg.alert('Attention', 'Please complete Form Racikan!');
            return false;
        }

        var recItem = cmbBarangRacikan.findRecordByValue(cmbBarangRacikan.getValue());

        // checking if qty more than stock
        if (values.NUM_QTY_PEMBULATAN > recItem.get('currentStock')) {
            Ext.Msg.alert('Attention', 'Jumlah Stock tidak mencukupi');
            return false;
        }

//        Adding data to store;
        store.add({
            id: 0,
            racikanId: numRacikanId.getValue(),
            itemId: cmbBarangRacikan.getValue(),
            itemName: recItem.get('itemName'),
            itemQty: values.NUM_QTY_PEMBULATAN,
            itemPrice: recItem.get('hargaJualRacikan'),
            itemSatuanName: recItem.get('satuanJualName'),
            itemSubTotal: numHargaItemRacikan.getValue()
        });

//        sum total harga
        store.each(function (rec) {
            sum += rec.get('itemSubTotal');
        });

        numRacikanSubtotal.setValue(sum);

        cmbBarangRacikan.reset();
        numHargaItemRacikan.reset();
        cmbBarangRacikan.focus(false, 200);
        chkIsLangsung.reset();

//        RESET CURRENT FORM
        form.findField('NUM_LANGSUNG_QTY').reset();
        form.findField('NUM_ZA_LANGSUNG').reset();
        form.findField('NUM_DOSIS_LANGSUNG').reset();
        form.findField('NUM_QTY_PEMBULATAN').reset();

        form.findField('NUM_QTY_DOSIS').reset();
        form.findField('TXT_SATUAN_DOSIS').reset();
        form.findField('TXT_SATUAN_DOSIS_ID').reset();
        form.findField('NUM_QTY_ZA').reset();
        form.findField('TXT_SATUAN_ITEM').reset();
        form.findField('TXT_SATUAN_ITEM_ID').reset();
    },
    removeItemRacikan: function (rec, index) {
        var gridRacikan = this.getGridItemRacikan(),
                store = gridRacikan.getStore(),
                numRacikanSubtotal = gridRacikan.down('#NUM_RACIKAN_SUBTOTAL'),
                sum = 0;

//        console.log(values);
        store.removeAt(index);
        store.sync({
            success: function (resp) {
            },
            failure: function (resp) {
//                Sync failed
            },
            callback: function (resp) {
                store.load();
//                Always called after sync is complete whether it succeeded or not
            }
        });

//        sum total harga
        store.each(function (rec) {
            sum += rec.get('itemSubTotal');
        });

        numRacikanSubtotal.setValue(sum);
    },
    countTotalRacikan: function () {
        var grid = this.getGridItemRacikan(),
                numRacikanSubtotal = grid.down('#NUM_RACIKAN_SUBTOTAL'),
                numRacikanKm = grid.down('#NUM_RACIKAN_KEMASAN'),
                numRacikanNetto = grid.down('#NUM_RACIKAN_NETTO');

        numRacikanNetto.setValue(numRacikanSubtotal.getValue() + numRacikanKm.getValue());
    },
    racikanClearAll: function () {
        var form = this.getFormRacikan().getForm(),
                store = this.getStore('retail.racikan._tempRacikan'),
                numRacikanId = form.findField('NUM_ID'),
                cmbRacikanType = form.findField('CMB_RACIKAN_TYPE'),
                txtRacikanName = form.findField('TXT_RACIKAN_NAME'),
                numRacikanQty = form.findField('NUM_RACIKAN_QTY');


        console.log(numRacikanId.getValue());

        if (numRacikanId.getValue() !== 0) {
            var rowIndex = store.indexOfId(numRacikanId.getValue());
            store.removeAt(rowIndex);
            store.sync();
        }
    },
    newRacikan: function () {
        var form = this.getFormRacikan().getForm(),
                grid = this.getGridItemRacikan(),
                store = grid.getStore(),
                numRacikanSubtotal = grid.down('#NUM_RACIKAN_SUBTOTAL'),
                numRacikanKm = grid.down('#NUM_RACIKAN_KEMASAN'),
                numRacikanNetto = grid.down('#NUM_RACIKAN_NETTO');

        store.removeAll();
        form.reset();
        numRacikanSubtotal.reset();
        numRacikanKm.reset();
        numRacikanNetto.reset();
    },
    isResep: function (rb, nv, ov, options) {
        var formDetail = this.getFormDetailJual(),
                cmbDokter = formDetail.getForm().findField('CMB_DOKTER_ID'),
                btnDokter = formDetail.down('#newDokter');

        if (nv) {
            cmbDokter.enable();
            cmbDokter.reset();
            btnDokter.enable();
        } else {
            cmbDokter.disable();
            btnDokter.disable();
        }
    },
    isKirim: function (rb, nv, ov, options) {
        var formDetail = this.getFormDetailJual(),
                chkIsKirim = formDetail.getForm().findField('CHK_IS_BIAYA'),
                numBiayaKirim = formDetail.getForm().findField('NUM_BIAYA_KIRIM'),
                txaAlamatKirim = formDetail.getForm().findField('TXA_ALAMAT_KIRIM');

        if (nv) {
            txaAlamatKirim.enable();
            txaAlamatKirim.reset();
            chkIsKirim.enable();
            chkIsKirim.reset();
            numBiayaKirim.reset();
        } else {
            txaAlamatKirim.reset();
            txaAlamatKirim.disable();
            chkIsKirim.reset();
            chkIsKirim.disable();
            numBiayaKirim.reset();
        }
    },
    isBiaya: function (rb, nv, ov, options) {
        var formDetail = this.getFormDetailJual(),
                numBiayaKirim = formDetail.getForm().findField('NUM_BIAYA_KIRIM');

        if (nv) {
            numBiayaKirim.enable();
            numBiayaKirim.reset();
        } else {
            numBiayaKirim.reset();
            numBiayaKirim.disable();
        }
    },
    showPmr: function () {
        Ext.widget('retail.pmrwin');
    },
    showNonTunai: function () {
        var grid = this.getGridItemJual(),
                store = grid.getStore();

        if (store.getCount() === 0) {
            Ext.Msg.alert('Warning', 'Anda Belum melakukan transaksi');
            return false;
        }

        Ext.widget('retail.nontunaiwin');
    },
    showAddDokter: function () {
        Ext.widget('retail.dokterwin');
    },
    showAddPasien: function () {
        Ext.widget('retail.pasienwin');
    },
    processPenjualan: function () {
        var form = this.getFormJual(),
                formDetail = this.getFormDetailJual(),
                cmbPasien = formDetail.getForm().findField('CMB_PASIEN_ID');

        var grid = this.getGridItemJual(),
                store = grid.getStore();

        if (store.getCount() === 0) {
            Ext.Msg.alert('Warning', 'Anda Belum melakukan transaksi');
            return false;
        }

        if (Ext.isEmpty(cmbPasien.getValue())) {
            //SHOW Pasien Umum Window
            Ext.MessageBox.prompt('Nama Pasien', 'Masukkan Nama Pasien :', function (btn, text) {
                if (btn == 'ok') {
                    // process text value and close...
                    console.log(text);
                }
            });
        }

//        store.removeAll();
//        form.getForm().reset();
//        formDetail.getForm().reset();
//        satuanStore.clearFilter(true);
//        cmbSatuan.setReadOnly(true);
//        cmbItem.focus(false, 200);
        this.cancelPenjualan();
//        Ext.Msg.alert('Success', 'Ext4.1.2�µ�Bug�Ľ�������������µ��µ�¯');
        this.showSuccessNotif('Proses Penjualan Berhasil');
    },
    cancelPenjualan: function () {
        var form = this.getFormJual(),
                formDetail = this.getFormDetailJual(),
                cmbItem = form.getForm().findField('CMB_ITEM_JUAL'),
                cmbSatuan = form.getForm().findField('CMB_STUAN_ITEM'),
                satuanStore = cmbSatuan.getStore(),
                numSubTotal = formDetail.getForm().findField('NUM_SUB_TOTAL'),
                sum = 0;

        var grid = this.getGridItemJual(),
                store = grid.getStore();

        store.removeAll();
        form.getForm().reset();
        formDetail.getForm().reset();
        satuanStore.clearFilter(true);
        cmbSatuan.setReadOnly(true);
        cmbItem.focus(false, 200);
    },
    countNetto: function () {
        var formDetail = this.getFormDetailJual(),
                numSubTotal = formDetail.getForm().findField('NUM_SUB_TOTAL'),
                cmbDisc = formDetail.getForm().findField('CMD_DISC_TYPE'),
                numDiscValue = formDetail.getForm().findField('NUM_DISC_VALUE'),
                chkPpn = formDetail.getForm().findField('CHK_PPN'),
                numEmbalance = formDetail.getForm().findField('NUM_EMBALANCE'),
                numNetto = formDetail.getForm().findField('NUM_NETT_TOTAL'),
                numUangBayar = formDetail.getForm().findField('NUM_UANG_BAYAR'),
                numUangKembali = formDetail.getForm().findField('NUM_UANG_KEMBALI'),
                netto = 0, bruto = 0, discVal = 0;

        bruto = numSubTotal.getValue() + numEmbalance.getValue();
        bruto = chkPpn.getValue() ? ((bruto * 0.1) + bruto) : bruto;
        discVal = Ext.isEmpty(cmbDisc.getValue()) ? 0 : ((cmbDisc.findRecordByValue(cmbDisc.getValue()).get('diskonValue') / 100) * bruto);

        netto = bruto - discVal;

        numDiscValue.setValue(discVal);
        numNetto.setValue(netto);

    },
    countUangKembali: function () {
        var formDetail = this.getFormDetailJual(),
                numNetto = formDetail.getForm().findField('NUM_NETT_TOTAL'),
                numUangBayar = formDetail.getForm().findField('NUM_UANG_BAYAR'),
                numUangKembali = formDetail.getForm().findField('NUM_UANG_KEMBALI'),
                change = 0;

        change = numUangBayar.getValue() - numNetto.getValue();
        numUangKembali.setValue(change);
    },
    onSuccess: function (resp, id) {
        //TODO ajax request response success by id
    },
    onFailure: function (resp, id) {
        //TODO ajax request response failed by id
    }
});