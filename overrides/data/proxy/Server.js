/* 
 * @class Ext.data.proxy.Server
 * @overrides Ext.data.proxy.Server
 * Override for Ext.data.proxy.Server
 * ae.isht@gmail.com
 * http://drhelga.de/blog/2014/01/03/extjs-add-operators-and-types-to-remote-sorting-rpc-call/
 */

Ext.define('Override.data.proxy.Server', {
    override :'Ext.data.proxy.Server',

    encodeFilters: function(filters) {
      var min = [],
          length = filters.length,
          i = 0;

      for (; i < length; i++) {
          min[i] = {
              property: filters[i].property,
              operator: filters[i].operator,
              compare: filters[i].compare,
              type    : filters[i].type,
              value   : filters[i].value
          };
      }
      return this.applyEncoding(min);
  }
});

