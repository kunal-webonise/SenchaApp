Ext.define('GS.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                xtype: 'homepage'
            } ,
            {
                xtype: 'group'
            },
            {

                xtype: 'blog',
                type:'blog'
            }
//            {
//
//                xtype: 'testForm',
//                type:'blog'
//            }
]

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