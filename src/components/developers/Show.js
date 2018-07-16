import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';

class DevelopersShow extends React.Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    axios.get(`/api/developers/${this.props.match.params.id}`)
      .then(res => this.setState({ developer: res.data }))
      .catch(err => this.setState({ error: err.message }));
  }

  handleDelete = () => {
    axios({
      url: `/api/developers/${this.props.match.params.id}`,
      method: 'DELETE',
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/developers'));
  }

  render() {
    if(this.state.error) return <h2 className="title is-2">{this.state.error}</h2>;
    if(!this.state.developer) return <h2 className="title is-2">Loading...</h2>;
    return (
      <div className="columns">
        <div className="column is-half">
          <figure className="image">
            <img src={this.state.developer.image} />
          </figure>
        </div>
        <div className="column is-half">
          <h1 className="title">Company Name: {this.state.developer.companyName}</h1>
          <hr />

          <h3 className="title">Company Size: {this.state.developer.companySize}</h3>
          <hr />

          <h3 className="content">Description: {this.state.developer.description}</h3>
          <hr />

          <h3 className="title">Skills: {this.state.developer.skills}</h3>

          <h3 className="title">Telephone Number: {this.state.developer.telNumber}</h3>
          <h3 className="title">Email: {this.state.developer.email}</h3>

          <h3 className="title">Location: {this.state.developer.location}</h3>
          <hr />

          <Link className="button" to={`/developers/${this.state.developer._id}/edit`}>Edit</Link>
          <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
        </div>
      </div>
    );
  }
}

export default DevelopersShow;
