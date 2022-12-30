const btnModal = document.getElementById("btnUbi").addEventListener("click", () => {
    modalMapa()
});
console.log(new Date("10/03/1994"))

fetch('https://randomuser.me/api/?nat=ES')
    .then(response => response.json())
    .then(data => {
        document.getElementById("img-user").src = data.results[0].picture.medium
        document.getElementById("name-user").textContent = data.results[0].name.first + " " + data.results[0].name.last
        document.getElementById("fecha").textContent = new Date(data.results[0].dob.date).toLocaleDateString()
        document.getElementById("edad").textContent = data.results[0].dob.age
        document.getElementById("dni").textContent = data.results[0].id.value
        document.getElementById("phone").textContent = data.results[0].phone
        document.getElementById("cell").textContent = data.results[0].cell
        document.getElementById("email").textContent = data.results[0].email

    }).catch(e => console.log(e));

function modalMapa() {
    // console.log(new Date("10/03/1994"))
    // alert("sii")
    // myModalEl = document.getElementById('exampleModal');
    // modal = bootstrap.Modal.getInstance(myModalEl);
    // modal.toggle()
}