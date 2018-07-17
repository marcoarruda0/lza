import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

AccountsTemplates.configure({
	postSignUpHook: function(userId, info) {
		Meteor.users.update(userId, {
			$set: {
				"profile.seguidores": [],
				"profile.seguindo": []
			}
		});
	}
});

Meteor.publish("posts",function(){
	return posts.find();
});

Meteor.publish("usuarios", function() {
	return Meteor.users.find();
});

Meteor.publish("comentarios",function(){
	return comentarios.find();
});