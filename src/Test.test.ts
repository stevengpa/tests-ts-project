import { Test } from './Test';

describe('Test', (): void => {
  describe('sayHello method', (): void => {
    it('should return Hello !!!', (): void => {
      const test = new Test();
      const actual = test.sayHello();
      const expected = 'Hello !!!!';

      expect(actual).toEqual(expected);
    });
  });
});
