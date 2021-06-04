Ext.define('DemoApp.ui.clock.ClockController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.clock',

    init() {
        Ext.interval(() => {
            const months = [
                'январь',
                'февраль',
                'март',
                'апрель',
                'май',
                'июнь',
                'июль',
                'август',
                'сентябрь',
                'октябрь',
                'ноябрь',
                'декабрь',
            ];
            const now = new Date();
            const year = now.getFullYear();
            const month = now.getMonth();
            const day = now.getDate();
            const hour = this.addZero(now.getHours());
            const minute = this.addZero(now.getMinutes());
            const second = this.addZero(now.getSeconds());
            const result = `${day} ${months[month]}. ${year}, ${hour}:${minute}:${second}`;

            this.getView().getViewModel().set('vmdDateTime', result);
            console.log(result);
        }, 1000);
    },

    privates: {
        addZero(num) {
            const result = num < 10 ? '0' + num : num;
            return result;
        },
    },
});
