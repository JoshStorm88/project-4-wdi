/* global describe, it, beforeEach, before, after */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';
import sinon from 'sinon';
import axios from 'axios';
import Promise from 'bluebird';

import DevelopersShow from '../../../src/components/developers/Show';

const data = {
  _id: 1,
  companyName: 'Marks & Spencer Ltd',
  companySize: 'Large',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://imgur.com/fFL2hPR.jpeg',
  skills: 'Python, Ruby, Javascript',
  // location: 'Kingston Upon Thames',
  location: { lat: 51.412229, lng: -0.300556},
  telNumber: '0203 442 1767',
  email: 'info@MandS.com'
};

describe('DevelopersShow tests', () => {
  let promise;
  let wrapper;

  before(done => {
    promise = Promise.resolve({ data });
    sinon.stub(axios, 'get').returns(promise);
    done();
  });

  after(done => {
    axios.get.restore();
    done();
  });

  beforeEach(done => {
    wrapper = mount(
      <MemoryRouter initialEntries={['/developers/1']}>
        <Route path="/developers/:id" component={DevelopersShow}
        />
      </MemoryRouter>
    );
    done();
  });

  it('should render developersShow', done => {
    promise.then(() => {
      wrapper.update();
      console.log(wrapper.debug());
      expect(wrapper.find('img').length).to.eq(1);
      expect(wrapper.find('h1.title').length).to.eq(2);
      expect(wrapper.find('h3.title').length).to.eq(4);
      done();
    })
      .catch(done);
  });

  it('shoulder render the correct data', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('img').prop('src')).to.eq(data.image);
      expect(wrapper.find('h1.title').text()).to.eq('Company Name:' + data.companyName);
      expect(wrapper.find('h3.title').text()).to.eq(data.Companysize);
      expect(wrapper.find('h1.title').text()).to.eq(data.description);
      expect(wrapper.find('h3.title').text()).to.eq(data.skills);
      done();
    });
  });
});
