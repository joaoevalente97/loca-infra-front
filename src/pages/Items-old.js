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

import { MdRestaurantMenu, MdWeb, MdSave, MdModeEdit, MdDelete, MdCancel } from 'react-icons/md'

const Items = () => {
    const valorInicial = { x: '', descricao: '', quantidade: '', locacao: '' }

    const [item, setItem] = useState(valorInicial)
    const [items, setItems] = useState([])
    const [carregandoItems, setCarregandoItems] = useState(false)
    const [salvandoItems, setSalvandoItems] = useState(valorInicial)
    const [confirmaExclusao, setConfirmaExclusao] = useState(false)

    const [aviso, setAviso] = useState('')
    const [erros, setErros] = useState({})
    const { x, descricao, quantidade, locacao } = item

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

    async function salvarItem(e) {
        e.preventDefault() // evita que a página seja recarregada  
        // const novosErros = validaErrosItem()
        // //Existe algum erro no array?
        // if (Object.keys(novosErros).length > 0) {
        //     //Sim, temos erros!
        //     setErros(novosErros)
        // } else {
        const metodo = item.hasOwnProperty('_id') ? 'PUT' : 'POST'
        // item.status = (item.status === true || item.status === 'ativo') ? 'ativo' : 'inativo'
        setSalvandoItems(true)
        let url = `${BACKEND}/items`
        await fetch(url, {
            method: metodo,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then(response => response.json())
            .then(data => {
                (data._id || data.message) ? setAviso('Registro salvo com sucesso') : setAviso('')
                setItem(valorInicial) //limpa a tela
                obterItems()
            }).catch(function (error) {
                console.error(`Erro ao salvar a item: ${error.message}`)
            })
        setSalvandoItems(false)
        // }
    }

    async function excluirItem() {
        let url = `${BACKEND}/items/${item._id}`
        await fetch(url, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
            .then(data => {
                data.message ? setAviso(data.message) : setAviso('')
                setItem(valorInicial)
                obterItems()
            })
            .catch(function (error) {
                console.error(`Erro ao excluir a item: ${error.message}`)
            })
    }
    return (
        <>
            <Container fluid className="p-0">
                <Cabecalho />
                <Row className="bg-info text-light">
                    <Col>
                        <h3><MdRestaurantMenu /> Items de Restaurantes</h3>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} lg={6}>
                        {/* Formulário das Items */}
                        <h4>Novo Item</h4>
                        <Form method="post">
                            <Form.Row>
                                <Col sm="2">

                                    <Form.Group controlId="x">
                                        <Form.Label>X</Form.Label>
                                        <Form.Control
                                            name="x"
                                            placeholder="Ex: 300040"
                                            onChange={alteraDadosItem}
                                            value={x}
                                            isInvalid={!!erros.x}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            {erros.x}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                </Col>
                                <Col sm="2">

                                    <Form.Group as={Col} controlId="quantidade">
                                        <Form.Label>Quantidade</Form.Label>

                                        <Form.Control
                                            type="number"
                                            name="quantidade"
                                            onChange={alteraDadosItem}
                                            value={quantidade}
                                            isInvalid={!!erros.quantidade}
                                        />
                                        <Form.Control.Feedback type='invalid'>
                                            {erros.quantidade}
                                        </Form.Control.Feedback>

                                    </Form.Group>
                                </Col>

                                <Form.Group as={Col} controlId="locacao">
                                    <Form.Label>Locação</Form.Label>
                                    <Form.Control
                                        name="locacao"
                                        onChange={alteraDadosItem}
                                        value={locacao}
                                        isInvalid={!!erros.locacao}
                                    />
                                    <Form.Control.Feedback type='invalid'>
                                        {erros.locacao}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="descricao">
                                <Form.Label>Descrição</Form.Label>
                                <Form.Control
                                    name="descricao"
                                    placeholder="Ex: Switch"
                                    onChange={alteraDadosItem}
                                    value={descricao}
                                    isInvalid={!!erros.descricao}
                                />
                                <Form.Control.Feedback type='invalid'>
                                    {erros.descricao}
                                </Form.Control.Feedback>
                            </Form.Group>
                            &nbsp;
                            <Button variant="primary" type="submit" title="Salvar o registro"
                                onClick={(e) => salvarItem(e)}>
                                {salvandoItems
                                    ? <Spinner animation="border" size="sm" />
                                    : <MdSave />
                                }
                                Salvar
                            </Button>
                            &nbsp;
                            <Button variant="danger" type="button" title="Cancelar"
                                onClick={() => setItem(valorInicial)}>
                                <MdCancel /> Cancelar
                            </Button>
                        </Form>
                    </Col>
                    <Col xs={12} lg={6}>
                        {/* Listagem das Items */}
                        {carregandoItems &&
                            <>
                                <Spinner animation="border" size="sm" />
                                <Spinner animation="grow" variant="info" />
                                <p>Aguarde, enquanto as items são carregadas...</p>
                            </>
                        }
                        <Table striped bordered hover>
                            <thead>
                                <tr className="bg-warning text-dark">
                                    <th>Nome</th>
                                    <th>Status</th>
                                    <th>Inclusão</th>
                                    <th>Opções</th>
                                </tr>
                            </thead>
                            <tbody>
                                {items.map(item => (
                                    <tr key={item._id}>
                                        <td>{item.nome}</td>
                                        <td>{item.status}</td>
                                        <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            <Button variant="outline-primary" title="Editar o registro"
                                                onClick={() => setItem(item)}>
                                                <MdModeEdit />
                                            </Button>
                                            &nbsp;
                                            <Button variant="outline-danger" title="Apagar o registro"
                                                onClick={() => {
                                                    setItem(item)
                                                    setConfirmaExclusao(true)
                                                }} >
                                                <MdDelete />
                                            </Button>
                                        </td>
                                    </tr>
                                ))}
                                <tr className="bg-dark text-light">
                                    <td colspan="3">Total de Registros:</td>
                                    <td>{items.length}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Modal animation={false} show={confirmaExclusao} onHide={() => setConfirmaExclusao(false)}>
                    <Modal.Header>
                        <Modal.Title>Confirmação da Exclusão</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Confirma a exclusão da item selecionada?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => setConfirmaExclusao(!confirmaExclusao)}>
                            ❌Cancelar
                            </Button>
                        <Button variant="success"
                            onClick={() => {
                                setConfirmaExclusao(!confirmaExclusao)
                                excluirItem()
                            }}>
                            ✔️Confirmar
                            </Button>
                    </Modal.Footer>
                </Modal>

                <Toast
                    onClose={() => setAviso('')}
                    show={aviso.length > 0}
                    animation={false}
                    delay={4000}
                    autohide
                    className="bg-success"
                    style={{
                        position: 'absolute',
                        top: 10,
                        right: 10
                    }}>
                    <Toast.Header>Aviso</Toast.Header>
                    <Toast.Body classname="text-light">{aviso}</Toast.Body>
                </Toast>

                <Rodape />
            </Container>
        </>
    )

}

export default Items