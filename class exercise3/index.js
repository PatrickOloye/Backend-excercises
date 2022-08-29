/*const array = [2, 3, 4, 7,, 5, 7, 2];
for(newArr of array){
    if(newArr[0] === newArr[6]){
        console.log("true")
    }
    console.log("false")
}*/

/*const array = [2, 3, 4, 7,, 5, 7, 2]
 function cope (array){
    if (array[0] == array[6]){
        console.log("true")
    } else {
        console.log("false")
    }
 }
 console.log(cope())*/



 const show = document.querySelector("#ho")
 const array = [2, 3, 4, 7, 5, 7, 2];
 const read = () => {
    if(array[0] === array[6]){
        show.innerHTML = "true"
    } else {
        show.innerHTML = "false"
    }
 }
 
console.log(read())


