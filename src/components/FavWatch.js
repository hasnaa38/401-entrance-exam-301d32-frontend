import React, { Component } from 'react'
import axios from 'axios';
import { Card, Col, Row, Button, Modal } from 'react-bootstrap';
import EditForm from './EditForm';
class FavWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            likedWatches: [],
            showWatches: false,
            showModal: false,
            currentWatch: {}
        }
    }
    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_HEROKU_SERVER}/getLikes?email=${this.state.email}`).then(res => {
            this.setState({
                likedWatches: res.data,
                showWatches: true,
            })
        })
    }
    dislikeWatch = (watch) => {
        axios.delete(`${process.env.REACT_APP_HEROKU_SERVER}/dislike/${watch._id}?email=${this.state.email}`).then(res => {
            this.setState({
                likedWatches: res.data
            })
        })
    }
    submitForEdit = (e, body) => {
        e.preventDefault();
        axios.put(`${process.env.REACT_APP_HEROKU_SERVER}/edit/${this.state.currentWatch._id}?email=${this.state.email}`, body).then(res => {
            this.setState({
                likedWatches: res.data,
                showModal: false,
            })
        })
    }
    render() {
        return (
            <>
                <Row xs={3} style={{ "height": "400px"}}>
                    {this.state.showWatches && this.state.likedWatches.map((watch, i) => {
                        return (
                            <Col>
                                <Card key={i}>
                                    <Card.Img variant="top" src={watch.image} style={{
                                        "width": "400px",
                                        "height": "400px",
                                        "object- fit": "cover"}} />
                                    <Card.Body>
                                        <Card.Title>{watch.title}</Card.Title>
                                        <Card.Text>Description: {watch.description}</Card.Text>
                                        <Card.Text>Price: {watch.price}</Card.Text>
                                        <Button variant="info" onClick={() => { this.setState({ showModal: true, currentWatch: watch }) }}>Edit</Button> {' '}
                                        <Button variant="secondary" onClick={() => { this.dislikeWatch(watch) }}>Dislike</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                    <Modal
                        size="lg"
                        show={this.state.showModal}
                        onHide={() => this.setState({ showModal: false })}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-lg">Edit {this.state.currentWatch.title} Data</Modal.Title>
                        </Modal.Header>
                        <Modal.Body><EditForm submitForEdit={this.submitForEdit} email={this.state.email} watch={this.state.currentWatch} /></Modal.Body>
                    </Modal>

                </Row>
            </>
        )
    }
}

export default FavWatch
