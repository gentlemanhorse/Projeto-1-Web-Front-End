var personList = [];

function cleanForm(){
    document.getElementById("username").value = "";
    document.getElementById("age").value = null;
    document.getElementById("email").value = "";
    document.getElementById("content").value = "sim";
    document.getElementById("feedback").value = "";
}

function removeAll(){
    localStorage.clear();
}

// Exemplo de uso do localStorage com os métodos setItem, push, stringify, parse e filter para cadastro de pacientes

// Criar uma lista vazia de pacientes
var patientList = []; //Comando que cria uma variável patientList e a inicializa como um array vazio. Essa variável é usada para armazenar a lista de pacientes cadastrados.
var count = 1;

// Função para adicionar um novo paciente
function addPerson(name, age, mail, content, feedback, date) {
  var newPerson = {name: name, age: age, mail: mail, content:content, feedback:feedback, date:date}; //cria um novo objetivo de paciente (newPatient), com as propriedades id, name e age
  personList.push(newPerson); //comando que adiciona o novo paciente ao final da lista de pacientes
  localStorage.setItem('personList', JSON.stringify(personList)); //o JSON.stringfy converte o objeto JavaScript em uma string JSON
  renderPersonList();
}

// Função para excluir um paciente
function deletePatient(patientId) {
  var updatedPatientList = patientList.filter(function (patient) {
    return patient.id !== patientId; //retorna todos os elementos que não sejam no ID selecionado
  });

  if (updatedPatientList.length < patientList.length) { //verifica se a lista atualizada é diferente da lista original
    patientList = updatedPatientList;
    localStorage.setItem('patientList', JSON.stringify(patientList)); 
    renderPatientList();
  } else {
    alert('Paciente não encontrado.');
  }
}

// Função para recuperar a lista de pacientes do localStorage
function getPatientList() {
  var storedList = JSON.parse(localStorage.getItem('patientList')); //converte a string JSON para objeto JavaScript
  patientList = storedList || []; //se storedList for um valor válido (não seja nulo ou indefinido). é atribuido a patientList. Caso contrário, patientList recebe um array vazio
}

// Função para renderizar a lista de pacientes no HTML
function renderPersonList() {
  var personListElement = document.getElementById('itemList');
  personListElement.innerHTML = ''; //limpa o conteúdo HTML do elemento patientListElement

  personList.forEach(function (person) {
    var listItem = document.createElement('li');
    //renderiza a lista de pacientes. Itera sobre cada paciente na lista encontrada e cria um <li> para cada paciente
    listItem.innerHTML = '<span class="patient-name">' + person.name + '</span> (Idade: ' + person.age + ') <button class="delete-button" onclick="deletePerson(' + patient.id + ')">Excluir</button>';
    personListElement.appendChild(listItem);
  });
}


// Event listener para o formulário de cadastro de pacientes
document.getElementsById('submit').addEventListener('submit', function (event) {
  alert('o0');
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

