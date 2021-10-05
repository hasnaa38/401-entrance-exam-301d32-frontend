import React, { Component } from 'react'
import { Form, Button, Modal } from 'react-bootstrap';

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            likedWatches: [],
            editing: {
                title: this.props.watch.title,
                description:this.props.watch.description,
                price:this.props.watch.price,
                image:this.props.watch.image,
                email: this.props.email,
                id: this.props.watch._id,
            }
        }
    }
    changeTitle = (e) => {
        e.preventDefault();
        this.setState({
            editing: {
                title: e.target.value,
                description: this.state.editing.description,
                price:this.state.editing.price,
                image: this.state.editing.image,
                email: this.props.email,
                id: this.props.watch._id
            }
        });
    }
    changeDescription = (e) => {
        e.preventDefault();
        this.setState({
            editing: {
                title: this.state.editing.title,
                description: e.target.value,
                price:this.state.editing.price,
                image: this.state.editing.image,
                email: this.props.email,
                id: this.props.watch._id
            }
        });
    }
    changePrice = (e) => {
        e.preventDefault();
        this.setState({
            editing: {
                title: this.state.editing.title,
                description: this.state.editing.description,
                price:e.target.value,
                image: this.state.editing.image,
                email: this.props.email,
                id: this.props.watch._id
            }
        });
    }
    changeImage = (e) => {
        e.preventDefault();
        this.setState({
            editing: {
                title: this.state.editing.title,
                description: this.state.editing.description,
                price:this.state.editing.price,
                image: e.target.value,
                email: this.props.email,
                id: this.props.watch._id
            }
        });
    }
    render() {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={this.state.editing.title} onChange={(e)=>{this.changeTitle(e)}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" value={this.state.editing.description} onChange={(e)=>{this.changeDescription(e)}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" value={this.state.editing.price} onChange={(e)=>{this.changePrice(e)}}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" value={this.state.editing.image} onChange={(e)=>{this.changeImage(e)}}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e)=>{this.props.submitForEdit(e, this.state.editing)}}>Submit</Button>
            </Form>
        )
    }
}

export default EditForm
