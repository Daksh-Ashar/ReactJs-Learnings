if (!Array.prototype.some) {
    Array.prototype.some = function(callback, thisArg) {
        if (this == null) {
            throw new TypeError('Cannot read property "some" of null or undefined');
        }

        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        var O = Object(this);  // Convert the array-like object into a proper array
        var len = O.length >>> 0; // Ensure the length is a non-negative integer

        for (var i = 0; i < len; i++) {
            if (i in O && callback.call(thisArg, O[i], i, O)) {
                return true;
            }
        }

        return false;
    };
}
