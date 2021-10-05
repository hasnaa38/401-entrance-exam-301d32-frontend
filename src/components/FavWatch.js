import React, { Component } from 'react'
import axios from 'axios';
import { Card, Col, Row, Button } from 'react-bootstrap';
class FavWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.email,
            likedWatches: [],
            showWatches: false,
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
    render() {
        return (
            <>
                <Row xs={3}>
                    {this.state.showWatches && this.state.likedWatches.map((watch, i) => {
                        return (<Col>
                            <Card key={i}>
                                <Card.Img variant="top" src={watch.image} />
                                <Card.Body>
                                    <Card.Title>{watch.title}</Card.Title>
                                    <Card.Text>Description: {watch.description}</Card.Text>
                                    <Card.Text>Price: {watch.price}</Card.Text>
                                    <Button variant="info" onClick={()=>{}}>Edit</Button> {' '}
                                    <Button variant="secondary" onClick={()=>{this.dislikeWatch(watch)}}>Dislike</Button>
                                </Card.Body>
                            </Card>
                        </Col>)
                    })}
                </Row>
            </>
        )
    }
}

export default FavWatch
