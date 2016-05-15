angular.module("MyApp", []);


var app = angular.module("MyApp");


app.service("BookingBugService", ['$http', '$q' , '$rootScope' , function ($http, $q , $rootScope) {

    var deferred = $q.defer();

    $http.get('http://localhost:2001/services').then(function(data) {
        deferred.resolve(data)
        console.log(data)
    });

    this.getData = function (){
        return deferred.promise;
    }

}]);




app.controller("MainCtrl", [ 'BookingBugService' , "$scope"  , function ( BookingBugService,  $scope){
    var promise = BookingBugService.getData();
    promise.then(function (data){
        $scope.bookings = data.data.services
        console.log($scope.bookings)
    });

}]);


app.directive('bookingBugData', [ 'BookingBugService' , function ( BookingBugService  , bookingBugData){
    return {
        restrict: 'E',
        transclude: true,
        template: '<div class="row"><li class="list .col-xs-12 .col-sm-6 .col-lg-8" ng-repeat="item in bookings"> <div class="stuff"><h2> {{ item.name }} </h2> ' +
        '           <p> {{ item.description }}</p>' +
        '             <p> price: £ {{ item.prices[0] }}</p></div> </li> </div>',
        link: function(scope, element, attrs) {

        },
        controller: 'MainCtrl'
    }
}]);

