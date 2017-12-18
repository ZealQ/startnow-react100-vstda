import React, { Component } from 'react';
import { Todo } from "./todo";

let adcl = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: " ",
      priority: "0",
      todoList: []
    };
    // event handelers bound to the state
    this.handelChange = this.handelChange.bind(this);
    this.handelAddEvent = this.handelAddEvent.bind(this);
    this.deleteHandeler = this.deleteHandeler.bind(this);
    this.saveHandeler = this.saveHandeler.bind(this);
  }
  // will get the input of user
  handelChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value
    });
  }
  // will add when userer adds
  handelAddEvent(e) {
    e.preventDefault();
    adcl += 1;
    let todoList = this.state.todoList;
    let newListObj = this.createObject(this.state.text, this.state.priority, adcl);

    this.setState({
      text: "",
      todoList: todoList.concat(newListObj)
    });
    document.getElementById("form").reset();
  }
  // create newobj  for the todo lis arry

  createObject(txt, prty, key) {
    return [{
      id: key,
      text: txt,
      priority: prty,
      editEnabled: false

    }];
  }
  // deletes anything the user dose not want any more
  deleteHandeler(listItem) {
    // created an new let to equal the spred of to do list 
    // index is the newList, key is id,  splice index and 1 [splice, txt , txt]
    let newList = [...this.state.todoList];
    let index = newList.map(key => key.id).indexOf(listItem.id);
    newList.splice(index, 1)
    this.setState({
      todoList: newList
    });
  }
  // saves the items in the array will do same as delete but opisit in terms of  function
  saveHandeler(listItem) {
    let newList = [...this.state.todoList];
    let index = newList.map(key => key.id).indexOf(listItem.id);
    newList.splice(index, 1, listItem);
    this.setState({
      todoList: newList
    });
  }

  render() {
    return (
      // my container
      <div className="container-fluid">
        {/* tittle of the app */}
        <h2 className="white mt-3">Very Simple Todo App</h2>
        {/* subtittle */}
        <p className="white text-muted">Track Everything</p>
        {/* line that is uner tittles */}
        <hr />
        {/* the small box where user will do input and selest priority */}
        <div className="row">
          <div className="col-4">
            <div className="card">
              {/* header (tittle) */}
              <p className="card-header h6">
                Add New Todo
               </p>
              <div className="card-block">
                <form id="form">
                  <label htmlFor="create">
                    <strong>I Want To..</strong>
                  </label>
                  {/* user input area */}
                  <textarea
                    name="text"
                    id="create"
                    className="create-todo-text btn-block"
                    defaultValue={this.state.text}
                    onChange={this.handelChange}
                  />
                  {/* the priority selection */}
                  <label htmlFor="priority">
                    <strong>How much of a priority is this</strong>
                  </label>
                  <select
                    name="priority"
                    id="priority"
                    className="create-todo-priority btn-block"
                    placeholder="select priority"
                    defaultValue={this.state.priority}
                    onChange={this.handelChange}
                  >
                    <option value="0"hidden>Select A Priority</option>
                    <option value="3">High Priority</option>
                    <option value="2">Medium Priority</option>
                    <option value="1">Low Priority</option>
                  </select>
                </form>
              </div>
              {/* bottom of the box */}
              <div className="card-footer">
                {/* the Add button */}
                <button
                  name="submit"
                  type="button"
                  className="btn btn-success btn-block create-todo"
                  disabled={!this.state.text}
                  onClick={this.handelAddEvent}
                > Add </button>
              </div>
            </div>
          </div>
          {/* the main body after the user input */}
          <div className="col-8">
            <div className="card">
              <p className="card-header h6">View Todos</p>
              <div className="card-block no-padding pull-right">
                {
                  (this.state.todoList.lenght === 0) ?
                    (<div className="alert alert-info no margin">
                      <strong>Welcome To A Todo App</strong>
                      <br />
                      Get Stareted now by adding a new todo on the left.
                      </div>) :
                    (this.state.todoList.map(list => (
                      // Todo is a function pulled from another file
                      <Todo
                        // on save,delete,key,andtask are all from the Todo file
                        onDelete={this.deleteHandeler}
                        onSave={this.saveHandeler}
                        key={list.id}
                        task={list}
                      />)))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
