
Meteor.methods({

	"seguirUsuario": function(idDoUsuario) {
		Meteor.users.update(Meteor.userId(), {
			$addToSet: {
				"profile.seguindo": idDoUsuario
			}
		});

		Meteor.users.update(Meteor.userId(), {
			$addToSet: {
				"profile.seguidores": Meteor.userId()
			}
		});

	},

	"deixarDeSeguirUsuario": function(idDoUsuario) {
		Meteor.users.update(Meteor.userId(), {
			$pull: {
				"profile.seguindo": idDoUsuario
			}
		});

		Meteor.users.update(Meteor.userId(), {
			$pull: {
				"profile.seguidores": Meteor.userId()
			}
		});
}});