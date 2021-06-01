Ext.define('DemoApp.model.UserList', {
    extend: 'DemoApp.model.Base',

    fields: [
        { name: 'id', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'points_earned', type: 'integer' },
        { name: 'points_spent', type: 'integer' },
        { name: 'registration_date', type: 'string' },
    ],

    proxy: {
        type: 'ajax',
        url: 'https://safe-bayou-13742.herokuapp.com/api/users-all',
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
