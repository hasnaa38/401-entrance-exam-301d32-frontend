import React, { Component } from 'react';
import axios from 'axios';
import { Card, Col, Row, Button } from 'react-bootstrap';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            watches: [],
            showWatches: false,
        }
    }

    componentDidMount = () => {
        axios.get(`${process.env.REACT_APP_HEROKU_SERVER}/api-data`).then(res => {
            this.setState({
                watches: res.data,
                showWatches: true,
            })
        })
    }

    likeWatch = (watch) => {
        let body = {
            ...watch,
            email: this.state.email
        }
        axios.post(`${process.env.REACT_APP_HEROKU_SERVER}/like`, body).then(res => {
            console.log(res.data);
        })
    }


    render() {
        return (
            <>
                <Row xs={3}>
                    {this.state.showWatches && this.state.watches.map((watch, i) => {
                        return (<Col>
                            <Card key={i}>
                                <Card.Img variant="top" src={watch.image} style={{
                                    "width": "400px",
                                    "height": "400px",
                                    "object- fit": "cover",
                                    "background-image":"url('https://image.made-in-china.com/2f0j00GsZQzwuEqfYb%E2%80%A6tches-Gold-Watches-Men-Wrist-Waterproof-Watch.jpg')"
                                }} />
                                <Card.Body>
                                    <Card.Title>{watch.title}</Card.Title>
                                    <Card.Text>Description: {watch.description}</Card.Text>
                                    <Card.Text>Price: {watch.price}</Card.Text>
                                    <Button variant="danger" onClick={() => { this.likeWatch(watch) }}>Like</Button>
                                </Card.Body>
                            </Card>
                        </Col>)
                    })}
                </Row>
            </>
        )
    }
}

export default Home
