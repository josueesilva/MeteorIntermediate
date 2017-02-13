Template.Recipe.events({
  'click .toggle-menu': function() {
    Meteor.call('toggleMenusItem', this._id, this.inMenu);
  }
});