Template.pesquisa.rendered = function() {
  Meteor.typeahead.inject();
};

Template.pesquisa.helpers({
  items: function() {
    return Meteor.users.find().fetch().map(function(user){ 
    	return {id: user._id, value: user.profile.name}; 
		});
  },
  selected: function(event, suggestion, datasetName) {
    // redirect to users page
    FlowRouter.go("/perfis/" + suggestion.id);
  }
});