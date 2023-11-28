var personList = [];
var index;

document.getElementById('formulario').addEventListener('submit', function (event) {
  event.preventDefault();
  var nameInput = document.getElementById('username');
  var ageInput = document.getElementById('age');
  var mailInput = document.getElementById('email');
  var contentInput = document.getElementById("content");
  var feedback = document.getElementById("feedback");
  var date = registDate();
  addPerson(nameInput.value, parseInt(ageInput.value), mailInput.value, contentInput.value, feedback.value, date);
  index++;
  cleanForm();
});

function registDate(){
  var day = 1;
  var month = 1;
  var year = 1;
  var time = '00:00:00';
  return day+'/'+month+'/'+year+' '+time;

}

function cleanForm(){
    document.getElementById("username").value = "";
    document.getElementById("age").value = null;
    document.getElementById("email").value = "";
    document.getElementById("content").value = "sim";
    document.getElementById("feedback").value = "";
}

function removeAll(){
    localStorage.clear();
    document.getElementById('personList').innerHTML = '';
    personList = [];
    index = 0;
}

function renderPersonList() {
  var personListElement = document.getElementById('personList');
  personListElement.innerHTML = ''; 

  personList.forEach(function (person) {
    var listItem = document.createElement('li');
    listItem.innerHTML = '<span >' + person.name +' Idade: ' + person.age + ' Data de Insrição:' + person.date+ '</span><button onclick="deletePerson(' + person.id + ')">Excluir</button>';
    personListElement.appendChild(listItem);
  });
}

function addPerson(name, age, mail, content, feedback, date) {
  var newPerson = {id: index, name: name, age: age, mail: mail, content:content, feedback:feedback, date:date};
  personList.push(newPerson);   
  localStorage.setItem('personList', JSON.stringify(personList));
  renderPersonList();
}

function deletePerson(id) {
  var updatedPersonList = personList.filter(function(person) {
    return person.id !== id;
  });

  if(updatedPersonList.length < personList.length) {
    personList = updatedPersonList;
    localStorage.setItem('personList', JSON.stringify(personList)); 
    renderPersonList();
  } 
  else{
    alert('Pessoa não encontrada.');
  }
}

function query(){
  var tag = document.getElementById('personField');
  personList = personList.filter(function(person) {
    return person.name === tag.value;
  });
  if(personList.length !== 0){
    renderPersonList();
  }
  else{
    alert('Nenhum colaborador encontrado');  
  }
  getPatientList();
}



function getPatientList() {
  var storedList = JSON.parse(localStorage.getItem('personList'));
  personList = storedList || []; //se storedList for um valor válido (não seja nulo ou indefinido). é atribuido a patientList. Caso contrário, patientList recebe um array vazio
}





