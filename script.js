let query = document.querySelector('.query');
let btn =  document.querySelector('button');
let reponse =  document.querySelector('.reponse');

btn.onclick = function(){
    if(query.value.length > 0){
        reponse.value = "Resulat : " + eval (query.value);
        reponse.style.display = "block";
    }else{
        alert("champ vide!");
        reponse.style.display = "none";
    }
}