function compare(){
  const one = 1
  const uno = "1"

  if(uno == one ){
    console.log(true, "equal")
  }else {
    console.log(false, "not eqaul");
  }

  if(uno === one){
    console.log(true,"equal");
  }else {
    console.log(false, "not equal");
  }

}
compare()
