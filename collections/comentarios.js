comentarios = new Mongo.Collection("comentarios");

Meteor.methods({
	"inserircomentarios": function(textoDoComentario,idDoPost) {
		if(Meteor.userId() !== null) {
			comentarios.insert({
				texto: textoDoComentario,
				post: idDoPost,
				autor: Meteor.userId()
			});
		}
	}
});