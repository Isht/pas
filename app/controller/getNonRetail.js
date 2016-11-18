/**
 * @author Isht.Ae
 * Controller for Penjualan Retail
 */

Ext.define('Pas.controller.getNonRetail', {
    extend: 'Pas.controller.Base',
    models: [
        //TODO controllers models
    ],
    stores: [
        //TODO controllers stores
    ],
    views: [
        // controllers views
        'nonretail.getNonRetail',
        'nonretail.FormPenjualan',
        'nonretail.GridItemJual',
        'nonretail.FormDetailPenjualan',
        'nonretail.NonTunaiWin'
    ],
    refs: [
        //TODO controllers view refs
    ],
    init: function () {
        this.listen({
            component: {
                // list component controller
                '#formDetailPenjualanNr button[action=saveNonTunaiNr]': {
                    click: this.showNonTunai
                }
            }
        });
    },
    showNonTunai: function() {
        Ext.widget('nonretail.nontunaiwin');
    },
    onSuccess: function (resp, id) {
        //TODO ajax request response success by id
    },
    onFailure: function (resp, id) {
        //TODO ajax request response failed by id
    }
});
