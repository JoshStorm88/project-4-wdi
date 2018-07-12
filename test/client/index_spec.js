/* global describe, it, beforeEach, before, after */

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import sinon from 'sinon';
import axios from 'axios';
import Promise from 'bluebird';
import _ from 'lodash';

import DevelopersIndex from '../../src/components/developers/Index';

const data = [{
  _id: 1,
  companyName: 'Marks & Spencer Ltd',
  companySize: 'Large',
  description: 'C',
  image: 'https://pbs.twimg.com/profile_images/1706286797/M_Slogo_400x400.jpg',
  skills: 'Python, Ruby, Javascript',
  location: 'Kingston Upon Thames'
},{
  _id: 2,
  companyName: 'Achilleus Designs',
  companySize: 'Small',
  description: 'C',
  image: 'https://s3-media2.fl.yelpcdn.com/bphoto/zcI5ktHMaO7GTMRQo02Zjg/l.jpg',
  skills: 'Bulma, Angular',
  location: 'Manhatten'
},{
  _id: 3,
  companyName: 'MI6',
  companySize: 'Unknown',
  description: 'Unknown',
  image: 'https://pbs.twimg.com/profile_images/1132279153/MI6-col_neg_400x400.jpg',
  skills: 'Unknown',
  location: 'Unknown'
},{
  _id: 4,
  companyName: 'Network Code',
  companySize: 'Medium',
  description: 'C',
  image: 'https://pbs.twimg.com/profile_images/696378871126462464/c2DJbncv_400x400.png',
  skills: 'React.js, Sass, Node.js, Ruby on Rails',
  location: 'London'
},{
  _id: 5,
  companyName: 'Julian & Gerry Coders',
  companySize: 'Medium',
  description: 'C',
  image: 'https://pbs.twimg.com/profile_images/896001072015314945/6xIWXrOx_400x400.jpg',
  skills: 'Witty Retorts, French Accents, Javascript, React.js, Normalize',
  location: 'Paris'
},{
  _id: 6,
  companyName: 'Mike & Nicks\' Websites',
  companySize: 'Small',
  description: 'C',
  image: 'https://pbs.twimg.com/profile_images/454345227587690496/PWMftTUJ_400x400.jpeg',
  skills: 'Bulma, Art, Ruby, Python, PHP, Javascript, React.js, Angular.js',
  location: 'Birmingham'
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

      <DevelopersIndex />

    );
    done();
  });

  it('should render developers', done => {
    promise.then(() => {
      wrapper.update();
      expect(wrapper.find('div.card').length).to.eq(6);
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

  it('should filter the developers', done => {
    const input = wrapper.find('input');
    promise.then(() => {
      input.simulate('change', { target: { value: 'Marks & Spencer Ltd'} });
      wrapper.update();
      expect(wrapper.find('div.card').length).to.eq(1);
      done();

      input.simulate('change', { target: { value: 'Achilleus Designs'} });
      wrapper.update();
      expect(wrapper.find('div.card').length).to.eq(2);
      done();

      input.simulate('change', { target: { value: 'garbage'} });
      wrapper.update();
      expect(wrapper.find('div.card').length).to.eq(0);
      done();
    });
  });

});
