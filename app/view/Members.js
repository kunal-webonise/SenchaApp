Ext.define('GS.view.Members', {
    extend: 'Ext.Panel',
    xtype: 'members',
    config: {
        scrollable: true ,
        items:[{
            xtype: 'list',
            type: "test" ,

            height: 900,
            itemTpl: '<div>{first_name}</div> <div>{last_name}</div> <div>{name}</div>' }]

    },
    updateRecord:function(newrecord){

            console.log('hello')
        if(newrecord){
            var members = newrecord.members()
//            this.down('list').setStore(members)
        }
    }
});