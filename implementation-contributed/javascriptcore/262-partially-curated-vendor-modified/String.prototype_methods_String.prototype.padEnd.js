function shouldBe(expected, actual, msg) {
    if (msg === void 0)
        msg = '';
    else
        msg = ' for ' + msg;
    if (actual !== expected)
        throw new Error('bad value' + msg + ': ' + actual + '. Expected ' + expected);
}

function shouldThrow(func, errorMessage) {
    var errorThrown = false;
    var error = null;
    try {
        func();
    } catch (e) {
        errorThrown = true;
        error = e;
    }
    if (!errorThrown)
        throw new Error('not thrown');
    if (String(error) !== errorMessage)
        throw new Error(`bad error: ${String(error)}`);
}

// Test functions removed here

(function TestMemoryLimits() {
    shouldThrow(() => ".".padEnd(0x80000000, "o"), "Error: Out of memory");
    shouldThrow(() => ".".padEnd({ valueOf() { return 0x80000000; } }, "o"), "Error: Out of memory");
    shouldThrow(() => ".".padEnd("0x80000000", "o"), "Error: Out of memory");
})();

(function TestFillerRepetition() {
    for (var i = 2000; i > 0; --i) {
        var expected = "123" + "xoxo".repeat(i / 4).slice(0, i - 3);
        var actual = "123".padEnd(i, "xoxo");
        shouldBe(expected, actual);
        shouldBe(i > "123".length ? i : 3, actual.length);
        actual = "123".padEnd(i, "xo" + "" + "xo");
        shouldBe(expected, actual);
        shouldBe(i > "123".length ? i : 3, actual.length);
    }
})();
