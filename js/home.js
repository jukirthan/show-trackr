let got = document.getElementById("got");
let bb = document.getElementById("bb");
let dexter = document.getElementById("dexter");
let himym = document.getElementById("himym");
let st = document.getElementById("st");
let tb = document.getElementById("tb");
let witcher = document.getElementById("witcher");
let dark = document.getElementById("dark");


let movies = [got, bb, dexter, himym, st, tb, witcher, dark];




document.getElementById("a").onclick = function(){
    showByLetter("a");
};

document.getElementById("b").onclick = function(){
    showByLetter("b");
};

document.getElementById("d").onclick = function(){
    showByLetter("d");
};

document.getElementById("h").onclick = function(){
    showByLetter("h");
};

document.getElementById("s").onclick = function(){
    showByLetter("s");
};

document.getElementById("t").onclick = function(){
    showByLetter("t");
};

document.getElementById("w").onclick = function(){
    showByLetter("w");
};



function showByLetter(letter){

    for(let i = 0; i < movies.length; i++){

        let title = movies[i].getElementsByTagName("h4")[0].innerText.toLowerCase();

        if(title.startsWith(letter)){
            movies[i].style.display = "block";
        } else {
            movies[i].style.display = "none";
        }

    }
}



document.getElementById("action").onclick = function(){
    showByGenre("Action");
};

document.getElementById("comedy").onclick = function(){
    showByGenre("Comedy");
};

document.getElementById("drama").onclick = function(){
    showByGenre("Drama");
};

document.getElementById("crime").onclick = function(){
    showByGenre("Crime");
};

document.getElementById("fantasy").onclick = function(){
    showByGenre("Fantasy");
};


function showByGenre(genre){

    for(let i = 0; i < movies.length; i++){

        let movieGenre = movies[i].getAttribute("data-genre");

        if(movieGenre === genre){
            movies[i].style.display = "block";
        } else {
            movies[i].style.display = "none";
        }

    }
}