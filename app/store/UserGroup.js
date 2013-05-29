Ext.define('GS.store.UserGroup', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GS.model.UserGroup',
        proxy:{
            type: 'ajax',
            url: "GSData.json",
            reader:{
                type: 'json',
                rootProperty: 'responseData.feed.users'
            }
        }
    }
});