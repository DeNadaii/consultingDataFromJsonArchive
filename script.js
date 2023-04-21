import Empresas from "./sample.json" assert { type: "json" };

document.getElementById("button").addEventListener("click", onButtonClick);

let selectedFromDropdown = document.getElementById("idSelector").
console.log(selectedFromDropdown.value)

function onButtonClick() {
    deleteList()

    let search = document.getElementById("filterInput").value;

    Empresas.Empresas.forEach((element, index) => {
        
        let NomeFantasia = element.NomeFantasia.toLocaleLowerCase()

        if (NomeFantasia.includes(search.toLowerCase())){
            createList("Nome", element.NomeFantasia);

        }
        else {

        }

    });
}

function createList(toCreate, toInnetHTML) {
    let UnorderListFromHTML = document.getElementById("ULinfo");
    let creatLi = document.createElement("li");
    let creatA = document.createElement("a");

    creatA.setAttribute("id", toCreate);
    creatA.innerHTML = toInnetHTML;

    creatLi.appendChild(creatA);
    UnorderListFromHTML.appendChild(creatLi);
}

function deleteList() {
    let elementToDelete = document.getElementById("ULinfo");
    elementToDelete.remove();
    let newUnorderList = document.createElement("ul");
    newUnorderList.setAttribute("id", "ULinfo");
    document.getElementById("Table").appendChild(newUnorderList);
}

// function getHtmlIDs() {
//     let nomeFromHTML = document.getElementById("Nome");
//     let cnpjFromHTML = document.getElementById("cnpj");
//     let capitalFromHTML = document.getElementById("capital");
//     let CEPFromHTML = document.getElementById("CEP");

//     nomeFromHTML.innerHTML = "algum nome";
//     cnpjFromHTML.innerHTML = "algun cnpj";
//     capitalFromHTML.innerHTML = "algun capital";
//     CEPFromHTML.innerHTML = "algun CEP";
// }

// createList("Nome", "nome");
// createList("cnpj", "CNPJ");
// createList("capital", "capital");
// createList("CEP", "CEP");

// getHtmlIDs();

//Luiz Livelli
