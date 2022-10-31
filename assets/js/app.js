const inputCantidad = document.querySelector("#cantidad");
const inputColor    = document.querySelector("#color");
const precio        = document.querySelector(".precio");
const btnTotal      = document.querySelector("#btnTotal");
const total         = document.querySelector(".total");
const cantidad      = document.querySelector(".cantidad");
const color         = document.querySelector(".color");   

btnTotal.addEventListener("click", () => {

    const textoCantidad = inputCantidad.value;
    const textoColor    = inputColor.value;
    
    document.querySelector(".color").style.backgroundColor=textoColor;

    if(textoColor == "darkblue")
    {
        const pDark = 400000;
        precio.textContent = pDark;

        total.textContent = textoCantidad * pDark;
        cantidad.textContent = textoCantidad;

    }
    if(textoColor == "peru")
    {
        const pPeru = 600000;
        precio.textContent = pPeru;
        
        total.textContent = textoCantidad * pPeru;
        cantidad.textContent = textoCantidad;

    }
    if(textoColor == "tomato")
    {
        const pTomato = 800000;
        precio.textContent = pTomato;

        total.textContent = textoCantidad * pTomato;
        cantidad.textContent = textoCantidad;
    }


    console.log(textoCantidad);
    console.log(textoColor);


});
