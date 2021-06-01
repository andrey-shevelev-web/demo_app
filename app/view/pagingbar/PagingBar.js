Ext.define('DemoApp.view.pagingbar.PagingBar', {
    extend: 'Ext.toolbar.Paging',
    xtype: 'pagingbar',

    requires: ['Ext.toolbar.Paging'],

    initComponent() {
        this.items = [
            '-',
            {
                xtype: 'tbtext',
                text: 'Кол-во документов',
            },
            '-',
            {
                xtype: 'tbtext',
                text: 'Выделено документов',
            },
            {
                xtype: 'combo',
                name: 'count',
                fieldLabel: 'Строк на странице',
            },
        ];

        this.callParent(arguments);
    },
});
