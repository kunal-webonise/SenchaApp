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
            '<img src="http://www.drf.com/sites/all/themes/drf/images/DRF_Logo2.png" />',
            '<h1>PLAYING WITH APIS</h1>',
            "<h3></h3>",
        ].join("")
    }
})