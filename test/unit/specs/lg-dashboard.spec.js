import { createTest, destroyVM } from '../util';
import LgDashboard from 'packages/lg-dashboard';

describe('LgDashboard', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(LgDashboard, true);
    expect(vm.$el).to.exist;
  });
});
