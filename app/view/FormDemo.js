/**
 * Created with JetBrains WebStorm.
 * User: webonise
 * Date: 30/5/13
 * Time: 11:49 AM
 * To change this template use File | Settings | File Templates.
 */
Ext.define("GS.view.FormDemo",{
    extend: "Ext.form.Panel" ,
    xtype: "testForm",
//    initialize: function(){
//        console.log("initd")
//    },
    config: {
          title: 'form',
          iconCls: "test",
          items:[{
              xtype: "fieldset",
              items: [
                  {
                      xtype: 'emailfield',
                      label: 'email'
                  },
                  {
                      xtype: 'passwordfield',
                      label: 'Password'
                  },
                  {
                      xtype: 'selectfield',
                      label: 'Choose one',
                      store: 'UserGroup',
                      displayField: 'email',
                      value: 'id'
//
                  }
              ]
          }]

    }

})
