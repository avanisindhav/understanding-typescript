var person = {
    name: "Avani",
    age: 23,
    details: {
        hobbies: ["singing", "cooking", "reading"]
    }
};
console.log(person.name);
for (var _i = 0, _a = person.details.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    //   console.log(hobby.map()) !!! ERROR FROM TYPESCRIPT !!!
}
