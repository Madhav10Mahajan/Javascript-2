// try {
//   console.log("try block starts here");
//   console.log(x);
//   console.log("Madhav");
// } catch (error) {
//   console.log("an error has occured in catch block");
//   console.log("your error is here", error)
//   console.log("hello");
// }
// finally{
//     console.log("I will run everytime");
// }
try{
    console.log(x);
}
catch(error){
    console.log("You have entered catch block");
    throw new Error("pehle declare karo fir access karna");
}
// finally{
//     console.log("you have come out of try catch block");
// }