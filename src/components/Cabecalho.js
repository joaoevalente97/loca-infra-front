import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { MdArchive, } from "react-icons/md";


const Cabecalho = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#items">&nbsp;<MdArchive/> LocaInfra</Navbar.Brand>
      <Nav classname="mr-auto"defaultActiveKey="#items">
        <Nav.Item>
          <Nav.Link href="#items">Itens</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}

export default Cabecalho