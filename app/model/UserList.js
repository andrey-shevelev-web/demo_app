Ext.define('DemoApp.model.UserList', {
    extend: 'DemoApp.model.Base',

    fields: [
        { name: 'id', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'points_earned', type: 'integer' },
        { name: 'points_spent', type: 'integer' },
        { name: 'registration_date', type: 'string' },
    ],
});
