import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
const api =
    'https://webhooks.mongodb-stitch.com/api/client/v2.0/app/ruhacksapp-uspdy/service/http/incoming_webhook/getter';
export default class app extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count1: 0,
            count2: 0,
            count3: 0
        };
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const response = await axios.get(api);
        this.setState({
            count1: response.data[1]['currentPopulation'],
            count2: response.data[3]['numEnter'],
            count3: response.data[0]['numExit']
        });
    };
    render() {
        return (
            <div className="part2">
                <h1>People Counter</h1>
                <h3>Number of People in Store</h3>
                <h3>{this.state.count1}</h3>
                <h3>Number of People Entered</h3>
                <h3>{this.state.count2}</h3>
                <h3>Number of People Exited</h3>
                <h3>{this.state.count3}</h3>
            </div>
        );
    }
}
