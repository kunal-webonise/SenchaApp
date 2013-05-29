Ext.define('GS.model.UserGroup', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'id', type: 'string' },
            { name: 'email', type: 'string' }
        ] ,
        hasMany: {
            model: 'GS.model.Member',
            name: 'members',
            primaryKey: 'id'
        }

    }
});