const person: {
  name: string;
  age: number;
  details: {
    hobbies: string[];
  };
} = {
  name: "Avani",
  age: 23,
  details: {
    hobbies: ["singing", "cooking", "reading"],
  },
};

console.log(person.name);

for (const hobby of person.details.hobbies) {
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()) !!! ERROR FROM TYPESCRIPT !!!
}
