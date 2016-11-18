Ext.define('Pas.singleton.Util', {
    requires: [
        'Ext.Ajax'
    ],
    singleton: true,
    config: {
        baseUrl: window.location.protocol + "//" + window.location.host + "/passys/"
    },
    constructor: function (config) {
        this.initConfig(config);

        Ext.Ajax.on('beforerequest', this.onBeforeRequest, this);
    },
    onBeforeRequest: function (connection, options) {
        options.url = this.getBaseUrl() + options.url;
    }
});