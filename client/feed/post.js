Template.post.helpers({
	usernameDoAutor: function() {
		
		var idDoAutor = this.idDoAutor;
		var autor = Meteor.users.findOne({_id: idDoAutor});
		return autor.username;

	},

	numeroDeCurtidas: function() {
		return this.curtidas.length;
	},

	usuarioCurtiu: function() {
		var curtidas = this.curtidas;

		var posicao = curtidas.indexOf(Meteor.userId());

		if(posicao === -1) {
			return false; 
		} else {
			return true;
		}

	},

	comentarios: function() {
		return comentariosDoPost = comentarios.find({post: this._id}).fetch();
	},

	eAutor: function() {
		var idDoAutor = this.idDoAutor;
		return idDoAutor === Meteor.userId();
	}

});

Template.post.events({
	"click .botao-curtir": function(evento,template) {
		Meteor.call("curtirpost", template.data._id);
	},

	"click .botao-descurtir": function(evento,template) {
		Meteor.call("descurtirpost", template.data._id);
	},

	"click .botao-remover": function(evento,template) {
		Meteor.call("removerPost", template.data._id);
	}
});