// import Component from the react module
import React, { Component } from "react";
import ProjectModal from "./components/AddProjectModal";
import axios from 'axios';
import "./App.css"

// create a class that extends the component
class App extends Component {

// add a constructor to take props
constructor(props) {
	super(props);
	
	// add the props here
	this.state = {
	
	// the viewCompleted prop represents the status
	// of the task. Set it to false by default
	viewCompleted: false,
	activeItem: {
		title: "",
		content: "",
		is_posted: false
	},
	
	// this list stores all the completed projects
	taskList: []
	};
}

// Add componentDidMount()
componentDidMount() {
	this.refreshList();
}


refreshList = () => {
	axios //Axios to send and receive HTTP requests
	.get("http://localhost:8000/api/projects/")
	.then(res => this.setState({ taskList: res.data }))
	.catch(err => console.log(err));
};

// this arrow function takes status as a parameter
// and changes the status of viewCompleted to true
// if the status is true, else changes it to false
displayCompleted = status => {
	if (status) {
	return this.setState({ viewCompleted: true });
	}
	return this.setState({ viewCompleted: false });
};

// this array function renders two spans that help control
// the set of items to be displayed(ie, completed or incomplete)
renderTabList = () => {
	return (
	<div className="my-5 tab-list">
		<span
		onClick={() => this.displayCompleted(true)}
		className={this.state.viewCompleted ? "active_posted" : "posted"}
		>
		Posted
			</span>
		<span
		onClick={() => this.displayCompleted(false)}
		className={this.state.viewCompleted ? "not_posted" : "active_not_posted"}
		>
		Not Posted
			</span>
	</div>
	);
};
// Main variable to render items on the screen
renderItems = () => {
	const { viewCompleted } = this.state;
	const newItems = this.state.taskList.filter(
	(item) => item.is_posted === viewCompleted
	);
	return newItems.map((item) => (
	<li
		key={item.id}
		className="list-group-item d-flex justify-content-between align-items-center"
	>
		<span
		className={`todo-title mr-2 ${
			this.state.viewCompleted ? "completed-todo" : ""
		}`}
		title={item.title}
		>
		<h3>{item.title}</h3>
		<p>{item.content}</p>
		</span>
		<span>
		<button
			onClick={() => this.editItem(item)}
			className="btn btn-secondary mr-2"
		>
			Edit
		</button>
		<button
			onClick={() => this.handleDelete(item)}
			className="btn btn-danger"
		>
			Delete
		</button>
		</span>
	</li>
	));
};

toggle = () => {
	//add this after modal creation
	this.setState({ modal: !this.state.modal });
};


// Submit an item
handleSubmit = (item) => {
	this.toggle();
	alert("save" + JSON.stringify(item));
	if (item.id) {
	// if old post to edit and submit
	axios
		.put(`http://localhost:8000/api/projects/${item.id}/`, item)
		.then((res) => this.refreshList());
	return;
	}
	// if new post to submit
	axios
	.post("http://localhost:8000/api/projects/", item)
	.then((res) => this.refreshList());
};

// Delete item
handleDelete = (item) => {
	alert("delete" + JSON.stringify(item));
	axios
	.delete(`http://localhost:8000/api/projects/${item.id}/`)
	.then((res) => this.refreshList());
};

// Create item
createItem = () => {
	const item = { title: "", content: "", is_posted: false };
	this.setState({ activeItem: item, modal: !this.state.modal });
};

//Edit item
editItem = (item) => {
	this.setState({ activeItem: item, modal: !this.state.modal });
};

// Start by visual effects to viewer
render() {
	return (
	<main className="content">
		<h1 className="text-success text-uppercase text-center my-4">
		nmf's projects
		</h1>
		<div className="row ">
		<div className="col-md-6 col-sm-10 mx-auto p-0 test">
			<div className="card p-3">
			<div className="">
				<button onClick={this.createItem} className="btn btn-info">
				Create new Project
				</button>
			</div>
			{this.renderTabList()}
			<ul className="list-group list-group-flush">
				{this.renderItems()}
			</ul>
			</div>
		</div>
		</div>
		{this.state.modal ? (
		<ProjectModal
			activeItem={this.state.activeItem}
			toggle={this.toggle}
			onSave={this.handleSubmit}
		/>
		) : null}
	</main>
	);
}
}
export default App;
