Template.vendorsShow.helpers({
  portraits: function () {
    selector = {userId: Meteor.userId()};
    options = {sort: {createdAt: -1}};
    return Products.find(selector, options);
  }
});