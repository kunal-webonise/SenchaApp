Ext.define('GS.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
               xtype: 'kunal'
            } ,
            {
                xtype: 'contactForm'
            }
        ]
    }
});
