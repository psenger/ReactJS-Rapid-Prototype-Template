/**
 * Created by psenger on 5/4/17.
 */
import { ifPathExists } from './utils';

describe('utils.js', () => {

  describe('ifPathExists', () => {
    it('should return false when null is passed for the object', () => {
      expect(ifPathExists(null, 'a.b.c')).toEqual(false);
    });
    it('should return false when null is passed for the path', () => {
      expect(ifPathExists({a: {b: {c: true}}}, null)).toEqual(false);
    });
    it('should return false when null is passed for both parameters', () => {
      expect(ifPathExists(null, null)).toEqual(false);
    });
    it('should return false when the path does not exists', () => {
      expect(ifPathExists({a: {b: {c: true}}}, 'z')).toEqual(false);
    });
    it('should return false when the path does not exists', () => {
      expect(ifPathExists({a: {b: {c: true}}}, 'a.z')).toEqual(false);
    });
    it('should return false when the path does not exists', () => {
      expect(ifPathExists({a: {b: {c: true}}}, 'a.b.z')).toEqual(false);
    });
    it('should return false when the path does not exists', () => {
      expect(ifPathExists({a: {b: {c: true}}}, 'a.b.c.z')).toEqual(false);
    });
    it('should return true when the path does exist', () => {
      expect(ifPathExists({a: {b: {c: true}}}, 'a.b.c')).toEqual(true);
    });
  });
});
