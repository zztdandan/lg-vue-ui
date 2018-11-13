import { createTest, destroyVM } from '../util';
import ButtonDemo from 'packages/button-demo';

describe('ButtonDemo', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(ButtonDemo, true);
    expect(vm.$el).to.exist;
  });
});
