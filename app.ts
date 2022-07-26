const person: {
  name: string;
  age: number;
  details: {
    hobby: string;
  };
} = {
  name: "Avani",
  age: 23,
  details: {
    hobby: "singing",
  },
};

//  inference the object type by typescript
const product = {
  id: "abc1",
  price: 12.89,
  tags: ["great-offers", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "This is Good Product",
  },
};

console.log(person.name);
// console.log(person.nickname);  //will throw error
