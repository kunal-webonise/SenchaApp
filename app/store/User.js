Ext.define('GS.store.User', {
    extend: 'Ext.data.Store',

    config: {
        model: 'GS.model.User',
//        autoLoad: true,
//        data:[{
//            name: "kunal",
//            desc: "hello hi"
//        }, {
//            name: "bhushan",
//            desc: "oswal"
//        }]
        proxy:{
            type: 'jsonp',
            url: "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/IPL",
            reader:{
                type: 'json',
                rootProperty: 'responseData.feed.entries'
            }
        }
    }
});