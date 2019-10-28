import { MyTestPipePipe } from './my-test-pipe.pipe';

describe('MyTestPipePipe', () => {
  it('create an instance', () => {
    const pipe = new MyTestPipePipe();
    expect(pipe).toBeTruthy();
  });
});
