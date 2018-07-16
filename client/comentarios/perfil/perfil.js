Template.perfil.helpers({
	perfil: function() {
		var idDoUsuario = FlowRouter.getParam("id");
		var info = Meteor.users.findOne({_id: idDoUsuario});

		return info;
	},

	posts: function() {
		var idDoUsuario = FlowRouter.getParam("id");
		var postsDoPerfil = posts.find({idDoAutor: idDoUsuario}).fetch();
		return postsDoPerfil;
	}
})