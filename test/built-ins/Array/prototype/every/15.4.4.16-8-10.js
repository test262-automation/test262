// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.16-8-10
description: Array.prototype.every - subclassed array when length is reduced
includes: [runTestCase.js]
---*/

function testcase() {
  foo.prototype = new Array(1, 2, 3);
  function foo() {}
  var f = new foo();
  f.length = 2;
  
  function cb(val)
  {
    if(val>2)
      return false;
    else
      return true;    
  }
  var i = f.every(cb);
  
  if (i === true) {
    return true;
  }
 }
runTestCase(testcase);