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
        html: '{vmdDateTime}',
    },

    width: 300,
    height: 40,
});
