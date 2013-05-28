Ext.define("GS.view.Home",{
    extend: 'Ext.Panel',
    xtype: 'homepage',
    config: {
        title: "HOME",
        iconCls: 'home',
        cls: 'home',
        scrollable: true,
        styleHtmlContent: true,
        html: [
            '<img src="http://staging.sencha.com/img/sencha.png" />',
            '<h1>HOME PAGE</h1>',
            "<p>API Example</p>",
        ].join("")
    }
})