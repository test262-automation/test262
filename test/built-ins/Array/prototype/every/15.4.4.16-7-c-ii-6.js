// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-7-c-ii-6
description: Array.prototype.every - arguments to callbackfn are self consistent
includes: [runTestCase.js]
---*/

function testcase() {

        var accessed = false;
        var thisArg = {};
        var obj = { 0: 11, length: 1 };

        function callbackfn() {
            accessed = true;
            return this === thisArg &&
                arguments[0] === 11 &&
                arguments[1] === 0 &&
                arguments[2] === obj;
        }

        return Array.prototype.every.call(obj, callbackfn, thisArg) && accessed;
    }
runTestCase(testcase);