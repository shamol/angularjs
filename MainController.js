
function MainController($scope, photoSearchService) {
    'use strict';
    $scope.photos = [];

    $scope.thumbSize = "small";
    $scope.submitSearch = function() {
        $scope.photos = [];
        var keyword = $scope.searchKeyword;

        photoSearchService.findPhotos(keyword, function(photos) {
            $scope.photos = photos;
        });
    };

    $scope.setThumbSize = function (size) {
        $scope.thumbSize = size;
    };

}