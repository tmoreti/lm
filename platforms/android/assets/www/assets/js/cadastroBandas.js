function teste(){
	alert('teste')
}
function selecionarFoto(){

	navigator.camera.getPicture(uploadPhoto, function(message) {
	 	alert('get picture failed');
	}, {
	 quality: 100,
	 destinationType: navigator.camera.DestinationType.DATA_URL,
	 sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
	});
}

function uploadPhoto(imageURI) {

	var image = document.getElementById('myImage');
   image.src = "data:image/jpeg;base64," + imageURI;

 /*var options = new FileUploadOptions();
 options.fileKey = "file";
 options.fileName = imageURI.substr(imageURI.lastIndexOf('/') + 1);
 options.mimeType = "image/jpeg";
 console.log(options.fileName);
 var params = new Object();
 params.value1 = "test";
 params.value2 = "param";
 options.params = params;
 options.chunkedMode = false;

var ft = new FileTransfer();
 ft.upload(imageURI, "http://192.168.1.4/phonegap/upload/upload.php", function(result){
 console.log(JSON.stringify(result));
 }, function(error){
 console.log(JSON.stringify(error));
 }, options);*/
}