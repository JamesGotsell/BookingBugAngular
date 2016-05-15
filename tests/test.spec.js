'use strict';

var chai = require("chai");
var assert = require('chai').assert;
var describe = require('chai').describe;

describe("api call " , function () {
    describe("api data ", function () {
        it('should demonstrate using when (200 status)', function () {
            return request.get('http://localhost:8000/services')
                .expect(200);
        });
    });
});

