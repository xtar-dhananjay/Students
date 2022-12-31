let quateText = document.querySelector('.QuateText');
let author = document.querySelector('.author span');
let Button = document.querySelector('.NewQuote button');


Button.addEventListener("click", function(){
    Button.style.background = "#aebfff";
    Button.innerText = "loding...";
    fetch('https://api.quotable.io/random')
    .then((Response) => Response.json())
    .then((data) =>  {
        let Contnet = data.content;
        let Name = data.author;
        console.log(Contnet, Name);
        quateText.innerText = Contnet;
        author.innerText = Name;
        Button.innerText = "New Qouts";
        Button.style.background = "#5372f0";

    })
})




// .catch((error) => console.log(error))