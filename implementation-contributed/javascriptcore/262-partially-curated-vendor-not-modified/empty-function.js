function bar() { }

noInline(bar);

for (var i = 0; i < 100000; ++i) {
    var result = bar();
    if (result !== void 0)
        throw "You broke JSC so hard that even the empty function doesn't work: " + result;
}

// partially modify empty-function.js

