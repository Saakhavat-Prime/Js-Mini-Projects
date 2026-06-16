let input = document.querySelector('input');
let button = document.querySelector('button');
let ul = document.querySelector('ul');

function func(){
    console.log(input.value);
    let li = document.createElement('li');
    li.innerText = input.value;
     
     let btn = document.createElement('button');
     btn.innerText = "delete";
     btn.classList.add("delete");
     
     li.appendChild(btn); 
     
     ul.appendChild(li);
     input.value = "";
     li.classList.add('margin');
}

//  call func function when button clicked 

button.addEventListener('click',func);

// call func function when enter press 
input.addEventListener('keypress', (event)=>{
if(event.code == "Enter"){
    func();

}
});

// remove task 
ul.addEventListener('click', function (event){
    // console.log(event.target.nodeName);
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        // console.log(listItem);
        listItem.remove();

    }

})
// let delBtns = document.querySelectorAll('.delete');
// for (btn of delBtns) {
//     btn.addEventListener('click', function(){
//       console.log("delete");
       
//     });
    
// }



