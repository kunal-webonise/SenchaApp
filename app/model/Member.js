Ext.define('GS.model.Member', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'string' },
            { name: 'group_id', type: 'string' },
            { name: 'name', type: 'string' },
            { name: 'first_name', type: 'string' },
            { name: 'last_name', type: 'string' }
        ],
        belongsTo: {
            model: 'GS.model.UserGroup',
            foreignKey: 'group_id',
            associationKey: 'group_id'
        }
    }
});