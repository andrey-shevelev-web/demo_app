Ext.define('DemoApp.ui.PagingBar', {
    extend: 'Ext.toolbar.Paging',
    xtype: 'pagingbar',

    requires: ['Ext.toolbar.Paging'],

    config: {
        visiblePages: 10,
    },

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
            me.remove(compDel);
        }

        me.insert(3, { xtype: 'container' });
    },

    getButtonNumbers(startValue, length) {
        return [...Array(length).keys()].map(item => startValue + item);
    },

    drawButtons(store, parent, buttonNumbers) {
        Ext.suspendLayouts();
        parent.removeAll();

        let buttons = buttonNumbers.map(item => {
            return {
                xtype: 'button',
                text: `${item}`,
                handler: function () {
                    store.loadPage(item);
                },
            };
        });

        parent.add(buttons);
        Ext.resumeLayouts(true);
    },

    createButtons() {
        let me = this,
            store = me.store,
            currentPage = me.store.currentPage,
            buttonsParent = me.down('container'),
            maxButtons = me.visiblePages,
            pagesTotal = Math.ceil(store.getTotalCount() / store.pageSize),
            firstButton = currentPage,
            countButtons = 0,
            buttonNumbers = [];

        countButtons = Math.min(pagesTotal + 1 - firstButton, maxButtons);
        buttonNumbers = me.getButtonNumbers(firstButton, countButtons);
        me.drawButtons(store, buttonsParent, buttonNumbers);
    },

    onLoad: function () {
        if (this.rendered) {
            this.createButtons();
            this.callParent(arguments);
        }
    },
});
