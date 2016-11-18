/**
 * @author Isht Ae
 **/

Ext.define('Pas.store.app.MenuStore', {
    extend: 'Ext.data.TreeStore',
    model: 'Pas.model.menu.MenuModel',
    requires: 'Pas.model.menu.MenuModel',
    root: {
        id: 0,
        text: 'root',
        expanded: true
    },
    proxy: {
        type: 'ajax',
        url: 'apps/app_menu',
        actionMethods: 'POST',
        reader: {
            type: 'json'
        }
    }
});
/* End of file TreeMenu.js */
/* Location: ./assets/js/app/store/TreeMenu.js */