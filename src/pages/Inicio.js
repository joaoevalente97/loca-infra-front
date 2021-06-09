import React, { useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'

const Inicio = () => {

    useEffect(() => {
        document.title = 'LocaInfra - Início'
    }, [])

    return (
        <>
            <Container fluid className="p-0">
                <Cabecalho />
                <Row className="justify-content-md-center">

                    <Jumbotron className="">
                        <h1>Olá</h1>
                        <p>
                            Esse é um software desenvolvido para controle de estoque de materias em locações.
                        </p>

                    </Jumbotron>
                </Row>
                <Rodape />
            </Container>
        </>
    )
}

export default Inicio