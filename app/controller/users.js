Ext.define('GS.controller.users', {
    extend: 'Ext.app.Controller',
    config: {
        views:['GS.view.Main'],
        refs: {
            userList: "main list[type='userList']",
            blog: "blog"
        },
        control: {
            userList: {
                itemtap: 'onUserListTap'
            }
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
         console.log("controller launched") ;
        var store = Ext.getStore('User');
//        store.load({callback: function(data,data1,data2){
//            console.log(data);
//        }})
        store.load();
        Ext.getStore('UserGroup').load();
    },

    onUserListTap: function( _this, index, target, record, e, eOpts){
//        Ext.Msg.alert('Link',record.get('link'));
        console.log(record.get("author"));
        var blog_view = Ext.create("GS.view.BlogView");
        blog_view.setRecord(record)
        var blog = this.getBlog();
        blog.push(blog_view);
        console.log("index: "+index);
        console.log(record);

    }
});