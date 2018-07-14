posts = new Mongo.Collection("posts");

Meteor.methods({
	"inserirpost": function(textoDoFormulario) {
		posts.insert({
			texto: textoDoFormulario,
			idDoAutor: Meteor.userId()
		});

	}
});