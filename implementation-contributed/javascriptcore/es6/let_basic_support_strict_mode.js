function test() {

'use strict';
let foo = 123;
return (foo === 123);
      
}

if (!test())
    throw new Error("Test failed");

