Template.novopost.onCreated(function(){
	//goal of this code: create a variable that I can use on both events inside the template. 
	//var urlDaImagem could be used only in 'myFileInput'
	this.urlDaImagem = new ReactiveVar();
});

Template.novopost.events({
	"submit form": function(evento, template) {
		evento.preventDefault();
		var textoDoFormulario = evento.target.texto.value;
		var urlDaImagem = template.urlDaImagem.get();
		
		Meteor.call("inserirpost", textoDoFormulario, urlDaImagem);

		evento.target.texto.value = "";
	},

  "change .myFileInput": function(event, template) {
	  FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        if (err){
          // handle error
      } else {
        template.urlDaImagem.set("/cfs/files/images/" + fileObj._id);
   
      }
    });
  });
  }
});
