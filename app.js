Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Override': 'overrides',
        'Ext.ux': 'app/ux'
    }
});

Ext.application({
    name: 'Pas',
    extend: 'Pas.Application',
    autoCreateViewport: false
});
