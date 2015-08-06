var uploader = new ReactiveVar();

Template.hello.helpers({

    isUploading: function () {
        return Boolean(uploader.get());
    },


  progress: function () {
    var upload = uploader.get();
    if (upload)
    return Math.round(upload.progress(s) * 100);
  },

    url: function () {
    //If we are uploading an image, pass true to download the image into cache.
    //This will preload the image before using the remote image url.
    return this.upload.url(true);
  },

});

Template.hello.events({
    'change .uploadFile': function(event, template) {

      event.preventDefault();

var upload = new Slingshot.Upload("myFileUploads");

upload.send(document.getElementById('uploadFile').files[0], function (error, downloadUrl) {
   uploader.set();
  if (error) {
    // Log service detailed response
    console.error('Error uploading');
    alert (error);
  }
  else{
    console.log("Worked!");
console.log('uploaded file available here: '+downloadUrl);

  }
  });
        uploader.set(upload);
}
});