
 const show = document.querySelector("#ho")
 const array = [2, 3, 4, 7, 5, 7, 2];
 const read = () => {
  // array[array.length - 1]
    if(array[0] === array[6]){
        show.innerHTML = "true"
    } else {
        show.innerHTML = "false"
    }
 }
 
//console.log(read())

const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(i=0;i<10;i++){
    console.log(numb[i] + (numb[i]-1))
}








