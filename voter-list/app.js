// store the data from the form 
class Voter {
    constructor(...data){
        this.name = data[0];
        this.phone = data[1];
        this.age = data[2];
        this.city = data[3];
    }
}
// Add or Edit or Delete Voter 
class VoterManipulation {
// Adding voter to the table 
addVoter(voter) {
    const list = document.querySelector(".voterList");
    const row = document.createElement("tr");
    const {name, phone, age, city } = voter;
    row.classList.add("tr");
    row.innerHTML = `
    <td class="td"> ${name} </td>
    <td class="td"> ${phone} </td>
    <td class="td"> ${age} </td>
    <td class="td"> ${city} </td>
    <td class="td"><a href="" class="editbtn">E</a></td>
    <td class="td"><a href="" class="delbtn">&times;</a></td>
     `;
     list.appendChild(row);

}
// Deleting the Voter 
deleteVoter(target) {
    target.closest(".tr").remove();

}
// editing the Voter 
editVoter(target){
 const tr = target.closest(".tr");
 const tdCollection = Array.from(tr.children);
 const inputs = document.querySelectorAll("input");
 let counter = 0;
 inputs.forEach((input) => {
     if (input.value !== "Submit"){
         input.value = tdCollection[counter++].innerText;
     }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
 });

}
}

class Utility {
    // Alterting Method
    static showAlert(msg, classname) {
        const div = document.createElement("div");
        div.className = `alert ${classname}`;
        div.appendChild(document.createTextNode(msg));

        const container = document.querySelector(".container");
        const form = document.querySelector("#form");
        container.insertBefore(div, form);
        setTimeout(() => {
            document.querySelector(".alert").remove();
        }, 3000);
    }
    // Clearing from method 3
    static clear() {

    }
}
// Submit Clicked 
const form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    // Extracting the value from the input 
    let[name,phone,age,city] =[
        document.querySelector("[name='name']").value,
        document.querySelector("[name='phone']").value,
        document.querySelector("[name='age']").value,
        document.querySelector("[name='city']").value,
    ];
    // console.log(name,phone,age,city);
    // Storing value in voter class constructor
    let voter = new Voter(name, phone, age, city);

    // Creating the object of voterList class 
    let voter1 = new VoterManipulation();

    // Checking for empty fields 
    if (name==="" || phone === "" || age === "" || city === ""){
        Utility.showAlert("Please Fill in All Fields","failure");
    } else {
        voter1.addVoter(voter);
        Utility.showAlert("Voter Added Successfully", "success");
        Utility.clear();
    }
});

// Delete or Edit Button Clicked 
const voterList = document.querySelector(".voterList");
voterList.addEventListener("click", (e) => {
    e.preventDefault();
    editDelVoter = new VoterManipulation();
    if(e.target.classList.contains("delbtn")) {
        editDelVoter.deleteVoter(e.target);
        Utility.showAlert("Voter has been Removed","success");
    }
    if (e.target.classList.contains("editbtn")) {
        editDelVoter.deleteVoter(e.target);
        editDelVoter.editVoter(e.target);
        Utility.showAlert("Voter About to be Edited", "success");
    }

}); 
