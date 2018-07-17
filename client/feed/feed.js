Template.feed.onCreated(function() {
	Meteor.subscribe("posts");
	Meteor.subscribe("usuarios");
	Meteor.subscribe("comentarios");
});

Template.feed.helpers({
	posts: function() {
		var postsDoCollection = posts.find().fetch().reverse();
		return postsDoCollection;
	}
});