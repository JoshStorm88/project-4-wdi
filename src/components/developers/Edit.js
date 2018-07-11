import React from 'react';
import axios from 'axios';
import Auth from '../../lib/Auth';

import DevelopersForm from './Form';

class DevelopersEdit extends React.Component {

  state = {
    selectedOptions: [],
    errors: {}
  };

  handleChange = ({ target: { name, value }}) => {
    this.setState({ [name]: value });
  }

  componentDidMount() {

    axios({
      url: '/api/developers',
      method: 'GET'
    })
      .then(res => {
        const options = res.data.map(developer => {
          return { value: developer._id, label: developer.name };
        });

        const developer = res.data.find(developer => developer._id === this.props.match.params.id);

        this.setState({ options, ...developer });
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios({
      url: `/api/developers/${this.props.match.params.id}`,
      method: 'PUT',
      data: this.state,
      headers: {Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/developers'))
      .catch(err => this.setState({ errors: err.response.data.errors}));
  }

  render() {
    return (
      <DevelopersForm
        handleSelectChange={this.handleSelectChange}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        data={this.state}
      />
    );
  }
}

export default DevelopersEdit;
