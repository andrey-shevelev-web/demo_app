Ext.define('DemoApp.ui.clock.ClockModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.clock',

    data: {
        vmdDateTime: null,
    },

    formulas: {
        styledDateTime: function (get) {
            let dataDateTime = get('vmdDateTime');
            let htmlDateTime =
                '<div class="clock-container"><div class="clock-item">{0}</div></div>';
            return Ext.String.format(htmlDateTime, dataDateTime);
        },
    },
});
