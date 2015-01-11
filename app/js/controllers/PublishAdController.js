app.controller('PublishAdController', 
	function($scope, $location, publishNewAdData, allTownsData, allCategoriesData, authentication, notify) {
		if (authentication.isLoggedIn()) {
			allTownsData.getAllTowns()
			.$promise 
			.then(function(data) {
				$scope.towns = data;
			}, function(error) {
				notify.showError('Towns cannot be loaded.', error);
			});

		allCategoriesData.getAllCategories()
			.$promise 
			.then(function(data) {
				$scope.categories = data;
			}, function(error) {
				notify.showError('Categories cannot be loaded.', error);
			});

$scope.ad = {};
 
			$scope.fileSelected = function(fileInputField) {
	            delete $scope.ad.imageDataUrl;
	            var file = fileInputField.files[0];
	            if (file.type.match(/image\/.*/)) {
	                var reader = new FileReader();
	                reader.onload = function() {
	                    $scope.ad.imageDataUrl = reader.result;
	                    $(".image-box").html("<img src='" + reader.result + "' width='100%'>");
	                    $(".show-defaut-image").hide();
	               
	                };
	                reader.readAsDataURL(file);
	            } else {
	                $(".image-box").html("<p>File type not supported!</p>");
	            }
	        };

			$scope.addAd = function addAd(ad) {
				// console.log(ad);
				// console.log(ad.imageDataUrl);
				// if(ad.imageDataUrl) {
				// 	ad.imageDataUrl = 'data:' + ad.imageDataUrl.filetype + ';base64,' + ad.imageDataUrl.base64;
				// 	$(".image-box").html("<img src='" + 'data:' + ad.imageDataUrl.filetype + ';base64,' + ad.imageDataUrl.base64 + "'>");
				// }
				// console.log(ad.imageDataUrl);
				publishNewAdData.createNewAd(ad)
				.$promise 
				.then(function(data) {
					console.log(data)
					notify.showInfo('Advertisement submitted for approval. Once approvad, it will be published');
				}, function(error) {
					notify.showError('The request is invalide.', error);
				})
			}

			$scope.cancel = function cancel() {
				$location.path('/user/profile/show');
			}

			$scope.defaultImage = 'http://img1.wikia.nocookie.net/__cb20120511110342/lou/images/a/ac/No_image_available.svg';
		
		} else {
			$location.path('');
		}
});