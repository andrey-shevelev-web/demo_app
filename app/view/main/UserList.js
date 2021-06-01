Ext.define('DemoApp.view.main.UserList', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainuserlist',

    requires: ['DemoApp.store.UserList'],

    title: 'Users',

    store: {
        type: 'userlist',
    },

    columns: [
        { text: 'Имя', dataIndex: 'name', flex: 2 },
        { text: 'Баллов: заработано', dataIndex: 'points_earned', flex: 1 },
        { text: 'Баллов: потрачено', dataIndex: 'points_spent', flex: 1 },
        { text: 'Дата регистрации', dataIndex: 'registration_date', flex: 1 },
    ],
});
