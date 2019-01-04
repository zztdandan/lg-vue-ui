import { createTest, destroyVM } from '../util';
import LgBuildForm from 'packages/lg-build-form';

describe('LgBuildForm', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(LgBuildForm, true);
    expect(vm.$el).to.exist;
  });
});
