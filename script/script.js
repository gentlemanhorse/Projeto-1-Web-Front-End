const data = new Date();

let person = {
    name: "",
    age: 0,
    mail: "",
    content: "",
    feedback: "",

};

function submitData(){
    person.name = document.getElementById("username").value;
    person.age = document.getElementById("age").value;
    person.mail = document.getElementById("email").value;
    person.content = document.getElementById("content").value;
    person.feedback = document.getElementById("feedback").value;
    
    alert(person.name+" "+person.age+" "+person.mail+" "+person.content+" "+person.feedback);
}

function cleanAll(){
    document.getElementById("username").value = "";
    document.getElementById("age").value = 18;
    document.getElementById("email").value = "";
    document.getElementById("content").value = "sim";
    document.getElementById("feedback").value = "";
}