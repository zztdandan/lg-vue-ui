import { createTest, destroyVM } from '../util';
import LgSimpleTable from 'packages/lg-simple-table';

describe('LgSimpleTable', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(LgSimpleTable, true);
    expect(vm.$el).to.exist;
  });
});
