const my_text = document.getElementById("my_text");
const my_button = document.getElementById("my_button");
const my_parag = document.getElementById("my_parag");
let age ;
my_button.onclick = function(){
   age = my_text.value ;
   age = Number(age);
   if(age>= 100){
    my_parag.textContent = "you are too old to enter this site"
   }
   else if(age==0){
    my_parag.textContent = "you are just born  to enter this site"
   }
   else if (age>=18){
    my_parag.textContent = "you are  old enough to enter this site"
   }
   else if(age<0){
    my_parag.textContent = "your age cannot be below 0";
   }
   else{
    my_parag.textContent = "you must be 18+ to enter this site"
   }
}
   
