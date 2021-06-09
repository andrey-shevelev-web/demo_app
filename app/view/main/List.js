/**
 * This view is an example list of people.
 */
Ext.define('DemoApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: ['DemoApp.store.Personnel'],

    title: 'Personnel',

    store: {
        type: 'personnel',
    },

    width: 600,
    height: 400,

    tbar: {
        items: [
            {
                xtype: 'label',
                html: '<p class="label-browsers">Работает в webkit браузерах: Chrome, Edge, Safari, Yandex, Opera</p>',
            },
        ],
    },

    columns: [
        { text: 'Name', dataIndex: 'name', width: 300 },
        { text: 'Email', dataIndex: 'email', width: 300 },
        { text: 'Phone', dataIndex: 'phone', width: 300 },
    ],

    listeners: {
        select: 'onItemSelected',
    },
});
