Ext.define('DemoApp.view.main.UserListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.userlist',

    privates: {
        doLoadStore() {
            const store = Ext.getStore('sid_userlist');
            const start = 0;
            const limit = 10;
            const params = { start, limit };

            console.log('params', params);

            store.load({
                params,
            });
        },
    },

    afterRender() {
        console.log('afterRender');
        this.doLoadStore();
    },

    // onItemSelected: function (sender, record) {
    //     Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    // },

    // onConfirm: function (choice) {
    //     if (choice === 'yes') {
    //         //
    //     }
    // }
});
