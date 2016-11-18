/**
 * @author Isht Ae
 **/

Ext.define('Pas.model.Base', {
    extend: 'Ext.data.Model',
    fields: [
        // non­relational properties
        {
            name: 'createDate',
            type: 'date',
            persist: false
        },
        {
            name: 'isActive',
            type: 'boolean',
            defaultValue: true
        }
    ]
});
/* End of file Base.js */
/* Location: ./assets/js/app/model/Base.js */