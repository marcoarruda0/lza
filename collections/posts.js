posts = new Mongo.Collection("posts");

Meteor.methods({
	"inserirpost": function(textoDoFormulario, urlDaImagem) {
		if(Meteor.userId() !== null && textoDoFormulario) {
			posts.insert({
				texto: textoDoFormulario,
				idDoAutor: Meteor.userId(),
				curtidas: [],
				imagem: urlDaImagem
			});
		}
	},

	"curtirpost": function(idDoPost) {
		posts.update(idDoPost, {
			$addToSet: {
					curtidas: Meteor.userId()
			}
		});
	},

	"descurtirpost": function(idDoPost) {
		posts.update(idDoPost, {
			$pull: {
					curtidas: Meteor.userId()
			}
		});
	}
});