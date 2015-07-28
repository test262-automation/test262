// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-3-6
description: >
    Array.prototype.lastIndexOf - value of 'length' is a number (value
    is a positive number)
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 99: true, 100: 100, length: 100 };

        return Array.prototype.lastIndexOf.call(obj, true) === 99 &&
            Array.prototype.lastIndexOf.call(obj, 100) === -1;
    }
runTestCase(testcase);