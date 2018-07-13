import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import _ from 'lodash';


class ProjectsIndex extends React.Component {

  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios({
      url: '/api/projects',
      method: 'GET'
    })
      .then(res => this.setState({ projects: res.data}));
  }

  render() {
    return (
      <div className="columns is-multiline">
        {this.state.projects.map(project =>
          <div key={project._id} className="column is-one-third-desktop is-half-tablet">
            <Link to={`/projects/${project._id}`}>
              <div className="card">
                <div className="card-content">
                  <div className="content">
                    <h2 className="title">{project.projectName}</h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default ProjectsIndex;
