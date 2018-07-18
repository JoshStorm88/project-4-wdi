import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import Auth from '../../lib/Auth';
import GoogleMap from '../common/GoogleMap';
import Footer from '../common/Footer';


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

          <p className="">See below for {this.state.developer.companyName} most recent projects</p> 

          <img className="devPortfolio" src="https://richwp.com/wp-content/uploads/2013/07/handsome-portfolio-website.jpg"
            alt="Four Horsemen Development Platform"/>

          <img className="devPortfolio" src="http://cdn.instantshift.com/wp-content/uploads/2012/04/facpwdfi-04.jpg"
            alt="Four Horsemen Development Platform" />

          <img className="devPortfolio" src="http://www.onextrapixel.com/wp-content/uploads/2015/06/6-NewsTech.jpg"
            alt="Four Horsemen Development Platform" />

        </div>
        <div className="column is-two-thirds">

          <h1 className="title">Company Name: <p>{this.state.developer.companyName}</p></h1>
          <hr />

          <h1 className="title">Company Size: <p>{this.state.developer.companySize}</p></h1>
          <hr />

          <h1 className="title">Description:</h1><p>{this.state.developer.description}</p>
          <hr />

          <h1 className="title">Skills: <p className="skillsColor">{this.state.developer.skills}</p></h1>
          <hr />

          <h1 className="title">Telephone Number: {this.state.developer.telNumber}</h1>
          <hr />

          <h3 className="title">Email: <a href="mailto:somone@4horse-men.com">{this.state.developer.email}</a></h3>

          <GoogleMap location={this.state.developer.location} />

          <Footer />

        </div>
      </div>


    );
  }
}

export default DevelopersShow;
