import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

class ProjectsShow extends React.Component {

  constructor() {
    super();
    console.log('we go to jujus');
    this.state = {};
  }

  componentDidMount() {
    axios.get(`/api/projects/${this.props.match.params.id}`)
      .then(res => this.setState({ project: res.data }))
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

  render() {
    return (
      <div className="columns">
        <div className="column">
          <h2 className="title">Project Name: {this.state.projectName}</h2>
          <hr />

          <h3 className="title">Project Type: {this.state.projectSize}</h3>
          <hr />

          <p className="content">Project Brief: {this.state.projectBrief}</p>

          <hr />

          <h3 className="title">Skills Required: {this.state.skillsRequired}</h3>
        </div>
      </div>
    );
  }
}

export default ProjectsShow;
