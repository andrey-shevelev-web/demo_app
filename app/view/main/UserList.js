Ext.define('DemoApp.view.main.UserList', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainuserlist',

    requires: [
        'DemoApp.ui.PagingBar',
        'DemoApp.ui.clock.Clock',
        'DemoApp.store.UserList',
        'DemoApp.view.main.UserListModel',
        'DemoApp.view.main.UserListController',
    ],

    title: 'Users',

    controller: 'userlist',

    store: {
        type: 'userlist',
    },

    viewModel: 'userlist',

    tbar: {
        items: [
            {
                xtype: 'clock',
            },
        ],
    },

    columns: [
        { text: 'Имя', dataIndex: 'name', flex: 2 },
        { text: 'Баллов: заработано', dataIndex: 'points_earned', flex: 1 },
        { text: 'Сумма', dataIndex: 'points_spent', flex: 1 },
        { text: 'Дата регистрации', dataIndex: 'registration_date', flex: 1 },
    ],

    bbar: {
        items: [
            {
                xtype: 'pagingbar',
                store: 'sid_userlist',
            },
            {
                xtype: 'label',
                bind: {
                    text: 'Кол-во документов: {vmdTotalCount} Выделено документов: {vmdSelectedCount} Сумма выделенных документов: {vmdSelectedSum}',
                },
            },
        ],
    },

    selModel: {
        selType: 'rowmodel',
        mode: 'MULTI',
    },

    listeners: {
        selectionchange: 'onSelectionChange',
    },
});
