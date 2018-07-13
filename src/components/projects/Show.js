import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

class ProjectsShow extends React.Component {

  constructor() {
    super();
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
    if(this.state.error) return <h2 className="title is-2">{this.state.error}</h2>;
    if(!this.state.project) return <h2 className="title is-2">Loading...</h2>;
    return (
      <div className="columns">
        <div className="column is-half">
          <h2 className="title">Project Name: {this.state.project._id.projectName}</h2>
          <hr />

          <h3 className="title">Project Type: {this.state.project.data.projectSize}</h3>
          <hr />

          <p className="content">Project Brief: {this.state.project.data.projectBrief}</p>
          <hr />

          <h3 className="title">Skills Required: {this.state.project.data.skillsRequired}</h3>

          <hr />

          <p className="content">Project Brief: {this.state.project.projectBrief}</p>
        </div>
      </div>
    );
  }
}

export default ProjectsShow;
