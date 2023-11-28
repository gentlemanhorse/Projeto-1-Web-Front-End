var personList = [];

document.getElementById('formulario').addEventListener('submit', function (event) {
  event.preventDefault();
  var nameInput = document.getElementById('username');
  var ageInput = document.getElementById('age');
  var mailInput = document.getElementById('email');
  var contentInput = document.getElementById("content");
  var feedback = document.getElementById("feedback");
  var date = new Date().toDateString()
  addPerson(nameInput.value, parseInt(ageInput.value), mailInput.value, contentInput.value, feedback.value, date);
  cleanForm();
});

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
}

function addPerson(name, age, mail, content, feedback, date) {
  var newPerson = {name: name, age: age, mail: mail, content:content, feedback:feedback, date:date};
  personList.push(newPerson);   
  localStorage.setItem('personList', JSON.stringify(personList));
  renderPersonList();
}

// Exemplo de uso do localStorage com os métodos setItem, push, stringify, parse e filter para cadastro de pacientes

// Função para adicionar um novo paciente


// Função para excluir um paciente
function deletePerson(name) {
  var updatedPersonList = personList.filter(function (person) {
    return person.name !== name; //retorna todos os elementos que não sejam no ID selecionado
  });

  if (updatedPersonList.length < personList.length) { //verifica se a lista atualizada é diferente da lista original
    personList = updatedPersonList;
    localStorage.setItem('personList', JSON.stringify(personList)); 
    renderPersonList();
  } else {
    alert('Pessoa não encontrada.');
  }
}

// Função para recuperar a lista de pacientes do localStorage
function getPatientList() {
  var storedList = JSON.parse(localStorage.getItem('personList')); //converte a string JSON para objeto JavaScript
  patientList = storedList || []; //se storedList for um valor válido (não seja nulo ou indefinido). é atribuido a patientList. Caso contrário, patientList recebe um array vazio
}

// Função para renderizar a lista de pacientes no HTML
function renderPersonList() {
  var personListElement = document.getElementById('personList');
  personListElement.innerHTML = ''; //limpa o conteúdo HTML do elemento patientListElement

  personList.forEach(function (person) {
    var listItem = document.createElement('li');
    //renderiza a lista de pacientes. Itera sobre cada paciente na lista encontrada e cria um <li> para cada paciente
    listItem.innerHTML = '<span class="person-name">' + person.name + '</span> (Idade: ' + person.age + ') <button class="delete-button" onclick="deletePerson(' + person.name + ')">Excluir</button>';
    personListElement.appendChild(listItem);
  });
}


