


Ext.define('GS.view.BlogView', {
    extend: 'Ext.Panel',
    xtype: 'blogView',
    config: {
        title: 'BlogView',
        iconCls: 'user',
        scrollable: true ,
     items:[{
         xtype: 'panel',
         type:'blgView',
         tpl: '<div>{content}</div>'}]
    },
    updateRecord:function(newrecord){
     if(newrecord){
         console.log(newrecord)
        this.down('panel[type="blgView"]').setData(newrecord.data)
     }
}
});