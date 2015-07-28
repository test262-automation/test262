// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-1-1
description: Array.prototype.map - applied to undefined
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Array.prototype.map.call(undefined); // TypeError is thrown if value is undefined
            return false;
        } catch (e) {
            return (e instanceof TypeError);
        }
    }
runTestCase(testcase);