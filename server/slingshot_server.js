Slingshot.fileRestrictions("myFileUploads", {
  allowedFileTypes: ["video/png", "image/jpeg", "image/gif"],
  maxSize: null,
});


Slingshot.createDirective("myFileUploads", Slingshot.S3Storage, {
  AWSAccessKeyId: "AWSAccessKeyId",
  AWSSecretAccessKey: "AWSSecretAccessKey",
  bucket: "petportraitclub",
  acl: "public-read-write",
  region: "us-east-1",

  authorize: function () {
    if (!this.userId) {
      var message = "Please login before posting files";
      throw new Meteor.Error("Login Required", message);
    }

    return true;
  },

  key: function (file) {
    //Store file into a directory by the user's username.
    return file.name;
  }

});