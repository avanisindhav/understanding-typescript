//enum
var Role;
(function (Role) {
    Role[Role["USER"] = 0] = "USER";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["SUPERADMIN"] = 2] = "SUPERADMIN";
    Role["TASKER"] = "Tasker not";
})(Role || (Role = {}));
var person = {
    name: "Avani",
    role: Role.USER
};
person.role = Role.TASKER;
console.log(person.role);
