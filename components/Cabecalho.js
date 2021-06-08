import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'


const Cabecalho = () => {
    return (
<Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#inicio">LocaInfra</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#inicio">Estoque</Nav.Link>
      <DropdownButton 
        as={ButtonGroup}
        menuAlign={{ lg: 'right'}}
        title="Cadastros"
        id="cadastros">
            <Dropdown.Item eventKey="1" href="#/items">Itens</Dropdown.Item>
            <Dropdown.Item eventKey="2" href="#/locacao">Locação</Dropdown.Item>
        </DropdownButton>
    </Nav>
  </Navbar>
    )
}

export default Cabecalho