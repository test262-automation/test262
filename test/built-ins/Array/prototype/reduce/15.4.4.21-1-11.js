// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.21-1-11
description: Array.prototype.reduce applied to Date object
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(prevVal, curVal, idx, obj) {
            return obj instanceof Date;
        }

        var obj = new Date();
        obj.length = 1;
        obj[0] = 1;

        return Array.prototype.reduce.call(obj, callbackfn, 1);
    }
runTestCase(testcase);