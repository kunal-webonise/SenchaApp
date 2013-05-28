Ext.define('GS.model.User', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'title', type: 'string' },
            { name: 'link', type: 'string' },
            { name: 'author', type: 'string' } ,
            { name: 'content', type: 'string' },
            { name: 'id', type: 'string' }
        ]
    }
});