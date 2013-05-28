


Ext.define('GS.view.Blog', {
    extend: 'Ext.NavigationView',
    xtype: 'blog',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        title: 'UserPosts',
        iconCls: 'search',
        height: 500,
        items: [{
                type: 'userList',
                xtype: 'list',
                height: 300,
                itemTpl: '<div>{title}</div>',
                store: "User"
            }]
    }
});