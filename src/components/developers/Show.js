import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Auth from '../../lib/Auth';
import GoogleMap from '../common/GoogleMap';


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

  render() {
    if(this.state.error) return <h2 className="title is-2">{this.state.error}</h2>;
    if(!this.state.developer) return <h2 className="title is-2">Loading...</h2>;
    return (

      <div className="columns">
        <div className="column is-one-third">
          <figure className="image is-square">
            <img className="devImage" src={this.state.developer.image} />

          </figure>
          < hr />
          <Link className="button is-primary" to={'/projects/new'}>Contact this developer about a project</Link>
        </div>
        <div className="column is-two-thirds">

          <h1 className="title">Company Name: {this.state.developer.companyName}</h1>
          <hr />

          <h3 className="title">Company Size: {this.state.developer.companySize}</h3>
          <hr />

          <h1 className="title">Description:<p>{this.state.developer.description}</p></h1>
          <hr />

          <h3 className="title">Skills: {this.state.developer.skills}</h3>
          <hr />

          <h3 className="title">Telephone Number: {this.state.developer.telNumber}</h3>
          <hr />

          <h3 className="title">Email: {this.state.developer.email}</h3>
        
          <GoogleMap location={this.state.developer.location}/>

        </div>
      </div>
    );
  }
}

export default DevelopersShow;
