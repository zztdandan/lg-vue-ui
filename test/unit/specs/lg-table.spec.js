import { createTest, destroyVM } from '../util';
import LgTable from 'packages/lg-table';

describe('LgTable', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(LgTable, true);
    expect(vm.$el).to.exist;
  });
});