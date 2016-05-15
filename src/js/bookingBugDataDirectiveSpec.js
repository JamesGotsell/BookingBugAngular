

describe('Directive: app.bookingBugData', function () {
    var ele, scope;

    beforeEach(module('app'));
    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();

        //update to match directive your testing
        ele = angular.element('<div class="row"><li class="list .col-xs-12 .col-sm-6 .col-lg-8" ng-repeat="item in bookings"> ' +
            '<div class="stuff"><h2> {{ item.name }} </h2> ' +
        '<p> {{ item.description }}</p>' +
        '<p> price: £ {{ item.prices[0] }}</p></div> </li> </div>');

        $compile(ele)(scope);
        scope.$apply();
    }));


    it('should render 18 li tags' , function () {
        console.log(elm.find('li'));
        expect(li).toBe(18);
    });
});
