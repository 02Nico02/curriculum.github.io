window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        document.querySelector(".go-top-container").classList.add("show-go-top");
    } else {
        document.querySelector(".go-top-container").classList.remove("show-go-top");
    }
    document.getElementById("navbarToggleExternalContent").classList.remove("show");
    document.getElementById("icon-btn-nav").classList.remove("fa-caret-up")
    document.getElementById("icon-btn-nav").classList.add("fa-caret-down")
}

fetch('https://randomuser.me/api/?nat=ES')
    .then(response => response.json())
    .then(data => {
        document.getElementById("img-user").src = data.results[0].picture.large
        document.getElementById("name-user").textContent = data.results[0].name.first + " " + data.results[0].name.last
        document.getElementById("fecha").textContent = new Date(data.results[0].dob.date).toLocaleDateString()
        document.getElementById("edad").textContent = data.results[0].dob.age
        document.getElementById("dni").textContent = data.results[0].id.value
        document.getElementById("phone").textContent = data.results[0].phone
        document.getElementById("cell").textContent = data.results[0].cell
        document.getElementById("email").textContent = data.results[0].email

    }).catch(e => console.log(e));


document.getElementById("btn-nav").addEventListener("click", toggleBtnNav);
document.getElementById("btnIdiomas").addEventListener("click", () => { toggleList("listIdiomas", "btnIdiomas", "languages") });
document.getElementById("btnHerramientas").addEventListener("click", () => { toggleList("listHerramientas", "btnHerramientas", "tools") });
document.querySelector(".go-top-container").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

const data = {
    "languages": [
        {
            "name": "Español",
            "percentage": 100
        },
        {
            "name": "Ingles",
            "percentage": 75,
        },
        {
            "name": "Italiano",
            "percentage": 65,
        },
        {
            "name": "Ruso",
            "percentage": 25,
        },
    ],
    "tools": [
        {
            "name": "Office",
            "percentage": 95
        },
        {
            "name": "Python",
            "percentage": 90,
        },
        {
            "name": "JavaScript",
            "percentage": 75,
        },
        {
            "name": "SQL",
            "percentage": 70,
        },
        {
            "name": "HTML",
            "percentage": 50,
        },
        {
            "name": "css",
            "percentage": 50,
        },
        {
            "name": "smalltalk",
            "percentage": 40,
        },
        {
            "name": "Vue.js",
            "percentage": 35,
        },
        {
            "name": "React",
            "percentage": 35,
        },
        {
            "name": "android studio",
            "percentage": 25,
        },
    ],
}

function toggleBtnNav() {
    document.getElementById("navbarToggleExternalContent").classList.toggle("show")
    document.getElementById("icon-btn-nav").classList.toggle("fa-caret-up")
    document.getElementById("icon-btn-nav").classList.toggle("fa-caret-down")
}


/** Segun la cantidad de datos mostrados, o agrega más o muestra menos */
function toggleList(idLista, idBtn, nomList) {
    const list = document.getElementById(idLista)
    const btn = document.getElementById(idBtn)
    if (list.children.length > 2) {
        for (let i = list.children.length - 1; i > 1; i--) {
            list.children[i].remove()
        }
        btn.textContent = "Más"
    } else {
        for (let i = 2; i < data[nomList].length; i++) {
            const percentage = data[nomList][i]["percentage"] + "%"
            const colorProgress = getColorProgress(data[nomList][i]["percentage"])
            addBar(data[nomList][i]["name"], colorProgress, percentage, idLista)
        }
        btn.textContent = "Menos"
    }
}

/** Crea un elemento barra de porcentaje para agregarla a una lista */
function addBar(name, colorProgress, percentage, idList) {
    const newLi = document.createElement("li");
    const newP = document.createElement("p");
    const newDivProgre = document.createElement("div");
    const newDivBar = document.createElement("div");

    newP.textContent = name;

    newDivBar.classList.add("progress-bar")
    newDivBar.classList.add(colorProgress);
    newDivBar.setAttribute("role", "progressbar");
    newDivBar.setAttribute("aria-valuenow", "100");
    newDivBar.setAttribute("aria-valuemin", "0");
    newDivBar.setAttribute("aria-valuemax", "100");
    newDivBar.style.width = percentage;

    newDivProgre.classList.add("progress");
    newDivProgre.appendChild(newDivBar);

    newLi.appendChild(newP);
    newLi.appendChild(newDivProgre);

    document.getElementById(idList).appendChild(newLi)
}

/** Devuelve el nombre de la clase que le da el color segun su progreso */
function getColorProgress(valorProgress = 0) {

    if (valorProgress >= 0 && valorProgress < 20) {
        return "progress0"
    }
    if (valorProgress >= 20 && valorProgress < 40) {
        return "progress25"
    }
    if (valorProgress >= 40 && valorProgress < 60) {
        return "progress50"
    }
    if (valorProgress >= 60 && valorProgress < 80) {
        return "progress75"
    }
    return "progress100"
}