Template.feed.helpers({
	posts: function() {
		var postsDoCollection = posts.find().fetch().reverse();
		return postsDoCollection;
	}
});