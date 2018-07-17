/* global describe, it, beforeEach, before, after */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import sinon from 'sinon';
import axios from 'axios';
import Promise from 'bluebird';
import _ from 'lodash';

import DevelopersIndex from '../../../src/components/developers/Index';

const data = [{
  _id: 1,
  companyName: 'Marks & Spencer Ltd',
  companySize: 'Large',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://pbs.twimg.com/profile_images/1706286797/M_Slogo_400x400.jpg',
  skills: 'Python, Ruby, Javascript',
  // location: 'Kingston Upon Thames',
  location: { lat: 51.412229, lng: -0.300556},
  telNumber: '0203 442 1767',
  email: 'info@MandS.com'
},{
  _id: 2,
  companyName: 'Achilleus Designs',
  companySize: 'Small',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://s3-media2.fl.yelpcdn.com/bphoto/zcI5ktHMaO7GTMRQo02Zjg/l.jpg',
  skills: 'Bulma, Angular',
  // location: 'Manhatten',
  location: {lat: 40.7484, lng: -73.9857},
  telNumber: '0208 112 2566',
  email: 'info@AD.com'
},{
  _id: 3,
  companyName: 'MI6',
  companySize: 'Unknown',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://pbs.twimg.com/profile_images/1132279153/MI6-col_neg_400x400.jpg',
  skills: 'Unknown',
  // location: 'Unknown',
  location: {lat: 51.4872 , lng: 0.1245},
  telNumber: 'Unknown',
  email: 'info@government'
},{
  _id: 4,
  companyName: 'Network Code',
  companySize: 'Medium',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://pbs.twimg.com/profile_images/696378871126462464/c2DJbncv_400x400.png',
  skills: 'React.js, Sass, Node.js, Ruby on Rails',
  // location: 'London',
  location: {lat: 51.528013, lng: -0.132117},
  telNumber: '0208 332 5566',
  email: 'info@Networkcode.com'
},{
  _id: 5,
  companyName: 'Julian & Gerry Coders',
  companySize: 'Medium',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://pbs.twimg.com/profile_images/896001072015314945/6xIWXrOx_400x400.jpg',
  skills: 'Witty Retorts, French Accents, Javascript, React.js, Normalize',
  // location: 'Paris',
  location: {lat: 48.8584, lng: 2.2945},
  telNumber: '0208 117 1253',
  email: 'info@jandg.com'
},{
  _id: 6,
  companyName: 'Mike & Nicks\' Websites',
  companySize: 'Small',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://pbs.twimg.com/profile_images/454345227587690496/PWMftTUJ_400x400.jpeg',
  skills: 'Bulma, Art, Ruby, Python, PHP, Javascript, React.js, Angular.js',
  // location: 'Birmingham',
  location: {lat: 52.413154, lng: -1.919435},
  telNumber: '0208 328 8907',
  email: 'info@Mikeandnicweb.com'
},{
  _id: 7,
  companyName: 'Castrid\'s Web Studio',
  companySize: 'Small',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://dsocdn.akamaized.net/Assets/Images_Upload/2018/01/14/a71c295a-f962-11e7-9a05-1b44e7e70ea5_web_scale_0.4557291_0.4557291__.jpg?maxheight=416&maxwidth=568&scale=both',
  skills: 'Bulma, Art, Ruby, Python, PHP, Javascript',
  // location: 'Relay Building',
  location: {lat: 51.515243, lng: -0.072338},
  telNumber: '0208 555 233',
  email: 'info@castrid.com'
},{
  _id: 8,
  companyName: 'Two & a half Towers',
  companySize: 'Small',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://i.pinimg.com/736x/28/55/7e/28557e7b616ae333c092c4df0e24de30--the-two-towers-simple-illustration.jpg',
  skills: 'Python, PHP, Javascript, React.js',
  // location: 'Stockholm',
  location: {lat: 59.326968, lng: 18.072475},
  telNumber: '0203 343 1283',
  email: 'info@twotowers.com'
},{
  _id: 9,
  companyName: 'Eye of Bella inc.',
  companySize: 'Small',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image: 'https://image.shutterstock.com/image-vector/creative-geometric-technical-blue-eyes-260nw-291772352.jpg',
  skills: 'Bulma, Javascript, React.js, Angular.js',
  // location: 'Edinburgh',
  location: {lat: 55.948619, lng: -3.199838},
  telNumber: '0208 438 8497',
  email: 'info@bella.com'
}];

describe('DevelopersIndex tests', () => {
  let wrapper;
  let promise;

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
      <MemoryRouter>
        <DevelopersIndex />
      </MemoryRouter>
    );
    done();
  });

  it('should render developers', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('div.card').length).to.eq(9);
      done();
    })
      .catch(done);
  });

  it('should render the correct data', done => {
    promise.then(() => {
      wrapper.update();
      _.orderBy(data, 'companyName', 'asc').forEach((developer, index) => {
        expect(wrapper.find('img').at(index).prop('src')).to.eq(developer.image);
        expect(wrapper.find('h2').at(index).text()).to.eq(developer.companyName);
        expect(wrapper.find('Link').at(index).prop('to')).to.eq(`/developers/${developer._id}`);
      });
      done();
    });
  });

  it('should re-order the developers when the sort dropdown is changed', done => {
    const e = { target: { value: 'companyName|desc' } };
    promise.then(() => {
      wrapper.find('select').simulate('change', e);
      wrapper.update();

      _.orderBy(data, 'companyName', 'desc').forEach((developer, index) => {
        expect(wrapper.find('img').at(index).prop('src')).to.eq(developer.image);
        expect(wrapper.find('h2').at(index).text()).to.eq(developer.companyName);
        expect(wrapper.find('Link').at(index).prop('to')).to.eq(`/developers/${developer._id}`);
      });

      done();
    });
  });

  it('should filter the developers', done => {
    const input = wrapper.find('input');
    promise.then(() => {
      input.simulate('change', { target: { value: 'Designs' } });
      wrapper.update();
      expect(wrapper.find('div.card').length).to.eq(1);

      input.simulate('change', { target: { value: 'React' } });
      wrapper.update();
      expect(wrapper.find('div.card').length).to.eq(5);

      input.simulate('change', { target: { value: 'cheese' } });
      wrapper.update();
      expect(wrapper.find('div.card').length).to.eq(0);

      done();
    });
  });
});
