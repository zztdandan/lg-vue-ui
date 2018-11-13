import { createTest, destroyVM } from '../util';
import LgFormTable from 'packages/lg-form-table';

describe('LgFormTable', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(LgFormTable, true);
    expect(vm.$el).to.exist;
  });
});
