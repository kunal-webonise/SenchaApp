Ext.define('GS.view.Main', {
    extend: 'Ext.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
               xtype: 'homepanel1'
            } ,
            {
                xtype: 'panel' ,
                html: "<div>welcome</div>"
            } ,

            {
                type: 'userList',
                xtype: 'list',
                height: 400,
                itemTpl: '<div>{title}</div>',
               store: "User"
            }
        ]
    }
});
