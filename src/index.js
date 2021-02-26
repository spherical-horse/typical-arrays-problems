exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    let ans = Infinity;
    array.forEach(item => {
        if (item < ans) {
            ans = item;
        }
    });
    return ans;
}

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    let ans = -Infinity;
    array.forEach(item => {
        if (item > ans) {
            ans = item;
        }
    });
    return ans;
}

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    let acc = 0;
    array.forEach(item => {
        acc = acc + item;
    });
    return acc / array.length;
}