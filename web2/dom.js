function cantidadcard() {

    var cantidad = document.getElementById("cant-card").value
    var producto = document.getElementById("productos").value

    var body = document.getElementById("cuerpo")
    var falsodiv = document.getElementById("gutter")
    body.removeChild(falsodiv)



    var cuerpo = document.getElementById("cuerpo")
    var gutter = document.createElement("div")
    gutter.id = "gutter"
    gutter.className = "container px-4 text-center"
    cuerpo.appendChild(gutter)


    var gutter = document.getElementById("gutter")
    var row = document.createElement("div")
    row.id = "row"
    row.className = "row gx-5"
    gutter.appendChild(row)


    for (var i = 0; i < cantidad; i++) {
        var row = document.getElementById("row")
        var col = document.createElement("div")
        col.id = "col" + i
        col.className = "col-4"
        col.innerHTML = ""
        row.appendChild(col)




        var col = document.getElementById("col" + i)
        var card = document.createElement("div")
        card.className="card"
        card.id= "card"+i
        card.innerHTML = ""
        col.appendChild(card)





        var card = document.getElementById("card" + i)
        var img = document.createElement("img")
        img.src = "/img/" + producto + i + ".jpg"
        img.className = "card-img-top"
        card.appendChild(img)





        var cardbody = document.createElement("div")
        cardbody.id = "cardbody" + i
        cardbody.className = "card-body"
        card.appendChild(cardbody)




        var cuerpocard = document.getElementById("cardbody" + i)
        var title = document.createElement("h5")
        title.className = "card-title"
        title.textContent = "titulo"
        cuerpocard.appendChild(title)




        var detalls = document.createElement("p")
        detalls.className = "card-text"
        detalls.textContent = "descripcion"
        cuerpocard.appendChild(detalls)




        var button = document.createElement("a")
        button.className = "btn btn-primary"
        button.textContent = "Ver "
    }
}