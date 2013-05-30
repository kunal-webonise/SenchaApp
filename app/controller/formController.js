Ext.define('GS.controller.formController', {
    extend: 'Ext.app.Controller',
    config: {
        views:['GS.view.Main'],
        refs: {
            selectList: "testblog selectfield "
        },
        control: {
            selectList: {
               onChange: "contentChange"
            }
        }
    },

    //called when the Application is launched, remove if not needed
    launch: function(app) {
        console.log(" form controller launched") ;

    },

    contentChange: function( _this, newValue, oldValue, eOpts ){
//
          console.log(newValue);
    }
});