let describe = require('mocha').describe;
let before = require('mocha').before;
let after = require('mocha').after;
let it = require('mocha').it;
let chai = require('chai');
let assert = require('chai').assert;
let expect = require('chai').expect;

import 'babel-polyfill';
import I18N from './i18n';

describe('I18N: ', () => {
  describe('i18m.js', () => {
    const i18n = new I18N({
      'values': {
        'Good bye friend': 'Au revoir mon ami',
        'Yes': 'Oui',
        'No': 'Non',
        'Welcome %{name}': 'Bonjour %{name}'
      },
      'contexts': [
        {
          'matches': {
            'gender': 'male'
          },
          'values': {
            '%{name} uploaded %n photos to their %{album} album': [
              [0, 0, '%{name} uploaded %n photos to his %{album} album'],
              [1, 1, '%{name} uploaded %n photo to his %{album} album'],
              [2, null, '%{name} uploaded %n photos to his %{album} album']
            ]
          }
        },
        {
          'matches': {
            'gender': 'female'
          },
          'values': {
            '%{name} uploaded %n photos to their %{album} album': [
              [0, 0, '%{name} uploaded %n photos to her %{album} album'],
              [1, 1, '%{name} uploaded %n photo to her %{album} album'],
              [2, null, '%{name} uploaded %n photos to her %{album} album']
            ]
          }
        }
      ]
    });

    it('should return something', () => {
      expect(i18n.translate('Good bye friend')).to.equal('Au revoir mon ami');
    });
    it('should return something', () => {
      expect(i18n.translate('Yes')).to.equal('Oui');
    });
    it('should return something', () => {
      expect(i18n.translate('No')).to.equal('Non');
    });
    it('should return something', () => {
      expect(i18n.translate('Welcome %{name}', {name: 'John'})).to.equal('Bonjour John');
    });
    it('should return the original value if the item is missing in the bundle', () => {
      expect(i18n.translate('Is it missing?')).to.equal('Is it missing?');
    });
    it('should return the original value if the item is missing in the bundle', () => {
      expect(i18n.translate('It is a mystery to me %{name}', {name: 'John'})).to.equal('It is a mystery to me John');
    });
    it('should return a string with context and pluralisation expanded', () => {
      expect(i18n.translate('%{name} uploaded %n photos to their %{album} album', 100, {
        name: 'Larry',
        album: 'family'
      }, {gender: 'male'})).to.equal('Larry uploaded 100 photos to his family album');
    });
    it('should return string defaulted when the context is not found.', () => {
      expect(i18n.translate('%{name} uploaded %n photos to their %{album} album', 100, {
        name: 'Sue',
        album: 'family'
      }, {gender: 'girl'})).to.equal('Sue uploaded 100 photos to their family album');
    });
  });
});
