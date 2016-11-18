Ext.define('Pas.controller.App', {
    extend: 'Pas.controller.Base', //Extends base controller
    models: [
//        ALL SHARED MODEL HERE
        'shared.DataDiskon',
        'shared.DataPasien',
        'shared.DataDokter'
    ],
    stores: [
    ],
    views: [
        'layout.MainLayout',
        'layout.NavFrontOffice',
        'layout.NavDataPasien',
        'layout.NavGudang',
        'layout.NavMaster',
        'layout.NavPengaturan'
    ],
    refs: [
        {ref: "MenuFo", selector: "[xtype=layout.navfrontoffice]"},
        {ref: "MenuPasien", selector: "[xtype=layout.navdatapasien]"},
        {ref: "MenuGudang", selector: "[xtype=layout.navgudang]"},
        {ref: "MenuMaster", selector: "[xtype=layout.navmaster]"},
        {ref: "MenuPengaturan", selector: "[xtype=layout.navpengaturan]"},
        {ref: "Navigasi", selector: "#appNav"},
        {ref: "Tabs", selector: "[xtype=layout.mainlayout]"}
    ],
    init: function () {
        this.listen({
            controller: {
                '#App': {
                    tokenchange: this.dispatch,
                    keymapping: this.keyBindingCheck
                }
            },
            component: {
                'menu[xtype=layout.navfrontoffice] menuitem': {
                    click: this.addHistory
                },
                'menu[xtype=layout.navdatapasien] menuitem': {
                    click: this.addHistory
                },
                'menu[xtype=layout.navgudang] menuitem': {
                    click: this.addHistory
                },
                'menu[xtype=layout.navmaster] menuitem': {
                    click: this.addHistory
                },
                'menu[xtype=layout.navpengaturan] menuitem': {
                    click: this.addHistory
                },
                '[xtype=layout.mainlayout]': {
                    tabchange: this.changeTitle
                }
            },
            global: {
                aftervalidateloggedin: this.setupApplication
            },
            store: {}
//            proxy: {
//                '#ajax': {
//                    exception: function (proxy, response, operation, eOpts) {
//                        console.log(response.status);
//                    }
//                }
//            }
        });
    },
    /**
     *  Entry point for our application. Will render the viewport, and do any
     other setup required for our application
     */
    setupApplication: function () {
        var me = this;
        // create the viewport, effectively creating the view for our application
        Ext.create('Pas.view.Viewport');
        // init Ext.util.History on app launch; if there is a hash in the url,
        // our controller will load the appropriate content
        Ext.util.History.init(function () {
            var hash = document.location.hash;
            if (hash === "") {
                Ext.util.History.add('getHome');
            }
            Ext.getDoc().dom.title = 'PAS - Dashboard';

            me.fireEvent('tokenchange', hash.replace('#', ''));
        });
        // add change handler for Ext.util.History; when a change in the token
        // occurs, this will fire our controller's event to load the appropriate content
//        Ext.util.History.on('change', function (token) {
//            me.fireEvent('tokenchange', token);
//        });
    },
    /**
     * Change Browser Title and add History based on tab change
     */
    changeTitle: function (tabPanel, newTab, oldTab, eOpts) {
        var title = newTab.title;
        var token = newTab.getItemId();

        Ext.getDoc().dom.title = 'PAS - ' + title.replace("&nbsp;&nbsp;", "");
        Ext.util.History.add(token);
    },
    /**
     * Add history token to Ext.util.History * @param {Ext.menu.Item} item
     * @param {Object} e
     * @params {Object} opts
     */
    addHistory: function (item, e, opts) {
        var me = this,
                token = item.itemId;
        if (token === undefined) {
            return;
        }

        Ext.util.History.add(token);
        me.fireEvent('tokenchange', token);
    },
    /**
     * Handles token change and directs creation of content in center region
     * @param {String} token
     */
    dispatch: function (token) {
        var me = this, config;
//        switch on token to determine which content to create 
        if (token === 'getHome') {
            return;
        }

        switch (token) {
            case 'getRetail':
                config = {glyph: 0xf217, itemId: token, title: 'Penjualan Retail', group: 1};
                break;
            case 'getNonRetail':
                config = {glyph: 0xf16b, itemId: token, title: 'Penjualan Non Retail', group: 1};
                break;
            case 'getSale':
                config = {glyph: 0xf201, itemId: token, title: 'Daftar Penjulan', group: 1};
                break;
            case 'getCash':
                config = {glyph: 0xf0d6, itemId: token, title: 'Penerimaan Kas', group: 1};
                break;
            case 'getPayment':
                config = {glyph: 0xf046, itemId: token, title: 'Pelunasan', group: 1};
                break;
            case 'getPmr':
                config = {glyph: 0xf0cb, itemId: token, title: 'Daftar PMR', group: 2};
                break;
            case 'getPatient':
                config = {glyph: 0xf21d, itemId: token, title: 'Data Pasien', group: 2};
                break;
            case 'getStock':
                config = {glyph: 0xf1b2, itemId: token, title: 'Data Barang', group: 3};
                break;
            case 'getDirectBuy':
                config = {glyph: 0xf02a, itemId: token, title: 'Beli Langsung', group: 3};
                break;
            case 'getProcurement':
                config = {glyph: 0xf066, itemId: token, title: 'Pengadaan Stock', group: 3};
                break;
            case 'getPurchase':
                config = {glyph: 0xf1d9, itemId: token, title: 'PO Barang', group: 3};
                break;
            case 'getStockIn':
                config = {glyph: 0xf019, itemId: token, title: 'TT Barang', group: 3};
                break;
            case 'getFaktur':
                config = {glyph: 0xf1f0, itemId: token, title: 'TT Faktur', group: 3};
                break;
            case 'getOpname':
                config = {glyph: 0xf046, itemId: token, title: 'Stock Opname', group: 3};
                break;
            case 'getStockFlow':
                config = {glyph: 0xf0ec, itemId: token, title: 'Arus Stock', group: 3};
                break;
            case 'getDoctor':
                config = {glyph: 0xf0f0, itemId: token, title: 'Data Dokter', group: 4};
                break;
            case 'getSupplier':
                config = {glyph: 0xf0d1, itemId: token, title: 'Data Supplier', group: 4};
                break;
            case 'getRekanan':
                config = {glyph: 0xf02c, itemId: token, title: 'Data Rekanan', group: 4};
                break;
            case 'getUsers':
                config = {glyph: 0xf007, itemId: token, title: 'Pengguna', group: 5};
                break;
            case 'getApps':
                config = {glyph: 0xf108, itemId: token, title: 'Aplikasi', group: 5};
                break;
            default:
                return;
                break;
        }

        me.addCenterRegion(config);
    },
    /**
     * Add new tab of app with passed configuration * @param {Object} config
     */
    addCenterRegion: function (config) {
        var me = this,
                tabs = me.getTabs();
        // Check Tabs with current Id;
        if (config.itemId === 'getHome' || config.itemId === undefined) {
            return false;
        }
        var removeGet = config.itemId.substring(3),
                folder = removeGet.toLowerCase();

        var cls = "Pas.view." + folder + "." + config.itemId;

        var tab = tabs.child('#' + config.itemId);
        var tabController = this.application.controllers.get(config.itemId);

        var nav = this.getNavigasi();
        nav.items.get((config.group - 1)).expand();
        // Check if Controller didn't exist, load Controller
        if (!tabController) {
            this.application.getController(config.itemId);
        }

        // Check if Tab didn't exist, create new Tab
        if (!tab) {
            config.closable = true;
            tab = tabs.add(Ext.create(cls, config));
        }
        tabs.setActiveTab(tab);
    },
    /**
     * Catch Keybinding For Shortcut
     */
    keyBindingCheck: function (config) {
        new Ext.util.KeyMap({
            target: document,
            binding: [
                {
                    key: [119], //F8 IF Confuse Look At [Ext.EventObject] Docs
//                    alt: true,
//                    ctrl: false,
//                    shift: false,
                    scope: this,
                    fn: function () {
                        this.setEfDelapan();
                    }
                },
                {
                    key: [120], //F9 
//                    alt: false,
//                    ctrl: false,
//                    shift: false,
                    scope: this,
                    fn: function () {
                        this.setEfSembilan();
                    },
                    stopEvent: true,
                    stopPropagation: true,
                    preventDefault: true
                },
                {
                    key: [78], //Huruf N
                    alt: true,
//                    ctrl: false,
//                    shift: false,
                    scope: this,
                    fn: function () {
                        this.setALtEn();
                    },
                    stopEvent: true,
                    stopPropagation: true,
                    preventDefault: true
                },
                {
                    key: [83], //Huruf S
                    alt: true,
//                    ctrl: false,
//                    shift: false,
                    scope: this,
                    fn: function () {
                        this.setALtEs();
                    },
                    stopEvent: true,
                    stopPropagation: true,
                    preventDefault: true
                },
                {
                    key: [84], //Huruf T
                    alt: true,
//                    ctrl: false,
//                    shift: false,
                    scope: this,
                    fn: function () {
                        this.setALtTe();
                    },
                    stopEvent: true,
                    stopPropagation: true,
                    preventDefault: true
                }
            ]
        });
    },
    setEfDelapan: function () {
        var tabs = this.getTabs(),
                tabId = tabs.getActiveTab().getItemId();
        switch (tabId) {
            case 'getHome':
                return;
                break;
            case 'getRetail':
                this.getController(tabId).showRacikan();
                break;
            default:
                console.log('NOT ASSIGNED');
                return;
                break;
        }
    },
    setEfSembilan: function () {
        var tabs = this.getTabs(),
                tabId = tabs.getActiveTab().getItemId();
        switch (tabId) {
            case 'getHome':
                return;
                break;
            case 'getRetail':
                this.getController(tabId).addItemJual();
                break;
            default:
                console.log('NOT ASSIGNED');
                return;
                break;
        }
    },
    setALtEn: function () {
        var tabs = this.getTabs(),
                tabId = tabs.getActiveTab().getItemId();
        switch (tabId) {
            case 'getHome':
                return;
                break;
            case 'getRetail':
                this.getController(tabId).showNonTunai();
                break;
            default:
                console.log('NOT ASSIGNED');
                return;
                break;
        }
    },
    setALtEs: function () {
        var tabs = this.getTabs(),
                tabId = tabs.getActiveTab().getItemId();
        switch (tabId) {
            case 'getHome':
                return;
                break;
            case 'getRetail':
                this.getController(tabId).processPenjualan();
                break;
            default:
                console.log('NOT ASSIGNED');
                return;
                break;
        }
    },
    setALtTe: function () {
        var tabs = this.getTabs(),
                tabId = tabs.getActiveTab().getItemId();
        switch (tabId) {
            case 'getHome':
                return;
                break;
            case 'getRetail':
                this.getController(tabId).processPenjualan();
                break;
            default:
                console.log('NOT ASSIGNED');
                return;
                break;
        }
    }
});