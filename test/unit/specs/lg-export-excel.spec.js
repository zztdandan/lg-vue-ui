import { createTest, destroyVM } from '../util';
import LgExportExcel from 'packages/lg-export-excel';

describe('LgExportExcel', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(LgExportExcel, true);
    expect(vm.$el).to.exist;
  });
});
