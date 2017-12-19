import React from "react";
// new component Todo
export class Todo extends React.Component {
    constructor(props) {
        super(props);
        // the state in the new component task (the output of the users input)
        this.state = props.task;
        // will allow to delete tasks(output user typed)
        this.handelDeleteTask = this.handelDeleteTask.bind(this);
        // allows output to be  edited
        this.handelEditTask = this.handelEditTask.bind(this);
        // will point to the select output and  get its value
        this.handelChange = this.handelChange.bind(this);
        // allows the changes to the out put to be saved
        this.handelSaveTask = this.handelSaveTask.bind(this);
        // handel functions
    }
    handelDeleteTask() {
        this.props.onDelete(this.state);
    }
    handelEditTask() {
        this.setState({ editEnabled: true });
    }
    handelChange(e) {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        });

    }
    handelSaveTask() {
        let save = this.state;
        save.editEnabled = false;
        this.setState({ save });
        this.props.onSave(this.state);
    }
// renders state and  handel functions
    render() {
        // alerts and the 3 types(colors included)
        let alert = {
            3: "alert-danger no margin",
            2: "alert-warning no margin",
            1: "alert-success no margin"
        };
        // alertA will show priority in the edit portion of the app
        let alertA = alert[this.state.priority];
        if (this.state.editEnabled === true) {
            return (
                // alerts for edit
                <div className={alertA} role="alert">
                    <label htmlFor="edit">
                        <strong>Description</strong>
                    </label>
                    {/* the area where the task will be edited */}
                    <textarea
                        name="text"
                        id="edit"
                        className="update-todo-text btn-block"
                        value={this.state.text}
                        onChange={this.handelChange}
                    />
                    <label htmlFor="priority">
                        <strong>Priority</strong>
                    </label>
                    {/* allows you to reselect and edit prioreity   */}
                    <select
                        name="priority"
                        id="priority"
                        className="update-todo-priority btn-block"
                        placeholder="select a priority"
                        value={this.state.priority}
                        onChange={this.handelChange}>
                        <option value="3">High Priority</option>
                        <option value="2">Medium Priority</option>
                        <option value="1">Low Priority</option>
                        {/* save button */}
                    </select>
                    <div className="mt-2">
                        <button
                            name="save"
                            id="buttonS"
                            type="button"
                            className="btn btn-success update-todo btn-block"
                            onClick={this.handelSaveTask}> Save
                        </button>
                    </div>
                </div>
            );
        }
        // second return that will create a checkbox,edit and delete button
        return (
            <div className="clearfix">
                <li className="success">
                    <div id="alert" className={alertA} role="alert">
                    {/* the checkbox */}
                        <input
                            id="checkbox"
                            type="checkbox"
                            aria-label="Checkbox for input"
                            className="strike-through"
                        />
                        <span><strong>{this.state.text}</strong></span>
                        <div
                            className="btn-group btn-group-sm float-right"
                            role="group">
                            {/* the edit button */}

                            <a
                                name="edit"
                                role="button"
                                className="edit-todo btn btn-secondary pull-right active"
                                aria-pressed="true"
                                onClick={this.handelEditTask}>
                                <i className="fa fa-magic fa-2x " aria-hidden="true"></i>

                            </a>
                            {/* the delete button */}
                            <a
                                name="delete"
                                role="button"
                                className="delete-todo btn btn-secondary pull-right active"
                                aria-pressed="true"
                                onClick={this.handelDeleteTask}>
                                <i className="fa fa-bomb fa-2x" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </li>
            </div>
        );
    }
}