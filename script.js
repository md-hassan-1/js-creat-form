
 let formtask  = document.querySelector("#maintask")
 let input = document.querySelector("#input")
let  email = document.querySelector("#email")
let  phone = document.querySelector("#phone")
 let button = document.querySelector("#addtask")
 let course = document.querySelector("#date")
 let data = document.querySelector("#course")
 let div = document.querySelector(".div")



let task;


 

  if(localStorage.getItem("tasks")!="" && localStorage.getItem("tasks")!=null){
    let exitng = localStorage.getItem("tasks")
    task = exitng.split(",")
  }else{ task =  []

  }




formtask.addEventListener("submit",function(e){
      e.preventDefault()


   task.push(input.value,email.value,phone.value,course.value,data.value)
    console.log(task)

    display()
    input.value=''
    email.value=''
    phone.value=''
    course.value=''
    data.value=''

    localStorage.setItem("tasks",task)

   })

   function display(){
    div.innerHTML=''
    task.forEach(function(value,index){
      div.innerHTML+=`<h5>${value}</h5>
                        <hr>`

     })
   }
   display()
   







//  let task;

//  if(task!=0){


// let phone = {
//     name:"hassan",
//     email:"hassanansari@gmail.com"
// }
// let keys = {
//     name:"hassan",
//     email:"hassanansari@gmail.com"
// }

//  let arry = ["amit","sumit","sonu ","monu"]

//  phone_sting = JSON.stringify(phone)
 


// localStorage.setItem("write","sachin shanu dfdsdf")
// localStorage.setItem("box",arry)
// hasaan_converter = localStorage.getItem("keys")

// converter_json = JSON.parse(hasaan_converter)
// console.log(converter_json)


// localStorage.setItem("set",phone_sting)

// let frame = {
//         name:"hassan",
//          email:"hassanansari@gmail.com"
//      }


    //  localStorage.setItem("xkey",frame)
   