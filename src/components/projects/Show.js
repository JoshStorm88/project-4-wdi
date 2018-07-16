import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';
// import Mailto from 'react-mailto';

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
      .then(() => this.props.history.push('/'));
  }

  handleSubmit = () => {

  }

  render() {
    return (
      <div className="columns">
        {this.state.project && <div className="column">
          <h2 className="title">Project Name: {this.state.project.projectName}</h2>
          <hr />

          <h3 className="title">Project Type: {this.state.project.projectSize}</h3>
          <hr />

          <h3 className="content">Project Brief: {this.state.project.projectBrief}</h3>

          <hr />

          <h3 className="title">Skills Required: {this.state.project.skillsRequired}</h3>

          <hr />
          <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
          <button className="button is-primary" onClick={this.handleSubmit}>Confirm Project</button>
          {/* <Mailto email="test@developer.com" obfuscate={true}>
            Email me!
          </Mailto> */}
        </div>}
      </div>
    );
  }
}

export default ProjectsShow;
