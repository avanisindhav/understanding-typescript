function addAndHandle(n1: number, n2: number, cb: (num: number) => number) {
  const result = n1 + n2;
  cb(result);
  //   console.log({ value });
}

// parameter are inforce in callback and do not care about return type

addAndHandle(10, 20, (n) => {
  console.log(n);
  return n;
});
