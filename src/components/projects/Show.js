import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
import Flash from '../../lib/Flash';



class ProjectsShow extends React.Component {

  constructor() {
    super();
    console.log('we go to jujus');
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.match.params.id);
    axios.get(`/api/projects/${this.props.match.params.id}`)
      .then(res => this.setState({ project: res.data }, ()=> console.log(this.state)))
      .catch(err => this.setState({ error: err.message }));
  }

  handleDelete = () => {
    axios({
      url: `/api/projects/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/developers'));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    axios({
      url: `/api/developers/${this.props.match.params.id}`,
      method: 'POST'
    })
      .catch(() => {
        Flash.setMessage('primary', 'Your project is on its way to the developer!');
        this.props.history.replace('/developers');

      });

    console.log('Email Sent!');
  }

  render() {
    return (
      <div className="columns">
        {this.state.project && <div className="column">
          <h3 className="title">Project Name: <p>{this.state.project.projectName}</p></h3>
          <hr />

          <h3 className="title">Project Type: <p>{this.state.project.projectType}</p></h3>
          <hr />

          <h3 className="title">Project Brief: <p>{this.state.project.projectBrief}</p></h3>

          <hr />

          <h3 className="title">Skills Required: <p>{this.state.project.skillsRequired}</p></h3>

          <hr />
          <button className="button submitButton" onClick={this.handleDelete}>Cancel Project</button>
          <button className="button cancelButton" onClick={this.handleSubmit}>Send Project</button>
        </div>}
      </div>
    );
  }
}

export default ProjectsShow;
