// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.17-7-c-i-8
description: >
    Array.prototype.some - element to be retrieved is inherited data
    property on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var kValue = {};

        function callbackfn(val, idx, obj) {
            if (0 === idx) {
                return kValue === val;
            }
            return false;
        }

        try {
            Array.prototype[0] = kValue;

            return [, ].some(callbackfn);
        } finally {
            delete Array.prototype[0];
        }
    }
runTestCase(testcase);