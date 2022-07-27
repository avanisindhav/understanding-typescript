// function generateError(message: string, code: number) {
//   throw { message: message, errroCode: code };
// }

//typescript infer void as the return type as never type is introduce in newer version of the typescript
// noty introduce intial version
//  so

console.log(generateError("this is for test never type", 500));

//  even added the console.log still we are not able to get undefined in console since generateError function break the script and never returns so in such case good practice implies to add return type as never and same can happen with the infinite loop

function generateError(message: string, code: number): never {
  throw { message: message, errroCode: code };
}
