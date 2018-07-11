import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class DevelopersIndex extends React.Component {

  constructor() {
    super();
    this.state = {
      developers: [],
      sort: 'name|asc'
    };
  }

  componentDidMount() {
    axios.get('/api/developers')
      .then(res => this.setState({ developers: res.data }));
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  }

  filteredDevelopers = (developers) => {
    const re = new RegExp(this.state.search, 'i');
    return developers.filter(developer => {
      return re.test(developer.name) || re.test(developer.crimes);
    });
  }

  handleSort = (e) => {
    this.setState({ sort: e.target.value});
  }

  sortedDevelopers = (developers) => {
    const [ prop, dir ] = this.state.sort.split('|');
    return _.orderBy(developers, prop, dir);
  }

  sortAndFilteredDevelopers = () => {
    const filtered = this.filteredDevelopers(this.state.developers);
    return this.sortedDevelopers(filtered);
  }

  render() {
    return (
      <section>

        <div className="filters">
          <input className="input" placeholder="Search" onChange={this.handleSearch} />
        </div>
        <div className="control">
          <div className="select is-fullwidth"/>
          <select className="select" onChange={this.handleSort}>
            <option value="name|asc"> Name (A-Z)</option>
            <option value="name|desc"> Name (Z-A)</option>
          </select>
        </div>

        <div className="columns is-multiline">
          {this.sortAndFilteredDevelopers().map(developer =>
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
                      <h2 className="title">{developer.name}</h2>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default DevelopersIndex;
