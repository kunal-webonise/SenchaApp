Ext.define("GS.view.Contact",{
    extend: 'Ext.form.Panel',
    xtype: 'contactForm',
    requires: [
        'Ext.form.FieldSet', 'Ext.field.Email' ,"Ext.data.proxy.JsonP", "Ext.dataview.List"
    ],
    config: {
        title: "Contact",
        iconCls: 'user',
        url: "hello.php",
        items: [
            {
                xtype: 'fieldset',
                title: 'Contact Us',
                instructions: '(email address is optional)',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name'
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email'
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Message'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Send',
                ui: 'confirm',
                handler: function() {
                    this.up('contactForm').submit();
                }
            }
        ]

    }
})