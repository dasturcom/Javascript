var bodyElementi = document.querySelector("body");
var checkbox = document.querySelector('.checkbox');

checkbox.addEventListener("click", function(){
    bodyElementi.classList.toggle('dark');
});



// var fristname = prompt("Ismingizni kiriting").toLocaleLowerCase().trim();
// var surname = prompt("Familiyangizni kiriting").toLocaleLowerCase().trim();
// var age = prompt("Yoshingizni kiriting").trim();

// alert(`Sizning ismingiz ${fristname}, Familiyangiz ${surname}, Yoshingiz ${age}da`);

// console.log(`Ismingiz: ${fristname};`);
// console.log(`Familiyangiz: ${surname};`);
// console.log(`Yoshingiz: ${age}da;`); 
