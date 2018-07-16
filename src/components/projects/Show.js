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
          {/* <Link className="button" to={`/projects/${this.state.project._id}/edit`}>Edit</Link> */}
          <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
        </div>}
      </div>
    );
  }
}

export default ProjectsShow;
