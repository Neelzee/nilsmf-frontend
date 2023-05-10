import { NavBar } from "../navbar/Navbar";

// import Component from the react module
import React, { Component } from "react";
import axios from 'axios'; 

export class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            actitiveItem: {
                title: "",
                content: ""
            }
        };
    }

    // Called when the component is mounted?
    componentDidMount() {
        this.getLatestProject();
    }

    // Gets the latest project
    getLatestProject = () => {
        axios
            .get("http://localhost:8000/api/projects/")
            .then(res => this.setState({
                actitiveItem: {
                    title: res.data[0].title,
                    content: res.data[0].content,
                }
            }))
            .catch(err => console.log(err));
    };

    renderView = () => {
        return (
            <div>
                <h1>{this.state.actitiveItem.title}</h1>
                <p>{this.state.actitiveItem.content}</p>
            </div>
        );
    }

    render() {
        return (
            <div>
            <NavBar />
            <div className="main-content">
                {this.renderView()}
            </div>
        </div>
        );
    }
}
