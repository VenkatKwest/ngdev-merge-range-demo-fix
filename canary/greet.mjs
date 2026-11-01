// Returns the greeting for a user name. Only plain names are accepted.
export function greet(name) {
  if (!/^[A-Za-z]+$/.test(name)) {
    throw new Error(`rejected name: ${name}`);
  }
  return `Hello, ${name}!`;
}
