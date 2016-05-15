/**
 * @ngdoc service
 * @name app:BookingBugService
 *
 * @description
 *
 *
 * */
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

