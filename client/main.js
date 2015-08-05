Meteor.subscribe('allProducts');

UI.registerHelper("money", function(amount){
	return accounting.formatMoney(amount);
});

UI.registerHelper("markdown", function(text){
	var converter = new showdown.Converter();
	return converter.makeHtml(text);
});

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '807323116032811',
      xfbml      : true,
      version    : 'v2.4'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));