Ext.define('GS.view.GroupList', {
    extend: 'Ext.NavigationView',
    xtype: 'group',
    config: {
        title: 'Groups',
        iconCls: 'team',
        height: 500,
        items: [{
            type: 'GroupList',
            xtype: 'list',
            height: 300,
            itemTpl: '<div>{email}</div>',
            store: "UserGroup"
        }]
    }
});