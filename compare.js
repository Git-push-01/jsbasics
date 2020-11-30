// function compare(){
//   const one = 1
//   const uno = "1"
//
//   if(uno == one ){
//     console.log(true, "equal")
//   }else {
//     console.log(false, "not eqaul");
//   }
//
//   if(uno === one){
//     console.log(true,"equal");
//   }else {
//     console.log(false, "not equal");
//   }
//
// }
// compare()


function checkPalindrom (str) {
  if(str === str.split('').reverse().join('')){
console.log("is palinodorme")
  }
  else{
    console.log("not Plaindorme");
  }

}

checkPalindrom('repaper')
