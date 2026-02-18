// Challenge 3 Starter
// Create the class and use the constructor method
class UserObject {
  constructor(
    firstName,
    lastName,
    age,
    isStudent,
    address,
    skills,
    socialProfiles,
    isEmployed,
    changeAge,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isStudent = isStudent;
    this.address = address;
    this.skills = skills;
    this.socialProfiles = socialProfiles;
    this.isEmployed = isEmployed;
    this.changeAge = changeAge;
  }
}

// Create an instance of the ComplexObject class (hint: add the properties)
const user1 = new UserObject(
  "William",
  "Maline",
  28,
  false,
  "123 Main St Downtown 12345",
  ["JavaScript", "HTML", "CSS"],
  {
    twitter: "@johndoe",
    linkedIn: "linkedin.com/in/johndoe",
  },
  true,
  function () {
    return (this.age += 1);
  },
);

// Log the new instance of the object
console.log(user1);
