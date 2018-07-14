T9n.setLanguage('pt'); //translate the log in structure to portuguese (after softwarerero:accounts-t9n installed)

AccountsTemplates.configure({
    defaultLayoutType: "blaze", // Optional, the default is 'blaze'
    defaultLayout: "layoutprincipal",
    defaultLayoutRegions: {
        nav: "cabecalho",
    },
    defaultContentRegion: "main"
});

AccountsTemplates.configureRoute("signIn");

var pwd = AccountsTemplates.removeField("password");
AccountsTemplates.removeField("email");
AccountsTemplates.addFields([
  {
    _id: "username",
    type: "text",
    displayName: "Usuário",
    lowercaseUsername: false,
    required: true,
  },

   {
    _id: "name",
    type: "text",
    displayName: "Nome Completo",
    required: true,
  },
  {
    _id: "email",
    type: "email",
    required: true,
    displayName: "E-mail",
    re: /.+@(.+){2,}\.(.+){2,}/,
    errStr: "E-mail inválido",
  },
  pwd
]);