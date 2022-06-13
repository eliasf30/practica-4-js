class pizza {
    constructor(nombre,id,precio, ingredientes, imagen){
        this.nombre = nombre
        this.id = id
        this.precio = precio
        this.ingredientes = ingredientes
        this.imagen = imagen
    }

    
}

const pizzas =[]



const pizza_muzarella = new pizza("muzarella",1,500,["queso muzarrella", " salsa", " oregano", " aceituna"]," muzarella.png")
pizzas.push(pizza_muzarella)
const pizza_fuggazeta = new pizza("fuggazeta",2,550,["queso", " cebolla", " oregano", " aceituna "],"Fugazzeta.png" )
pizzas.push(pizza_fuggazeta)
const pizza_rucula = new pizza("rucula",3,630,["queso", " rucula", " tomate", " aceituna"]," rucula.png" )
pizzas.push(pizza_rucula) 
const pizza_jamon = new pizza("jamon",4, 620,["queso", " jamon", " oregano", " aceituna"], "jamon.png")
pizzas.push(pizza_jamon)
const pizza_roquefort = new pizza("roquefort",5, 540, ["queso roquefort"," oregano", " aceituna"],"roquefort.png")
pizzas.push(pizza_roquefort)
const pizza_calabresa = new pizza("calabresa",6, 570, ["queso muzarrella", " salsa", " calabreza"," provenzal", " oregano", " aceituna"],"calabresa.png" )
pizzas.push(pizza_calabresa)

localStorage.setItem("array pizzas", pizzas)

 
const input = document.getElementById("input")
const button = document.getElementById("button")
const h2 = document.getElementById("h2")
const h4 = document.getElementById("h4")
const imagen = document.getElementById("imagendiv")
const ingredientes = document.getElementById("ingredientes")

console.log(pizzas)




button.addEventListener("click", ()=>{
    
    renderizartexto()


})


  renderizartexto = (() => {

    value = input.value

    

    const pizzaseleccionada = (pizzas.find((p) => p.id == value))
    imagen.innerHTML="";
    h2.innerHTML="";
    h4.innerHTML="";
    ingredientes.innerHTML="";

  
     if(pizzaseleccionada){
        const image = document.createElement("img");
        
        image.setAttribute("src", pizzaseleccionada.imagen)
        image.classList.add("imagen");
        imagen.appendChild(image)
        var h2text = document.createTextNode(pizzaseleccionada.nombre)
        
   
        var h4text = document.createTextNode(pizzaseleccionada.precio)
        h4.appendChild(h4text)

        var ingredientesText = document.createTextNode(pizzaseleccionada.ingredientes)
        ingredientes.appendChild(ingredientesText)


    }else{
        var h2text = document.createTextNode("error")
    }

    h2.appendChild(h2text)


})
