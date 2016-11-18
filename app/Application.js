Ext.define('Pas.Application', {
    name: 'Pas',
    extend: 'Ext.app.Application',
    requires: [
        //Overrides
        'Override.data.proxy.Server',
        //Singleton
        'Pas.domain.Proxy',
        'Pas.singleton.Util',
        'Pas.singleton.Glyphs',
        'Pas.singleton.Global',
        'Ext.util.History',
//        'Ext.util.KeyMap',
        //App Requires
        'Ext.form.CheckboxGroup',
        'Ext.form.Label',
        'Ext.form.FieldSet',
        'Ext.form.field.Number',
        'Ext.form.FieldContainer',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.Checkbox',
        'Ext.form.RadioGroup',
        'Ext.grid.column.Action',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Number',
        'Ext.grid.column.Date',
        'Ext.grid.feature.Grouping',
        'Ext.grid.plugin.CellEditing',
        //UX
        'Ext.ux.form.SearchField',
        'Ext.ux.form.NumericField',
        'Ext.ux.form.ComboBoxEdit',
        'Ext.ux.selection.CheckboxModel',
        'Ext.ux.window.Notification'
//        'Ext.ux.form.GridComboBox',
//        'Ext.ux.view.GridComboBoxList'
    ],
    models: [
        'Pas.model.security.User'
    ],
//    stores: [],
    controllers: [
        'Base',
        'App',
        'AppSecurity',
        'getApps',
        'getCash',
        'getDirectBuy',
        'getDoctor',
        'getFaktur',
        'getNonRetail',
        'getOpname',
        'getPatient',
        'getPayment',
        'getPmr',
        'getProcurement',
        'getPurchase',
        'getRekanan',
        'getRetail',
        'getSale',
        'getStock',
        'getStockFlow',
        'getStockIn',
        'getSupplier',
        'getUsers'
    ],
    init: function () {
        Ext.setGlyphFontFamily('FontAwesome');
        Ext.Ajax.on('requestexception', function (conn, resp, options) {
            if (resp.status === 403) {
                console.log('not login');
            } else if (resp.status === 404) {
                console.log('Not found');
            } else if (resp.status === 500) {
                console.log('Error on coding');
            }
        });
        //Set these once, right after Ext.onReady
        Ext.util.Format.thousandSeparator = '.';
        Ext.util.Format.decimalSeparator = ',';

        //Override Grid ActionColumn
        Ext.grid.column.Action.override({
            constructor: function () {
                this.callParent(arguments);
                Ext.each(this.items, function () {
                    var handler;
                    if (this.action) {
                        handler = this.handler; // save configured handler
                        this.handler = function (view, rowIdx, colIdx, item, e, record) {
                            view.up('grid').fireEvent(item.action, record, rowIdx);
                            handler && handler.apply(this, arguments);
                        };
                    }
                });
            }
        });
    },
    launch: function () {
        //SET HISTORY FOR APP
        var me = this;

        Ext.globalEvents.fireEvent('beforeviewportrender');
        me.getAppController().fireEvent('keymapping', this);
    }
});
