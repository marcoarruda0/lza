//routering system - using blaze
FlowRouter.route("/", {
  action: function(params, queryParams) {
  if(Meteor.userId() === null) {
    BlazeLayout.render("layoutprincipal",{main: "inicio"});
} else {
    FlowRouter.go("/feed");
  }
}
});

FlowRouter.route("/sobre", {
  action: function(params, queryParams) {
  BlazeLayout.render("layoutprincipal", {main: "sobre"});
  }
});

FlowRouter.route("/contato", {
  action: function(params, queryParams) {
  BlazeLayout.render("layoutprincipal", {main: "contato"});
  }
});

FlowRouter.route("/oportunidades", {
  action: function(params, queryParams) {
  BlazeLayout.render("layoutprincipal", {main: "oportunidades"});
  }
});

FlowRouter.route("/feed", {
  triggersEnter: [AccountsTemplates.ensureSignedIn], //guarantee that the feed can be accessed only if logged in
  action: function(params, queryParams) {
  BlazeLayout.render("layoutprincipal", {main: "feed"});
  }
});

FlowRouter.route("/perfis/:id", {
  triggersEnter: [AccountsTemplates.ensureSignedIn], //guarantee that the profile can be accessed only if logged in
  action: function(params, queryParams) {
  BlazeLayout.render("layoutprincipal", {main: "perfil"});
  }
});