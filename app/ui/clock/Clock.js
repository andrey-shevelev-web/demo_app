Ext.define('DemoApp.ui.clock.Clock', {
    extend: 'Ext.panel.Panel',
    xtype: 'clock',

    requires: [
        'DemoApp.ui.clock.ClockController',
        'DemoApp.ui.clock.ClockModel',
    ],

    controller: 'clock',
    viewModel: {
        type: 'clock',
    },

    bind: {
        html: '{styledDateTime}',
    },

    width: 200,
    height: 60,
});
