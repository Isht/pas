Ext.define("Pas.view.users.GridUsers", {
    extend: "Ext.grid.Panel",
    alias: "widget.users.gridusers",
    itemId: "gridPengguna",
    title: "Daftar Pengguna Aplikasi",
//    store: "pljual.DetailJualStore",
    border: false,
    columnLines: true,
    flex: 1,
    forceFit: true,
    glyph: Glyphs.setIcon('list'),
    cls: 'putih',
    initComponent: function () {
        var me = this,
                grid = me;

        Ext.applyIf(me, {
            viewConfig: {
                autoScroll: true,
                emptyText: "Tidak ada data Pengguna",
                deferEmptyText: false,
                stripeRows: false,
                trackOver: false
            },
            tbar: [
                '->',
                {
                    xtype: 'button',
                    text: 'Set Role',
                    glyph: Glyphs.setIcon('role'),
                    cls: 'cust-btn biru',
                    action: 'settingRole'
                },
                {
                    xtype: 'button',
                    text: 'Master Group',
                    glyph: Glyphs.setIcon('group'),
                    cls: 'cust-btn biru',
                    action: 'settingGroup'
                },
                {
                    xtype: 'button',
                    text: 'Refresh',
                    glyph: Glyphs.setIcon('refresh'),
                    cls: 'cust-btn orange',
                    action: 'refreshMu'
                }
            ],
            columns: [
                Ext.create('Ext.grid.RowNumberer'),
                {
                    xtype: 'gridcolumn',
                    text: 'Nama',
                    dataIndex: 'nama',
                    renderer: 'uppercase'
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Email',
                    dataIndex: 'email'
                },
                {
                    xtype: 'gridcolumn',
                    text: 'Login Terakhir',
                    dataIndex: 'last_login'
                },
                {
                    xtype: 'checkcolumn',
                    text: 'Active',
                    align: 'center',
                    hidden: true,
                    dataIndex: 'active'
                }
            ]
        });
        me.callParent(arguments);
    }
});