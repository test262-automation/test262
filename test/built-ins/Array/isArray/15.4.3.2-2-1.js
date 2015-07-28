// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.3.2-2-1
description: Array.isArray applied to an object with an array as the prototype
includes: [runTestCase.js]
---*/

function testcase() {

        var proto = [];
        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        return !Array.isArray(child);
    }
runTestCase(testcase);