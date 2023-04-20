

export default function NavBar() {


  return (
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" style={{'backgroundColor': 'dodgerblue'}}>

            <header className="mb-auto" >
                
                    <h6 style={{color: "white"}} className="float-md-start mb-0 text-center"><br/>Salud en Casa</h6>
                    <nav className="nav nav-masthead justify-content-center float-md-end">
                        <a style={{color: "white"}} className="nav-link fw-bold py-3 px-4 active" aria-current="page" href="dashBoard">Home</a> 
                        <a style={{color: "white"}} className="nav-link fw-bold py-3 px-4" href="solicitarCita">Solicitar Cita</a>
                        <a style={{color: "white"}} className="nav-link fw-bold py-3 px-4" href="verCitas">Ver Citas</a>
                        <a style={{color: "white"}} className="nav-link fw-bold py-3 px-4" href="formulasMedicas">Formula Medica</a>
                        <a style={{color: "white"}} className="nav-link fw-bold py-3 px-4" href="historialClinico">Historial Clinico</a>
                        <div className="d-grid gap-5 d-sm-flex py-2 px-5">
                        </div>
                    </nav>
               
            </header>
        </div>
  )
}