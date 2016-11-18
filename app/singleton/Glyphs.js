Ext.define('Pas.singleton.Glyphs', {
    singleton: true,
    alternateClassName: ['Glyphs'],
    constructor: function(config) {
        this.initConfig(config);
    },
    config: {
        // Icons that have been addressed directly
        webfont: 'FontAwesome',
        //Icons for Application Control
        add: 'xf055',
        login: 'xf090',
        cancel: 'xf0e2',
        check: 'xf00c',
        config: 'xf085',
        copy: 'xf0c5',
        clear: 'xf0b0',
        close: 'xf00d',
        del: 'xf056',
        edit: 'xf040',
        form: 'xf0f6',
        list: 'xf03a',
        print: 'xf02f',
        refresh: 'xf021',
        remove: 'xf014',
        save: 'xf0c7',
        search: 'xf002',
        //Icons for other
        racikan: 'xf0ea',
        cash: 'xf0d6',
        noncash: 'xf09d',
        pmr: 'xf0f1',
        surat: 'xf15c',
        group: 'xf0c0',
        detail: 'xf03c',
        cart: 'xf217',
        history: 'xf1da',
        user: 'xf007',
        role: 'xf23e',
        gelar: 'xf19d',
        transfer: 'xf074',
        date: 'xf073',
        lock: 'xf023',
        pdf: 'xf1c1',
        report: 'xf0ea',
        truck: 'xf0d1',
        compass: 'xf267',
        piechart:'xf200',
        empire: 'xf1d1'
    },

    setIcon  : function(glyph) {
        return Glyphs.getGlyph(glyph);
    },

    getGlyph : function(glyph) {
        var font = Glyphs.getWebfont();
        if (typeof Glyphs.config[glyph] === 'undefined') {
            return false;
        }
        return Glyphs.config[glyph] + '@' + font;
    }
});