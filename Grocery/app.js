
const form = document.querySelector(".grocery-form");
const alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
const groceryItem = document.querySelector(".grocery-item");

// edit option 
let editElement;
let editFlag = false;
let editID = "";

// ******* event listener *******
form.addEventListener("submit",addItems);
// clear list
clearBtn.addEventListener("click", clearItems);






// ******** AddItems ********
function addItems(e){
    e.preventDefault();
    const value= grocery.value;
    const id = new Date().getTime().toString();
     if(value){
    const newItems= form.elements.items.value;
    container.classList.add("show-container");
    const addList=document.createElement('article');
    // add class
    addList.classList.add("grocery-item");
    // add id 
    const attr = document.createAttribute("data-id")
    attr.value = id;
    addList.setAttributeNode(attr);
    addList.innerHTML =`<p class="title"> ${newItems}</p>
                    <div class="btn-container">
                    <button class="edit-btn">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="delete-btn">
                        <i class="fas fa-trash"></i>
                    </button>
                    </div>
                `;
    list.append(addList);
  }  
    else if (value && editFlag){
    console.log ("editting");
  }
  else {
    displayAlert("enter the items","danger")
  }
}
// display alert
function displayAlert(text,action) {
    // display alert
    alert.textContent= text;
    alert.classList.add(`alert-${action}`);
    // remove alert
    setTimeout(function() {
        alert.textContent="";
        alert.classList.add(`alert-${action}`);
    }, 1000);
}



// clear all items 
function clearItems(){
  const items = document.querySelectorAll(".grocery-item");
  if(items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list","danger");
  setBackToDefault();
}


// setBackToDefault
function setBackToDefault() {
  let editFlag= false;
  value = grocery.value;
  value="";
  editID="";
  submitBtn.textContent = "submit";
}

