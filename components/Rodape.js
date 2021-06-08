import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

const Rodape = () => {
    return (
<Navbar bg="dark" fixed="bottom">
    <Navbar.Brand href="#inicio" className="text-light">
        <MdLocalPizza/> LocaInfra &tm; - Todos os direitos reservados
    </Navbar.Brand>
</Navbar>
    )
}

export default Rodape