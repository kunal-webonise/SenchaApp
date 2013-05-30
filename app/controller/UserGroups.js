Ext.define('GS.controller.UserGroups', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
           groupList: "group list[type='GroupList']" ,
           memberList:   "members list",
            member: "members",
           group: "group"
        },
        control: {
            groupList: {
                itemtap: 'onGroupListTap'
            },
            memberList:{
                itemtap: function(){

//                    console.log(this.getMember().getRecord());
                }
            }
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
      console.log("second controller launched");
      Ext.getStore('UserGroup').load();
    },


    onGroupListTap: function( _this, index, target, record, e, eOpts){

        var member_view = Ext.create("GS.view.Members");
        var members = record.members();
//        member_view.setRecord({name:"kunnu"});
        member_view.down('list').setStore(members);
        var group = this.getGroup();
        group.push(member_view);
        console.log(members)

    }
});