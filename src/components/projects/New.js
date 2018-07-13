import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';


class ProjectsNew extends React.Component {

  constructor(props) {
    super(props);

  }

  state = {
    errors: {}
  };

  componentDidMount() {
    axios({
      url: '/api/projects',
      method: 'GET'
    })
      .then(res => {
        const options = res.data.map(project => {
          return { value: project._id, label: project.name };
        });

        this.setState({ options });
      });
  }

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value }, ()=> console.log(this.state));
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: '/api/projects/',
      method: 'POST',
      data: this.state,
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })

      .then(project => this.props.history.push(`/projects/${project.data._id}`))
      .catch(err => this.setState({ errors: err.response.data.errors}))
      .then(project => console.log(project._id));
    // this.props.history.push(`/projects/${project._id}`));


    // .catch(err => this.setState({ errors: err.response.data.errors}));
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="projectName">Project Name</label>
              <input className="input" name="projectName" placeholder="Project Name"/>
            </div>
            <div className="field">
              <label className="projectType">Project Type</label>
              <input className="input" name="projectType" placeholder="Project Type" />
            </div>
            <div className="field">
              <label className="projectBrief">Project Brief</label>
              <input className="input" name="projectBrief" placeholder="Project Brief" />
            </div>
            <div className="field">
              <label className="skillsRequired">Skills Required</label>
              <input className="input" name="skillsRequired" placeholder="Skills Required"/>
            </div>
            <button className="button">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}


export default ProjectsNew;
