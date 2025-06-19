document.querySelector(".check").addEventListener("click", function(event) {

    let numGen = Math.floor(Math.random() * 20) + 1;
    let input = document.querySelector("#inputText").value;
    let box= document.querySelector(".box").innerHTML = numGen;


    if (input === "") {
        document.querySelector(".enter").innerHTML = "Please enter a number" ;
        document.querySelector(".box").display = "none";
    }else if (Number(input) === numGen ){
       document.querySelector(".zero").innerHTML = Number(10)  ;
    } 

});


document.querySelector(".again").addEventListener("click", function(event) {
    document.querySelector("")
});

