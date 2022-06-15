const bd =[
    {"Id":0,"Apellido":"Apellido: Lopez", "Nombre":"Nombre: Luis", "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: B", "Cedula":"Cedula: 1314745835","Direccion":"Direccion: Los Esteros", "Telefono": "Telefono: 0969872522",
    "Correo":"Correo: luislopez_09@outlook.es"},

    {"Id":1,"Apellido":"Apellido: Santana", "Nombre":"Nombre: Carlos", "Semestre": "Semestre: Cuarto", 
    "Paralelo":" Paralelo: A", "Cedula":"Cedula: 1319862896", "Direccion":"Direccion: Montecristi", "Telefono": "Telefono: 0987596214",
    "Correo":"Correo: carlos.89@gmail.com"},

    {"Id":2,"Apellido":"Apellido: Parrales", "Nombre":"Nombre: Cristina", "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: B", "Cedula":"Cedula: 1317144925","Direccion":"Direccion: La Aurora", "Telefono": "Telefono: 0963698741",
    "Correo":"Correo: cris-parr.65@gmail.com"},

    {"Id":3,"Apellido":"Apellido: Macias", "Nombre":"Nombre: Yandri", "Semestre": "Semestre: Cuarto", 
    "Paralelo":" Paralelo: B", "Cedula":"Cedula: 1314584986","Direccion":"Direccion: Colorado", "Telefono": "Telefono: 0968587848",
    "Correo":"Correo: yan_macias@gmail.com"},

    {"Id":4,"Apellido":"Apellido: Delgado", "Nombre":"Nombre: Julio", "Semestre": "Semestre: Primero", 
    "Paralelo":" Paralelo: A", "Cedula":"Cedula: 1317144146","Direccion":"Direccion: La Aurora", "Telefono": "Telefono: 0968581680",
    "Correo":"Correo: jul-delg@gmail.com"},

    {"Id":5,"Apellido":"Apellido: Lopez", "Nombre":"Nombre: Britney", "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: B", "Cedula":"Cedula: 1317121986","Direccion":"Direccion: Cuba", "Telefono": "Telefono: 099423545",
    "Correo":"Correo: brit-lopez.43@gmail.com"},
    
    {"Id":6,"Apellido":"Apellido: Burgos", "Nombre":"Nombre: Odalis", "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: C", "Cedula":"Cedula: 1317143586","Direccion":"Direccion: El Palmar", "Telefono": "Telefono: 091245887",
    "Correo":"Correo: odalis-burg@gmail.com"},

    {"Id":7,"Apellido":"Apellido: Bravo", "Nombre":"Nombre: Milena", "Semestre": "Semestre: Quinto", 
    "Paralelo":" Paralelo: A", "Cedula":"Cedula: 13171447894","Direccion":"Direccion: Los Geranios", "Telefono": "Telefono: 0987569423",
    "Correo":"Correo: milu-brv@gmail.com"},

    {"Id":8,"Apellido":"Apellido: Velez", "Nombre":"Nombre: Hernan", "Semestre": "Semestre: Sexto", 
    "Paralelo":" Paralelo: A", "Cedula":"Cedula: 1317144236","Direccion":"Direccion: Las Cumbres", "Telefono": "Telefono: 0987469621",
    "Correo":"hernan-velez@gmail.com"},
    
    {"Id":9,"Apellido":"Apellido: Mero", "Nombre":"Nombre: Ana", "Semestre": "Semestre: Segundo", 
    "Paralelo":" Paralelo: A", "Cedula":"Cedula: 1317578686","Direccion":"Direccion: 20 de Mayo", "Telefono": "Telefono: 0998305687",
    "Correo":"Correo: ana-mero@gmail.com"},
]

const estudiantes = document.querySelectorAll('.nom_estudiante');

estudiantes.forEach((estudiante)=>{
    estudiante.addEventListener('click', (nombre)=>{
        let id=nombre.target.getAttribute('estu-id');
        bd.forEach((estudiante)=>{
            if(id == estudiante.Id){
                const verDetalle=nombre.target.parentElement.lastElementChild;
                verDetalle.innerHTML=`
                                    <div class="lista"
                                        <div class="nom">
                                        <h2>Datos del estudiante:</h2>
                                        <h2 class="list-inline-item footer-menu"><a class="nav-link" style="color:#000000" href="index.html"> REGRESAR</a></h2>
                                        <p>${estudiante.Nombre}</p>
                                        <p>${estudiante.Apellido}</p>
                                        <p>${estudiante.Correo}</p>
                                        <p>${estudiante.Telefono}</p>
                                        <p>${estudiante.Cedula}</p>
                                        <p>${estudiante.Direccion}</p>
                                        <p>${estudiante.Semestre}</p>
                                        <p>${estudiante.Paralelo}</p>
                                        </div> 
                                    </div>`

            }
        })
    })
})

