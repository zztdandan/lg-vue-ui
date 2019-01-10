import { createTest, destroyVM } from '../util';
import LgMdRender from 'packages/lg-md-render';

describe('LgMdRender', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(LgMdRender, true);
    expect(vm.$el).to.exist;
  });
});
