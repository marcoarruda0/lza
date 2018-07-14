Template.feed.helpers({
	posts: function() {
		var postsDoCollection = posts.find().fetch();
		return postsDoCollection;
	}
});