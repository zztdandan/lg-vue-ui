import { createTest, destroyVM } from '../util';
import LgSampleTable from 'packages/lg-sample-table';

describe('LgSampleTable', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(LgSampleTable, true);
    expect(vm.$el).to.exist;
  });
});
