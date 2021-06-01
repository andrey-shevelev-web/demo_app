Ext.define('DemoApp.view.main.UserList', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainuserlist',

    requires: [
        'DemoApp.view.pagingbar.PagingBar',
        'DemoApp.store.UserList',
        'DemoApp.view.main.UserListController',
    ],

    title: 'Users',

    controller: 'userlist',
    store: {
        type: 'userlist',
    },

    tbar: {
        xtype: 'pagingbar',
        // displayInfo: true,
        // beforePageText: 'Стрhhhhh',
        // afterPageText: 'frororoo {0}',
    },

    // tbar: {
    //     items: [
    //         {
    //             xtype: 'pagingbar',
    //             displayInfo: true,
    //         },
    //         // {
    //         //     html: '<p>Separator</p>',
    //         // },
    //         // {
    //         //     xtype: 'pagingtoolbar',
    //         //     displayInfo: true,
    //         // },
    //     ],
    // },

    columns: [
        { text: 'Имя', dataIndex: 'name', flex: 2 },
        { text: 'Баллов: заработано', dataIndex: 'points_earned', flex: 1 },
        { text: 'Сумма', dataIndex: 'points_spent', flex: 1 },
        { text: 'Дата регистрации', dataIndex: 'registration_date', flex: 1 },
    ],
});
