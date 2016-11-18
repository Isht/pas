/**
 # author Isht Ae
 **/

Ext.define('Pas.view.layout.MainLayout', {
    extend: "Ext.tab.Panel",
    alias: "widget.layout.mainlayout",
    itemId: 'tabsMain',
//    id: 'tabs',
//    bodyPadding: '0 0 0 0',
    border: false,
    deferredRender: false,
    plain: true,
    activeTab: 0,
    initComponent: function () {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    title: 'Dashboard',
                    glyph: 'xf015@FontAwesome',
                    itemId: 'getHome',
                    layout: 'fit',
                    border: false,
                    items: [
                        {
                            xtype: 'panel',
                            bodyPadding: '5 10',
                            itemId: 'logApp',
                            title: 'App Dev Log',
                            glyph: Glyphs.setIcon('config'),
                            cls: 'putih',
                            html: '<pre>\n\
<span style="color:blue">[INF]</span>&nbsp;&nbsp;log_start;\n\
<span style="color:blue">[INF]</span>&nbsp;&nbsp;app_init() success;\n\
</pre>'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});
/* End of file LayoutContainer.js */
/* Location: ./assets/js/app/view/layout/LayoutContainer.js */