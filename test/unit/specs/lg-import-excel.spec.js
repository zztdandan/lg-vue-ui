import { createTest, destroyVM } from '../util';
import LgImportExcel from 'packages/lg-import-excel';

describe('LgImportExcel', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(LgImportExcel, true);
    expect(vm.$el).to.exist;
  });
});
