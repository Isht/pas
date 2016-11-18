/**
 * @author Isht.Ae
 */
Ext.define('Pas.view.payment.getPayment', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.payment.getpayment',
    border: false,
    layout: 'fit',
    initComponent: function () {
        var me = this,
                panel = me;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'payment.paymentgrid'
                }
            ]
        });

        me.callParent(arguments);
    }
});