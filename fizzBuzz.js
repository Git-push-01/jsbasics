// for (let i = 1; i <= 100; i++) {
//   let result = "";
//   if (i % 3 === 0) {
//     result += "fizz";
//   }
//   if (i % 5 === 0) {
//     result += "buzz";
//   }
//   if (result == "") {
//     result = i;
//   }
//   console.log(result);
// }
// for (let i = 0; i < 100; )
//   console.log((++i % 3 ? "" : "fizz") + (i % 5 ? "" : "buzz") || i);

 const n = 10
 const ar = [1,1,3,1,2,1,3,3,3,3]

  function sockMerchant(n, ar) {
      let res = 0
       ar.sort()
  for (let i = 0; i < n; i++){
     if(ar[i] == ar[i+1]){
         i++;
         res++
     }


     }
      return res
console.log(res);
  }
  sockMerchant()
