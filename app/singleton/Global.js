Ext.define('Pas.singleton.Global', {
    singleton: true,
    config: {
        userId: 0,
        userName: "USER_NAME",
        divisiId: 0,
        divisiName: "",
        cabangId: 1,
        cabangName: "",
        isAdmin: false,
        isRole: false,
        appPeriod: 0,
        appLogo: "assets/img/app_logo.png"
    },
    constructor: function (config) {
        this.initConfig(config);
    }
});