var app = angular.module('myapp',[])
.config(function($sceDelegateProvider) {
   $sceDelegateProvider.resourceUrlWhitelist([
     'self',
     '*https://thumbs.gfycat.com/**',
	 '*https://fat.gfycat.com/**',
     '*https://giant.gfycat.com/**',
     '*https://zippy.gfycat.com/**'
   ]);
 });
app.controller('vedioListCtrl', function($scope, $http){
   $http.get('https://api.gfycat.com/v1test/gfycats/trending?count=20')
   .success(function(data){
     $scope.videos = [];
	   data.gfycats.forEach(function(videoData){
		   console.log(videoData);
		  $scope.videos.push({thumbnail: videoData.thumb360Url, mp4vid: videoData.mp4Url});
       });
	   $scope.Play = function(e){
        var elem = angular.element(e.srcElement);
        elem[0].play();
     }
	 $scope.Stop = function(e){
		 var elem = angular.element(e.srcElement);
		 elem[0].pause();
	 }
    });
});
