const data = new Date();

let person = {
    name: "",
    age: 0,
    mail: "",
    content: "",
    feedback: "",
    date: ""
};

function submitData(){
    person.name = document.getElementById("username").value;
    person.age = document.getElementById("age").value;
    person.mail = document.getElementById("email").value;
    person.content = document.getElementById("content").value;
    person.feedback = document.getElementById("feedback").value;
    person.date = new Date().toDateString();
    if (person.name === '') {
        alert("Insira o nome");
    }
    else if(person.age < 18 || person.age > 120){
        alert("Insira a idade corretamente");
    }
    else if(person.mail === ''){
        alert("Insira o email");
    }
    
    else{
        addElemento(person);
        cleanAll();
    }
    
}

function cleanAll(){
    document.getElementById("username").value = "";
    document.getElementById("age").value = null;
    document.getElementById("email").value = "";
    document.getElementById("content").value = "sim";
    document.getElementById("feedback").value = "";
}

function addElemento(person) {
    let li = document.createElement("li");
    let t = document.createTextNode("Nome: "+person.name+" email: "+person.email+" data de inscrição: "+person.date);
    li.appendChild(t);
    
    document.getElementById("itemLista").appendChild(li);
    
    document.getElementById("tarefa").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}
