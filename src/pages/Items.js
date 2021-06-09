import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Toast from 'react-bootstrap/Toast'

import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { BACKEND } from '../constants'

import { MdModeEdit, MdDelete, MdAssignmentTurnedIn } from 'react-icons/md'
import { FormControl } from 'react-bootstrap'

const Items = () => {
    const valorInicial = { x: '', descricao: '', quantidade: '', locacao: '' }

    const [item, setItem] = useState(valorInicial)
    const [items, setItems] = useState([])
    const [carregandoItems, setCarregandoItems] = useState(false)
    const [confirmaExclusao, setConfirmaExclusao] = useState(false)
    const [erros, setErros] = useState({})
    

    const { x, descricao, quantidade, locacao } = item

    //Funções
    async function obterItems() {
        setCarregandoItems(true) //Só para carregar a bolinha de loading
        let url = `${BACKEND}/items`
        await fetch(url)
            .then(response => response.json())
            .then(data => {
                setItems(data)
                console.log(data)
            })
            .catch(function (error) {
                console.error(`Erro ao obter os itens: ${error.message}`)
            })
        setCarregandoItems(false)
    }

    useEffect(() => {
        document.title = 'LocaInfra - Items'
        obterItems()
    }, [])

    const alteraDadosItem = e => {
        setItem({ ...item, [e.target.name]: e.target.value })
        setErros({})
    }

    const editaItem = (edit, item) => {
        if (edit) {
            document.getElementById(`${item._id}x`).removeAttribute('readonly')
            document.getElementById(`${item._id}descricao`).removeAttribute('readonly')
            document.getElementById(`${item._id}quantidade`).removeAttribute('readonly')
            document.getElementById(`${item._id}locacao`).removeAttribute('readonly')
            document.getElementById(`${item._id}edit`).setAttribute('hidden', true)
            document.getElementById(`${item._id}save`).removeAttribute('hidden')
        }else{
            document.getElementById(`${item._id}x`).setAttribute('readonly', true)
            document.getElementById(`${item._id}descricao`).setAttribute('readonly', true)
            document.getElementById(`${item._id}quantidade`).setAttribute('readonly', true)
            document.getElementById(`${item._id}locacao`).setAttribute('readonly', true)
            document.getElementById(`${item._id}edit`).removeAttribute('hidden')
            document.getElementById(`${item._id}save`).setAttribute('hidden', true)
        }
    }


    return (
        <Container fluid className="p-0">
            <Cabecalho />
            <Table striped bordered hover>
                <thead>
                    <tr className="bg-warning text-dark">
                        <th>X</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Locação</th>
                        <th>Opções</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item._id}>
                            <td className="col-1">
                                <Form.Control id={`${item._id}x`}
                                    name="1"
                                    onChange={alteraDadosItem}
                                    value={item.x}
                                    isInvalid={!!erros.x}
                                    readOnly
                                    onChange={event => setItem(event.target.value)}
                                />
                            </td>
                            <td>
                                <Form.Control id={`${item._id}descricao`}
                                    name="descricao"
                                    onChange={alteraDadosItem}
                                    value={item.descricao}
                                    isInvalid={!!erros.descricao}
                                    readOnly
                                />
                            </td>
                            <td className="col-1">
                                <Form.Control id={`${item._id}quantidade`}
                                    name="quantidade"
                                    onChange={alteraDadosItem}
                                    value={item.quantidade}
                                    isInvalid={!!erros.quantidade}
                                    readOnly
                                />
                            </td>
                            <td className="col-1">
                                <Form.Control id={`${item._id}locacao`}
                                    name="locacao"
                                    onChange={alteraDadosItem}
                                    value={item.locacao}
                                    isInvalid={!!erros.locacao}
                                    readOnly
                                />
                            </td>
                            <td className="col-1">
                                <Button id={`${item._id}edit`} className="mx-1" variant="outline-primary" title="Editar o registro"
                                    onClick={() => editaItem(true, item)}>
                                    <MdModeEdit />
                                </Button>
                                <Button id={`${item._id}save`} className="mx-1" variant ='outline-success' title="Salva o registro"
                                    onClick={() => editaItem(false, item)} hidden>
                                     <MdAssignmentTurnedIn/>   
                                    </Button>
                                            
                                    <Button className="mx-1" variant="outline-danger" title="Apagar o registro"
                                    onClick={() => {
                                        setItem(item)
                                        setConfirmaExclusao(true)
                                    }} >
                                    <MdDelete />
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Row className="justify-content-md-center">
                <Button className="col-2" variant="primary" type="submit" title="Novo" href="#cadastra-items">
                    Novo
                </Button>
            </Row>

            <Rodape />
        </Container>
    )
}

export default Items