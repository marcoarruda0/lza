//routering system - using blaze
FlowRouter.route("/", {
  action: function(params, queryParams) {
  BlazeLayout.render("layoutprincipal",{main: "inicio"});
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
  triggersEnter: [AccountsTemplates.ensureSignedIn],
  action: function(params, queryParams) {
  BlazeLayout.render("layoutprincipal", {main: "feed"});
  }
});