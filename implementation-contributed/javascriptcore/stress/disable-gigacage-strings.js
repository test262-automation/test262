//@ runNoisyTestWithEnv "disable-gigacage", "GIGACAGE_ENABLED=0"

(function() {
    function foo(array, i)
    {
        return array.charCodeAt(i);
    }
    
    noInline(foo);
    
    var array = "";
    for (var i = 0; i < array.length; ++i)
        array += String.fromCharCode(5 - i);
    for (var i = 0; i < 1000; ++i) {
        var result = 0;
        var expectedResult = 0;
        for (var j = 0; j < array.length; ++j) {
            result += foo(array, j);
            expectedResult += 5 - j;
        }
        if (result != expectedResult)
            throw new Error("Bad result: " + result);
    }
})();

