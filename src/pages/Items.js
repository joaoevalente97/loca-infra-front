import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Toast from 'react-bootstrap/Toast'
import Cabecalho from '../components/Cabecalho'
import Rodape from '../components/Rodape'
import { BACKEND } from '../constants'
import { MdModeEdit, MdDelete } from 'react-icons/md'
import { FormControl } from 'react-bootstrap'

const Items = () => {
    const valorInicial = { x: '', descricao: '', quantidade: '', locacao: '' }
    const [item, setItem] = useState(valorInicial)
    const [items, setItems] = useState([])
    const [confirmaEdicao, setConfirmaEdicao] = useState(false)
    const [confirmaExclusao, setConfirmaExclusao] = useState(false)
    const [erros, setErros] = useState({})
    const [aviso, setAviso] = useState('')
    const { x, descricao, quantidade, locacao } = item

    //FUNÇÕES
    useEffect(() => {
        document.title = 'LocaInfra - Items'
        obterItems()
    }, [])

    async function obterItems() {
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
    }

    const alteraDadosItem = e => {
        setItem({ ...item, [e.target.name]: e.target.value })
        setErros({})
    }

    async function salvarItem(e) {
        e.preventDefault() // evita que a página seja recarregada
        const metodo = item.hasOwnProperty('_id') ? 'PUT' : 'POST'
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
                setItem(valorInicial) //limpa os campos
                obterItems()
            }).catch(function (error) {
                console.error(`Erro ao salvar o item: ${error.message}`)
            })
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
                                {item.x}
                            </td>
                            <td>
                                {item.descricao}
                            </td>
                            <td className="col-1">
                                {item.quantidade}
                            </td>
                            <td className="col-1">
                                {item.locacao}
                            </td>
                            <td className="col-1">
                                <Button className="mx-1" variant="outline-primary" title="Editar o registro"
                                    onClick={() => {
                                        setItem(item)
                                        setConfirmaEdicao(true)
                                    }}>
                                    <MdModeEdit />
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
                <Button className="col-2" variant="primary" type="submit" title="Novo" onClick={() => {
                    setItem(valorInicial)
                    setConfirmaEdicao(true)
                }}>
                    Novo
                </Button>
            </Row>
            <Modal animation={false} show={confirmaEdicao} onHide={() => setConfirmaEdicao(false)}>
                <Modal.Header>
                    <Modal.Title>Edição</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="x">
                            <Form.Label>X</Form.Label>
                            <FormControl
                                name="x"
                                placeHolder="Min 3 dig."
                                onChange={alteraDadosItem}
                                value={x}
                                isInvalid={!!erros.x}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {erros.x}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="quantidade">
                            <Form.Label>Quantidade</Form.Label>
                            <Form.Control
                                name="quantidade"
                                type="number"
                                placeholder="Maior que 0"
                                onChange={alteraDadosItem}
                                value={quantidade}
                                isInvalid={!!erros.quantidade}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {erros.quantidade}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} controlId="locacao">
                            <Form.Label>Locação</Form.Label>
                            <Form.Control
                                name="locacao"
                                placeholder="Min 3 dig."
                                onChange={alteraDadosItem}
                                value={locacao}
                                isInvalid={!!erros.locacao}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {erros.locacao}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="descricao">
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control
                                name="descricao"
                                placeholder="Min 5 dig."
                                onChange={alteraDadosItem}
                                value={descricao}
                                isInvalid={!!erros.descricao}
                            />
                            <Form.Control.Feedback type='invalid'>
                                {erros.descricao}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => setConfirmaEdicao(!confirmaEdicao)}>
                        ❌Cancelar
                            </Button>
                    <Button variant="success" disabled={x.length  < 3 || descricao.length  < 5 || quantidade  < 0 || locacao.length < 3}
                        onClick={(e) => {
                            setConfirmaEdicao(!confirmaEdicao)
                            salvarItem(e)
                        }}>
                        ✔️Confirmar
                            </Button>
                </Modal.Footer>
            </Modal>
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
                delay={2000}
                autohide
                className="bg-success"
                style={{
                    position: 'absolute',
                    top: 10,
                    right: 10
                }}>
                <Toast.Header >Aviso</Toast.Header>
                <Toast.Body >{aviso}</Toast.Body>
            </Toast>
            <Rodape />
        </Container >
    )
}

export default Items