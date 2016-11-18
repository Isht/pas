Ext.define('Pas.view.Viewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.tab.Panel',
        'Ext.tree.Panel',
        'Ext.layout.container.Border',
        'Ext.layout.container.Accordion',
        'Ext.layout.container.Column'
    ],
    layout: {
        type: 'border',
        padding: '0 3 3 3'
    },
    items: [
        {
            region: 'north',
            layout: {
                type: 'hbox'
            },
            height: 40,
            bodyStyle: 'background: #0081b7;',
            items: [
                {
                    id: 'app-header',
                    xtype: 'box',
                    html: 'Parahita Apotek System <small>v 3.2.0116 <span style="color: #ccc;">beta</span></small>'
                },
                {
//                    id: 'app-info',
                    xtype: 'box',
                    html: '<ul class="app-info"><li><b>CABANG:</b> PUSAT</li><li><b>SERVER:</b> LOCALHOST</li></ul>'
                },
                {
                    xtype: 'button',
                    itemId: 'userName',
                    glyph: 0xf007,
                    cls: 'cust-btn biru',
                    textAlign: 'left',
                    text: 'SUPER ADMIN',
                    margin: '8 0 0 0',
                    style: 'float:right;',
                    defaults: {
                        padding: '0 10'
                    },
                    width: 150,
                    menu: [
                        {
                            text: 'Logout',
                            width: 150,
                            glyph: 0xf08b,
                            cls: 'merah',
                            itemId: 'doLogout'
                        },
                        '-',
                        {
                            text: 'Profile',
                            width: 150,
                            glyph: 0xf0ad,
                            cls: 'biru',
                            itemId: 'userProfile'
                        },
                        {
                            text: 'About',
                            width: 150,
                            glyph: 0xf1fa,
                            cls: 'biru',
                            itemId: 'aboutApp'
                        },
                        {
                            text: 'Help',
                            width: 150,
                            glyph: 0xf059,
                            cls: 'biru',
                            itemId: 'helpApp'
                        }
                    ]
                }
            ]
        },
        {
            region: 'west',
            title: "NAVIGASI",
            itemId: 'appNav',
            split: true,
            collapsible: true,
            width: 225,
            minWidth: 200,
            maxWidth: 250,
            padding: '2 0 0 0',
            layout: {
                type: 'accordion',
                animate: true
            },
            defaults: {
                hideCollapseTool: true,
                autoScroll: true,
                border: true
            },
            items: [
                {
                    title: 'FRONT OFFICE',
                    xtype: 'layout.navfrontoffice',
                    glyph: 0xf17a,
                    cls: 'hitam acc-custom'
                },
                {
                    title: 'DATA PASIEN',
                    xtype: 'layout.navdatapasien',
                    glyph: 0xf0c0,
                    cls: 'hitam acc-custom'
                },
                {
                    title: 'GUDANG',
                    xtype: 'layout.navgudang',
                    glyph: 0xf1b2,
                    cls: 'hitam acc-custom'
                },
                {
                    title: 'MASTER DATA',
                    xtype: 'layout.navmaster',
                    glyph: 0xf07c,
                    cls: 'hitam acc-custom'
                },
                {
                    title: 'PENGATURAN',
                    xtype: 'layout.navpengaturan',
                    glyph: 0xf013,
                    cls: 'hitam acc-custom'
                }
            ]
        },
        {
            region: 'center',
            xtype: 'layout.mainlayout',
            padding: '2 0 0 0'
        }
    ]
});
