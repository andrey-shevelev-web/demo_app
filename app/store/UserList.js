Ext.define('DemoApp.store.UserList', {
    extend: 'Ext.data.Store',
    model: 'DemoApp.model.UserList',

    alias: 'store.userlist',

    autoLoad: true,
});
