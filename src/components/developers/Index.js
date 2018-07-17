import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class DevelopersIndex extends React.Component {

  constructor() {
    super();
    this.state = {
      developers: [],
      sort: 'companyName|asc'
    };
  }

  componentDidMount() {
    axios.get('/api/developers')
      .then(res => this.setState({ developers: res.data}));
  }

  handleSearch = (e) => {
    this.setState({ search: e.target.value });
  }

  filteredDevelopers = (developers) => {
    const re = new RegExp(this.state.search, 'i');
    return developers.filter(developer => {
      return re.test(developer.companyName) || re.test(developer.skills);
    });
  }

  handleSort = (e) => {
    this.setState({ sort: e.target.value });
  }

  sortedDevelopers = (developers) => {
    const [ prop, dir ] = this.state.sort.split('|');
    return _.orderBy(developers, prop, dir);
  }

  sortedAndFilteredDevelopers = () => {
    const filtered = this.filteredDevelopers(this.state.developers);
    return this.sortedDevelopers(filtered);
  }

  render() {
    return (
      <section>

        <div className="filters">
          <p>Search our site..</p>
          <input className="input" placeholder="Search" onChange={this.handleSearch} />

          <div className="control">
            <div className="select is-half">
              <select onChange={this.handleSort}>
                <option value="companyName|asc">Name (A-Z)</option>
                <option value="companyName|desc">Name (Z-A)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="columns is-multiline">
          {this.sortedAndFilteredDevelopers().map(developer =>
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
                      <h2 className="showTitle">{developer.companyName}</h2>
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
