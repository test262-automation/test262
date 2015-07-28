// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.2.3.12-1-4
description: >
    Object.isFrozen - TypeError is not thrown when the first param 'O'
    is a string
includes: [runTestCase.js]
---*/

function testcase() {
    Object.isFrozen("abc");
    return true;
}
runTestCase(testcase);