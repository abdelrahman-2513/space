let menuBar = document.querySelector(".menu");

let headerBar = document.querySelector(".lists");
menuBar.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("change");
    headerBar.classList.toggle("block-bar");

})

let headLinks = document.querySelectorAll("header ul li");

// functionsOnclick
headLinks.forEach((li) => {
    li.addEventListener("click", (e) => {
        headLinks.forEach((li) => {
            li.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
    })
})
let destinationLinks = document.querySelectorAll(".description ul li");

// functionsOnclick
destinationLinks.forEach((li) => {
    li.addEventListener("click", (e) => {
        destinationLinks.forEach((li) => {
            li.classList.remove("active");
        })
        e.currentTarget.classList.add("active");
    })
})
//home body
let homePage = document.querySelector(".home .container");
let destinationPage = document.querySelector(".home .container2");
let crewPage = document.querySelector(".home .container3");
let technPage = document.querySelector(".home .container4");

let DestinationTitle = document.querySelector(".description h1");
let destinationPar = document.querySelector(".description p");
let destinationTravel = document.querySelector(".dist");
let destinationTime = document.querySelector(".time");
let destinationImg = document.querySelector(".pick img");

let crewTitle = document.querySelector(".container3 .description h1");
let crewPar = document.querySelector(".container3 .description p");
let crewImg = document.querySelector(".container3 img");

let techTitle = document.querySelector(".container4 .pick .description .content h1");
let techPar = document.querySelector(".container4 .pick .description .content p");
let techImg = document.querySelector(".container4 img");
//function of getting data from api(JSON)


let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.npoint.io/494440d28a442394daaa");
myRequest.send();
let myData = null;
myRequest.onload = function () {
    if (this.status === 200 && this.readyState === 4) {
        myData = JSON.parse(this.responseText);
    }
};





//home-function
let homeLi = document.querySelector("#home");
homeLi.addEventListener("click", (e) => {
    let destinationPage = document.querySelector(".container2");
    let homePage = document.querySelector(".home .container");
//     if (window.innerWidth < 820) {
//         document.body.style = "background-image:url(../assets/home/background-home-mobile.jpg); background-size: cover;";
//     } else if (window.innerWidth < 1100) {
//         document.body.style = "background-image:url(../assets/home/background-home-tablet.jpg); background-size: cover;";
//     }
//     else {
//         document.body.style = "background-image:url(`../assets/home/background-home-desktop.jpg`); background-size: cover;";

//     }
    homePage.style = "display:felx height:fit-content;";
    destinationPage.style = "visibility: hidden; height:0px;";
    crewPage.style = "visibility: hidden; height:0px;";
    technPage.style = "visibility: hidden; height:0px;";
})

// destination-function

let destinationLi = document.querySelector("#destination");
destinationLi.addEventListener("click", (e) => {
//     if (window.innerWidth < 820) {
//         document.body.style = "background-image:url(../assets/destination/background-destination-mobile.jpg); background-size: cover;";
//     } else if (window.innerWidth < 1100) {
//         document.body.style = "background-image:url(../assets/destination/background-destination-tablet.jpg); background-size: cover;";
//     }
//     else {
//         document.body.style = "background-image:url(../assets/destination/background-destination-desktop.jpg); background-size: cover;";

//     }
    homePage.style = "visibility: hidden; height:0px;";
    destinationPage.style = "visibility: inherit; height:fit-content";
    crewPage.style = "visibility: hidden; height:0px;";
    technPage.style = "visibility: hidden; height:0px;";

    DestinationTitle.textContent = `${myData["destinations"][0]["name"]}`;
    destinationPar.textContent = `${myData["destinations"][0]["description"]}`;
    destinationTravel.textContent = `AVG.DIST : ${myData["destinations"][0]["distance"]}`;
    destinationTime.textContent = `EST. TIME TRAVEL : ${myData["destinations"][0]["travel"]}`;
    destinationImg.setAttribute("src", `${myData["destinations"][0]["images"]["png"]}`);
})

let moonBtn = document.querySelector("#moon");
moonBtn.addEventListener("click", (e) => {
    DestinationTitle.textContent = `${myData["destinations"][0]["name"]}`;
    destinationPar.textContent = `${myData["destinations"][0]["description"]}`;
    destinationTravel.textContent = `AVG.DIST : ${myData["destinations"][0]["distance"]}`;
    destinationTime.textContent = `EST. TIME TRAVEL : ${myData["destinations"][0]["travel"]}`;
    destinationImg.setAttribute("src", `${myData["destinations"][0]["images"]["png"]}`);
})
let marsBtn = document.querySelector("#mars");
marsBtn.addEventListener("click", (e) => {
    DestinationTitle.textContent = `${myData["destinations"][1]["name"]}`;
    destinationPar.textContent = `${myData["destinations"][1]["description"]}`;
    destinationTravel.textContent = `AVG.DIST : ${myData["destinations"][1]["distance"]}`;
    destinationTime.textContent = `EST. TIME TRAVEL : ${myData["destinations"][1]["travel"]}`;
    destinationImg.setAttribute("src", `${myData["destinations"][1]["images"]["png"]}`);
})
let europaBtn = document.querySelector("#europa");
europaBtn.addEventListener("click", (e) => {
    DestinationTitle.textContent = `${myData["destinations"][2]["name"]}`;
    destinationPar.textContent = `${myData["destinations"][2]["description"]}`;
    destinationTravel.textContent = `AVG.DIST : ${myData["destinations"][2]["distance"]}`;
    destinationTime.textContent = `EST. TIME TRAVEL : ${myData["destinations"][2]["travel"]}`;
    destinationImg.setAttribute("src", `${myData["destinations"][2]["images"]["png"]}`);
})
let titanBtn = document.querySelector("#titan");
titanBtn.addEventListener("click", (e) => {
    DestinationTitle.textContent = `${myData["destinations"][3]["name"]}`;
    destinationPar.textContent = `${myData["destinations"][3]["description"]}`;
    destinationTravel.textContent = `AVG.DIST : ${myData["destinations"][3]["distance"]}`;
    destinationTime.textContent = `EST. TIME TRAVEL : ${myData["destinations"][3]["travel"]}`;
    destinationImg.setAttribute("src", `${myData["destinations"][3]["images"]["png"]}`);

})


let crewLi = document.querySelector("#crew");
crewLi.addEventListener("click", (e) => {
//     if (window.innerWidth < 820) {
//         document.body.style = "background-image:url(../assets/crew/background-crew-mobile.jpg); background-size: cover;";
//     } else if (window.innerWidth < 1100) {
//         document.body.style = "background-image:url(../assets/crew/background-crew-tablet.jpg); background-size: cover;";
//     }
//     else {
//         document.body.style = "background-image:url(../assets/crew/background-crew-desktop.jpg); background-size: cover;";

//     }
    homePage.style = "visibility: hidden; height:0px;";
    crewPage.style = "visibility: inherit; height:fit-content";
    destinationPage.style = "visibility: hidden; height:0px;";
    technPage.style = "visibility: hidden; height:0px;";


    crewTitle.textContent = `${myData["crew"][0]["name"]}`;
    crewPar.textContent = `${myData["crew"][0]["bio"]}`;
    crewImg.setAttribute("src",  `${myData["crew"][0]["images"]["png"]}`);
})
let comBtn = document.querySelector("#Commander");
comBtn.addEventListener("click", (e) => {
    crewTitle.textContent = `${myData["crew"][1]["name"]}`;
    crewPar.textContent = `${myData["crew"][1]["bio"]}`;
    crewImg.setAttribute("src",  `${myData["crew"][1]["images"]["png"]}`);
    
})
let pilotBtn = document.querySelector("#Pilot");
pilotBtn.addEventListener("click", (e) => {
    
    crewTitle.textContent = `${myData["crew"][2]["name"]}`;
    crewPar.textContent = `${myData["crew"][2]["bio"]}`;
    crewImg.setAttribute("src",  `${myData["crew"][2]["images"]["png"]}`);
})
let EngineerBtn = document.querySelector("#Engineer");
EngineerBtn.addEventListener("click", (e) => {
    
    crewTitle.textContent = `${myData["crew"][0]["name"]}`;
    crewPar.textContent = `${myData["crew"][0]["bio"]}`;
    crewImg.setAttribute("src",  `${myData["crew"][0]["images"]["png"]}`);
})
let SpecialistBtn = document.querySelector("#Specialist");
SpecialistBtn.addEventListener("click", (e) => {
    crewTitle.textContent = `${myData["crew"][3]["name"]}`;
    crewPar.textContent = `${myData["crew"][3]["bio"]}`;
    crewImg.setAttribute("src",  `${myData["crew"][3]["images"]["png"]}`);

})

let technLi = document.querySelector("#technology");
technLi.addEventListener("click", (e) => {
//     if (window.innerWidth < 820) {
//         document.body.style = "background-image:url(../assets/technology/background-technology-mobile.jpg); background-size: cover;";
//     } else if (window.innerWidth < 1100) {
//         document.body.style = "background-image:url(../assets/technology/background-technology-tablet.jpg); background-size: cover;";
//     }
//     else {
//         document.body.style = "background-image:url(../assets/technology/background-technology-desktop.jpg); background-size: cover;";

//     }
    homePage.style = "visibility: hidden; height:0px;";
    technPage.style = "visibility: inherit; height:fit-content";
    destinationPage.style = "visibility: hidden; height:0px;";
    crewPage.style = "visibility: hidden; height:0px;";



    techTitle.textContent = `${myData["technology"][0]["name"]}`;
    techPar.textContent = `${myData["technology"][0]["description"]}`;
    techImg.setAttribute("src",  `${myData["technology"][0]["images"]["portrait"]}`);
})
let technLinks = document.querySelectorAll(".container4 .pick .slides div");

// functionsOnclick
technLinks.forEach((div) => {
    div.addEventListener("click", (e) => {
        technLinks.forEach((div) => {
            div.classList.remove("active-4");
        })
        e.currentTarget.classList.add("active-4");
    })
})

let firstBtn = document.querySelector("#one");
firstBtn.addEventListener("click", (e) => {

    techTitle.textContent = `${myData["technology"][0]["name"]}`;
    techPar.textContent = `${myData["technology"][0]["description"]}`;
    techImg.setAttribute("src",  `${myData["technology"][0]["images"]["portrait"]}`);

})
let secondBtn = document.querySelector("#two");
secondBtn.addEventListener("click", (e) => {

    techTitle.textContent = `${myData["technology"][1]["name"]}`;
    techPar.textContent = `${myData["technology"][1]["description"]}`;
    techImg.setAttribute("src", `${myData["technology"][1]["images"]["portrait"]}`);

})
let thirdBtn = document.querySelector("#three");
thirdBtn.addEventListener("click", (e) => {

    techTitle.textContent = `${myData["technology"][2]["name"]}`;
    techPar.textContent = `${myData["technology"][2]["description"]}`;
    techImg.setAttribute("src", `${myData["technology"][2]["images"]["portrait"]}`);

})

// apiData("https://api.npoint.io/494440d28a442394daaa").then((des) => { console.log(des["destinations"][0]["images"]["png"]); }).catch((rej) => { return rej });

