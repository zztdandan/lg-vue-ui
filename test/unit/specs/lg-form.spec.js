import { createTest, destroyVM } from '../util';
import LgForm from 'packages/lg-form';

describe('LgForm', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(LgForm, true);
    expect(vm.$el).to.exist;
  });
});
