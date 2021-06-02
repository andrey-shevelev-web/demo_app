Ext.define('DemoApp.view.main.UserList', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainuserlist',

    requires: [
        'DemoApp.view.pagingbar.PagingBar',
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
                xtype: 'label',
                height: 50,
                bind: {
                    text:
                        'Кол-во документов: {vmdTotalCount} Выделено документов: {vmdSelectedCount} Сумма выделенных документов: {vmdSelectedSum}',
                },
            },
            {
                xtype: 'button',
                text: 'Reload data',
                handler: 'onReload',
            },
        ],
    },

    bbar: {
        xtype: 'pagingbar',
        displayInfo: true,
        // store: 'sid_userlist',
        // beforePageText: 'Стрhhhhh',
        // afterPageText: 'frororoo {0}',
    },

    columns: [
        { text: 'Имя', dataIndex: 'name', flex: 2 },
        { text: 'Баллов: заработано', dataIndex: 'points_earned', flex: 1 },
        { text: 'Сумма', dataIndex: 'points_spent', flex: 1 },
        { text: 'Дата регистрации', dataIndex: 'registration_date', flex: 1 },
    ],

    selModel: {
        selType: 'rowmodel',
        mode: 'MULTI',
    },

    listeners: {
        selectionchange: 'onSelectionChange',
    },
});
