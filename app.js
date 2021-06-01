/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'DemoApp.Application',

    name: 'DemoApp',

    requires: [
        // This will automatically load all classes in the DemoApp namespace
        // so that application classes do not need to require each other.
        'DemoApp.*'
    ],

    // The name of the initial view to create.
    mainView: 'DemoApp.view.main.Main'
});
