/**
 * Created by psenger on 5/4/17.
 */
import { describe, it } from 'mocha';
import { ifPathExists } from './utils';
import { assert, expect } from 'chai';

describe('utils.js', () => {

  describe('ifPathExists', () => {
    it('should return false when null is passed for the object', () => {
      expect(ifPathExists(null, 'a.b.c')).to.equal(false);
    });
    it('should return false when null is passed for the path', () => {
      expect(ifPathExists({a: {b: {c: true}}}, null)).to.equal(false);
    });
    it('should return false when null is passed for both parameters', () => {
      expect(ifPathExists(null, null)).to.equal(false);
    });
    it('should return false when the path does not exists', () => {
      expect(ifPathExists({a: {b: {c: true}}}, 'z')).to.equal(false);
    });
    it('should return false when the path does not exists', () => {
      expect(ifPathExists({a: {b: {c: true}}}, 'a.z')).to.equal(false);
    });
    it('should return false when the path does not exists', () => {
      expect(ifPathExists({a: {b: {c: true}}}, 'a.b.z')).to.equal(false);
    });
    it('should return false when the path does not exists', () => {
      expect(ifPathExists({a: {b: {c: true}}}, 'a.b.c.z')).to.equal(false);
    });
    it('should return true when the path does exist', () => {
      expect(ifPathExists({a: {b: {c: true}}}, 'a.b.c')).to.equal(true);
    });
  });
});
