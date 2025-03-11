

// Definimos una función asincrónica (que usará await)
async function obtenerPersonaje(id) {
    const url = `https://dragonball-api.com/api/characters/${id}`;

    try {
        // Hacemos la petición y esperamos la respuesta
        const respuesta = await fetch(url, {
            method: 'GET',
            headers: { 'accept': '/' }
        });

        // Comprobamos si la respuesta es correcta
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }

        // Convertimos la respuesta a JSON (esto también es asíncrono)
        const personaje = await respuesta.json();

        const elementId = personaje.name;
        // console.log(elementId);


        const valor = personaje.transformations;




        // Mostramos el personaje en consola
        console.log('Personaje obtenido:', personaje);

        for (const clave in personaje) {
            //acceder al arreglo correspondiente a la propiedad actual
            const items = personaje[clave];
            // console.log(personaje.name);

            let nombre = personaje.name;
            let ki = personaje.ki;
            let descripcion = personaje.description;
            let texto =descripcion.substring(0, 200) + '...';

            const descripcionC = document.querySelector('.descripcion');
            descripcionC.textContent = texto;

            const kiC = document.querySelector('.ki');
            kiC.textContent = ki;

            // console.log(nombre);

            let contenidoT =document.querySelector('#contenidoT');
            contenidoT.innerHTML = "";
            //verificar si la propiedad es un arreglo
            if (Array.isArray(items)) {
                //iterar sobre los elementos del arreglo
                items.forEach((item) => {
                    // console.log(item.name);
                    console.log(item.image);
                    console.log(item.ki);

                    let nombreTrasformacion = item.name;
                    let kiT = item.ki;
                    let imageT = item.image

                    const nombreT = document.createElement('h3');
                    const kiTr = document.createElement('h3');
                    const imageTr = document.createElement('img');

                    nombreT.textContent = nombreTrasformacion;
                    kiTr.textContent = kiT;
                    imageTr.src = imageT;

                    contenidoT.appendChild(nombreT);
                    contenidoT.appendChild(kiTr);
                    contenidoT.appendChild(imageTr);
                    
                    


                    console.log(nombreTrasformacion);


                    
                });
            }else if( typeof items === 'object'){
                // console.log('Objeto encontrado');
                // console.log(items);

                for(const bandera in items){
                    if(bandera == 'name'){
                    console.log(`Planeta Origen: ${items[bandera]}`);

                    const origen = document.querySelector('.origen');
                    origen.textContent = `Planeta Origen: ${items[bandera]}`;
                    }else{
                        false;
                    }
                }

            }
             else {
                console.log(`${clave}: ${personaje[clave]}`);
            };
        }

        const imagenC = document.querySelector('.imagenC');
        const nombreC = document.querySelector('.nombre');
        
        
        

        imagenC.src = personaje.image;
        nombreC.textContent = personaje.name;
        








        return personaje;


    } catch (error) {
        console.error('Error al obtener el personaje:', error.message);
    }

};





    



// Ejecutamos la función (puede ser desde un botón, un evento o directamente)

n = 1;
 function valor (){
    
    n++;
    if(n >= 44){
        const avanzar = document.querySelector('#avanzar');
        avanzar.disabled = true;
        avanzar.style.backgroundColor = 'grey';
    }else{
        retroceder.disabled = false;
        retroceder.style.backgroundColor = '#198754';
    }
    obtenerPersonaje(n);
};


function valorNegativo (){
    
    n--;
    if(n <= 0){
        const retroceder = document.querySelector('#retroceder');
        retroceder.disabled = true;
        retroceder.style.backgroundColor = 'grey';
    }else{
        avanzar.disabled = false;
        avanzar.style.backgroundColor = '#0d6efd';
        }
    obtenerPersonaje(n);
};

obtenerPersonaje(n);