for (let i = 1; i <= 100; i++) {
  let result = "";
  if (i % 3 === 0) {
    result += "fizz";
  }
  if (i % 5 === 0) {
    result += "buzz";
  }
  if (result == "") {
    result = i;
  }
  console.log(result);
}
for (let i = 0; i < 100; )
  console.log((++i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i);
