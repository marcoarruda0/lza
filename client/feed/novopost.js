Template.novopost.events({
	"submit form": function(evento, template) {
		evento.preventDefault();
		var textoDoFormulario = evento.target.texto.value;

		console.log(textoDoFormulario);
		console.log(Meteor.userId());

		Meteor.call("inserirpost", textoDoFormulario);

		evento.target.texto.value = "";
	}
});