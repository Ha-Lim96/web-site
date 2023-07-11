/*
let btn_formations = document.getElementById("btn_formations");
let btn_competences = document.getElementById("btn_competences");
let btn_experieces = document.getElementById("btn_experieces");

let formations = document.getElementById("formations");
let competences = document.getElementById("competences");
let experiences = document.getElementById("experiences");


if(btn_formations != null){
    btn_formations.addEventListener("click", () => {

        formations.style.display = "block";
        competences.style.display = "none";
        experiences.style.display = "none";
        //mettre le bouton cliqué différent
        btn_formations.classList.remove('btn-outline-dark');
        btn_formations.classList.add('btn-dark');
    
        //mettre les autres boutons tous pareils
        btn_competences.classList.remove('btn-dark');
        btn_competences.classList.add('btn-outline-dark');
    
        btn_experieces.classList.remove('btn-dark');
        btn_experieces.classList.add('btn-outline-dark');
    
    });
}


if(btn_competences != null){
    btn_competences.addEventListener("click", () => {

        formations.style.display = "none";
        competences.style.display = "block";
        experiences.style.display = "none";

        //mettre le bouton cliqué différent
        btn_competences.classList.remove('btn-outline-dark');
        btn_competences.classList.add('btn-dark');

        //mettre les autres boutons tous pareils
        btn_formations.classList.remove('btn-dark');
        btn_formations.classList.add('btn-outline-dark');

        btn_experieces.classList.remove('btn-dark');
        btn_experieces.classList.add('btn-outline-dark');

    });

}

if(btn_competences != null){
    btn_experieces.addEventListener("click", () => {

        formations.style.display = "none";
        competences.style.display = "none";
        experiences.style.display = "block";

        //mettre le bouton cliqué différent
        btn_experieces.classList.remove('btn-outline-dark');
        btn_experieces.classList.add('btn-dark');

        //mettre les autres boutons tous pareils
        btn_formations.classList.remove('btn-dark');
        btn_formations.classList.add('btn-outline-dark');

        btn_competences.classList.remove('btn-dark');
        btn_competences.classList.add('btn-outline-dark');

    });
}

*/
