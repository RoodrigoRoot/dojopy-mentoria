//alert('') //Funcion que muestra una ventana en el navegador

function nombre(){

        alert("Rodrigo")
        console.log('Rodrigo')
}

 document.getElementById('user').addEventListener('change', function(event){
                var user = document.getElementById('user').value
                //alert(user)
})

document.getElementById('user-form').addEventListener('submit', function(event){
        var user = document.getElementById('user').value
        alert("Bienvenido Usuario " + user)
})