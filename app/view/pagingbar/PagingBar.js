Ext.define('DemoApp.view.pagingbar.PagingBar', {
    extend: 'Ext.toolbar.Paging',
    xtype: 'pagingbar',

    requires: ['Ext.toolbar.Paging'],

    initComponent() {
        let me = this;

        me.items = [
            {
                xtype: 'combo',
                name: 'comboLimit',
                fieldLabel: 'Строк на странице',
                labelWidth: 120,

                reference: 'comboLimit',
                editable: false,

                value: '10',
                store: {
                    extend: 'Ext.data.Store',
                    fields: ['valueField', 'displayField'],
                    data: [
                        { valueField: '5', displayField: '5' },
                        { valueField: '10', displayField: '10' },
                        { valueField: '15', displayField: '15' },
                        { valueField: '20', displayField: '20' },
                    ],
                },
                queryMode: 'local',
                displayField: 'displayField',
                valueField: 'valueField',

                listeners: {
                    select: function (combo) {
                        me.getStore().pageSize = combo.value;
                        me.moveFirst();
                        console.log(me.items.items);
                    },
                },
            },
        ];

        me.callParent(arguments);
        for (let i = 0; i < 3; i++) {
            let compDel = me.getComponent(3);
            console.log(compDel);
            me.remove(compDel);
        }
    },
});
