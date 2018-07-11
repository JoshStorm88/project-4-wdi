import React from 'react';
// import axios from 'axios';
// import Auth from '../../lib/Auth';

class ProjectsNew extends React.Component {

  state = {};

  // componentDidMount() {
  //   axios({
  //     url: '/api/projects/new',
  //     method: 'GET'
  //   })
  //     .then(res => {
  //       const options = res.data.map(project => {
  //         return { value: project._id, label: project.name };
  //       });
  //
  //       this.setState({ options });
  //     });
  //
  // }
  //
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios({
  //     url: '/api/developers',
  //     method: 'POST',
  //     data: this.state,
  //     headers: { Authorization: `Bearer ${Auth.getToken()}` }
  //   })
  //     .then(() => this.props.history.push('/developers'))
  //     .catch(err => this.setState({ errors: err.response.data.errors}));
  // }

  render() {
    return (
      <div className="columns">
        <div className="column">
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="projectName">Project Name</label>
              <input className="input" name="projectName" placeholder="Project Name" onChange={this.handleChange}/>
            </div>
            <div className="field">
              <label className="projectType">Project Type</label>
              <input className="input" name="projectType" placeholder="Project Type" onChange={this.handleChange} />
            </div>
            <div className="field">
              <label className="projectBrief">Project Brief</label>
              <input className="input" name="projectBrief" placeholder="Project Brief" onChange={this.handleChange} />
            </div>
            <div className="field">
              <label className="skillsRequired">Skills Required</label>
              <input className="input" name="skillsRequired" placeholder="Skills Required" onChange={this.handleChange}/>
            </div>
            <button className="button">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}


export default ProjectsNew;
