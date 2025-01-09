function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(' ');
}

let user = ["Jane", "Doe"];
console.log(greeterArray(user)); //Correct usage

//Alternative solution using type guard
function isString(arg: any): arg is string {
  return typeof arg === 'string';
}
function greet(person: string | string[]) {
  if(isString(person)) {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(' ');
  }
}
console.log(greet(user));
console.log(greet("Jane"));