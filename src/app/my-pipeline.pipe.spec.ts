import { MyPipelinePipe } from './my-pipeline.pipe';

describe('MyPipelinePipe', () => {
  it('create an instance', () => {
    const pipe = new MyPipelinePipe();
    expect(pipe).toBeTruthy();
  });
});
