function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
    //   console.log({ value });
}
addAndHandle(10, 20, function (n) {
    console.log(n);
    return n;
});
