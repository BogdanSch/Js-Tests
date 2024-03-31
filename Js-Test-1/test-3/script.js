function processStrings(strings) {
  const evenStrings = strings.filter((str) => str.length % 2 === 0);

  const sortedStrings = evenStrings.sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" })
  );

  return sortedStrings;
}

// Example usage:
const inputStrings = ["apple", "Orange", "banana", "Grapes", "kiwi", "Cherry"];
const result = processStrings(inputStrings);

console.log(result);
