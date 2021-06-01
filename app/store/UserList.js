Ext.define('DemoApp.store.UserList', {
    extend: 'Ext.data.Store',
    model: 'DemoApp.model.UserList',

    alias: 'store.userlist',
    storeId: 'sid_userlist',

    proxy: {
        type: 'ajax',
        url: 'https://safe-bayou-13742.herokuapp.com/api/users',
        actionMethods: {
            read: 'GET',
        },
        headers: {
            'Content-Type': 'application/json',
        },
        paramsAsJson: true,

        reader: {
            type: 'json',
            rootProperty: 'items',
            totalProperty: 'total',
        },
    },
});
