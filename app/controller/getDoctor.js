/**
 * @author Isht.Ae
 * Controller for Penjualan Retail
 */

Ext.define('Pas.controller.getDoctor', {
    extend: 'Pas.controller.Base',
    models: [
        //TODO controllers models
    ],
    stores: [
        //TODO controllers stores
    ],
    views: [
        // controllers views
        'doctor.getDoctor',
        'doctor.FormDoctor',
        'doctor.GridDoctor'
    ],
    refs: [
        //TODO controllers view refs
    ],
    init: function () {
        this.listen({
            component: {
                //TODO list component controller
            }
        });
    },
    onSuccess: function (resp, id) {
        //TODO ajax request response success by id
    },
    onFailure: function (resp, id) {
        //TODO ajax request response failed by id
    }
});
