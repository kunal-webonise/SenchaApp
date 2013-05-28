


Ext.define('GS.view.Blog', {
    extend: 'Ext.Panel',
    xtype: 'blog',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        title: 'Blog',
        iconCls: 'user',
        items: [
            {
                type: 'userList',
                xtype: 'list',
                height: 300,
                itemTpl: '<div>{title}</div>',
                store: "User"
            }
        ]
    }
});