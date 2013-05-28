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
                xtype: 'homepage'
            } ,
            {
                xtype: 'contactForm'
            },
            {
                xtype: 'blog'
            }]

    }
});


//Ext.define('GS.view.Main', {
//    extend: 'Ext.tab.Panel',
//    xtype: 'main',
//    requires: [
//        'Ext.TitleBar',
//        'Ext.Video'
//    ],
//    config: {
//        tabBarPosition: 'bottom',
//
//        items: [
//            {
//                xtype: 'homepage'
//            } ,
////            {
////                xtype: 'contactForm'
////            }
//        ]
//    }
//});