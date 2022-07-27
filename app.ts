//enum

enum Role {
  USER = 7,
  ADMIN = 9,
  SUPERADMIN,
  TASKER = "Tasker not",
}

const person: {
  name: string;
  role: Role;
} = {
  name: "Avani",
  role: Role.USER,
};

person.role = Role.TASKER;

console.log(person.role);
