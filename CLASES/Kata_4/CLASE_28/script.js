function crear(){
    let nombre = document.getElementById('nombreAlumnoNuevo').value;
    let control = document.getElementById('controlAlumnoNuevo').value;
    let edad = document.getElementById('edadAlumnoNuevo').value;
    let semestre = document.getElementById('semestreAlumnoNuevo').value;

    crearAlumno(nombre, control, edad, semestre);
}

function crearAlumno(nombre, control, edad, semestre){
    const alumnoNuevo = {
        nombre: nombre,
        control: control,
        edad: edad,
        semestre: semestre
    };
    
    let postRequest = fetch(`https://crudcrud.com/api/ea99f38b982a4c7eb5d2252fd4e9268d/alumno`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(alumnoNuevo)
        }
    );

    postRequest.then((value) => {
        alert('Alumno creado');
        return value.json();
    }).then((valueJson) => {
        alert(JSON.stringify(valueJson));
    }).catch((errorValue) => {
        alert(errorValue);
    });
}

function buscar(){
    let idAlumno = document.getElementById('idAlumnoBuscar').value;
    
    buscarAlumno(idAlumno);
}

function buscarAlumno(idAlumno){
    let postRequest = fetch(`https://crudcrud.com/api/ea99f38b982a4c7eb5d2252fd4e9268d/alumno/${idAlumno}`,
        {
            method: 'GET'
        }
    );      

    postRequest.then((value) => {
        alert('Alumno encontrado');
        return value.json();
    }).then((valueJson) => {
        document.getElementById('nombreAlumnoRegistro').innerHTML = valueJson.nombre;
        document.getElementById('controlAlumnoRegistro').innerHTML = valueJson.control;
        document.getElementById('edadAlumnoRegistro').innerHTML = valueJson.edad;
        document.getElementById('semestreAlumnoRegistro').innerHTML = valueJson.semestre;
    }).catch((errorValue) => {
        alert('Alumno no encontrado');
    });
}

function actualizar(){
    let idAlumno = document.getElementById('idAlumnoActualizar').value;
    let nombre = document.getElementById('nombreAlumnoActualizado').value;
    let control = document.getElementById('controlAlumnoActualizado').value;
    let edad = document.getElementById('edadAlumnoActualizado').value;
    let semestre = document.getElementById('semestreAlumnoActualizado').value;

    actualizarAlumno(idAlumno, nombre, control, edad, semestre);
}

function actualizarAlumno(idAlumno){
    let postRequest = fetch(`https://crudcrud.com/api/ea99f38b982a4c7eb5d2252fd4e9268d/alumno/${idAlumno}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(idAlumno)
        }
    );
}

function borrar(){
    let idAlumno = document.getElementById('idAlumnoBorrar').value;
    borrarAlumno(idAlumno);
}

function borrarAlumno(idAlumno){
    let postRequest = fetch(`https://crudcrud.com/api/ea99f38b982a4c7eb5d2252fd4e9268d/alumno/${idAlumno}`,
        {
            method: 'DELETE'
        }
    );

    postRequest.then((value) => {
        alert('Alumno borrado');
        document.getElementById('nombreAlumnoRegistro').innerHTML = "-";
        document.getElementById('controlAlumnoRegistro').innerHTML = "-";
        document.getElementById('edadAlumnoRegistro').innerHTML = "-";
        document.getElementById('semestreAlumnoRegistro').innerHTML = "-";
    }).catch((errorValue) => {
        alert(errorValue);
    });
};