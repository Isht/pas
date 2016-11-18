Ext.define('Pas.model.security.User', {
    extend: 'Ext.data.Model',
    fields: [
        // nonrelational properties
        {
            name: 'fullName',
            type: 'string',
            persist: false
        },
        {
            name: 'userName',
            type: 'string',
            persist: false
        },
        {
            name: 'userRoles',
            type: 'any',
            persist: false
        }
    ],
    inRole: function (RoleID) {
        var me = this;
        return Ext.Array.contains(me.get('userRoles'), RoleID);
    }
});