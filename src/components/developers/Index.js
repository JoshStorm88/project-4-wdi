import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class DevelopersIndex extends React.Component {

  constructor() {
    super();
    this.state = {
      developers: []
    };
  }

  componentDidMount() {
    axios({
      url: '/api/developers',
      method: 'GET'
    })
      .then(res => this.setState({ developers: res.data}));
  }

  render() {
    return (
      <div className="columns is-multiline">
        {this.state.developers.map(developer =>
          <div key={developer._id} className="column is-one-third-desktop is-half-tablet">
            <Link to={`/developers/${developer._id}`}>
              <div className="card">
                <div className="card-image">
                  <figure className="image is-square">
                    <img src={developer.image} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h2 className="title">{developer.companyName}</h2>
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

export default DevelopersIndex;
