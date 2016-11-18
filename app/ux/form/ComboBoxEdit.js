Ext.define('Ext.ux.form.ComboBoxEdit', {
    extend: 'Ext.form.field.ComboBox',
    trigger2Cls: 'x-form-new-trigger',
    alias: 'widget.comboboxedit',
    initComponent: function() {
        var me = this;
        me.callParent(arguments);
    },
    afterRender: function() {
        this.callParent();
    }
});

