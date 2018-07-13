import React from 'react';
import axios from 'axios';

class ProjectsEdit extends React.Component {

  state = {
    selectedOptions: [],
    errors: {}
  };

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  componentDidMount() {

    axios({
      url: '/api/projects',
      method: 'GET'
    })
      .then(res => {
        const options = res.data.map(project => {
          return { value: project._id, label: project.name };
        });

        const project = res.data.find(project => project._id === this.props.match.params.id);

        this.setState({ options, ...project });
      });
  }

  render() {
    return (
      <div className="columns">
        <div className="column">
        </div>
      </div>

    );
  }
}

export default ProjectsEdit;
