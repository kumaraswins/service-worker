if ('serviceWorker' in navigator) {
//You can call register every time a page loads without concern; the browser will figure out if the service worker is already registered or not and handle it accordingly.
  navigator.serviceWorker.register('sw.js').then(function(registration) {
    // Registration was successful
    console.log('ServiceWorker registration successful with scope: ',    registration.scope);
  }).catch(function(err) {
    // registration failed :(
    console.log('ServiceWorker registration failed: ', err);
  });
}
 var jsonFlickrApi = function (response) {
     var cats = $("#cats");
	$.each(response.photos.photo, function(i, item) {
		var src = "https://farm"
			+ item.farm
			+ ".static.flickr.com/"
			+ item.server
			+ "/" + item.id
			+ "_" + item.secret
			+ "_n.jpg";
		var container = $("<li/>").appendTo(cats);
		$("<img/>").attr("src", src).appendTo(container);
	});
 };

 var flickr_api_key = "208dae30f9b67f9b1870a81f5feb0328";
 var flickr_api_url = "https://api.flickr.com/services/rest/?format=json&method=flickr.photos.search&api_key=" + flickr_api_key;
 $.ajax({
     url: flickr_api_url,
     method: 'GET',
     dataType: 'jsonp',
     jsonpCallback: 'jsonFlickrApi',
     cache: true,
     data: {
         tags: 'cat',
         safe_search: 1,
         per_page: 20
     },
     error: function (err) {
         console.log(err);
     }
 });