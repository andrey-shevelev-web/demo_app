Ext.define('DemoApp.view.main.UserListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.userlist',

    listen: {
        store: {
            userlist: {
                userListStoreLoadEvent: 'userListStoreLoad',
            },
        },
    },

    privates: {
        doLoadStore() {
            const store = Ext.getStore('sid_userlist');
            const start = 0;
            const limit = store.pageSize;
            const page = 1;

            store.load({
                params: {
                    start,
                    limit,
                    page,
                },
            });
        },
    },

    afterRender() {
        this.doLoadStore();
    },

    userListStoreLoad(total) {
        this.getViewModel().set('vmdTotalCount', total);
    },

    onSelectionChange(model, selected) {
        const sumPointsSpent = selected.reduce(
            (acc, item) => acc + item.data.points_spent,
            0
        );

        this.getViewModel().set('vmdSelectedCount', selected.length);
        this.getViewModel().set('vmdSelectedSum', sumPointsSpent);
    },
});
