import { createTest, destroyVM } from '../util';
import LgSimpleSearchBar from 'packages/lg-simple-search-bar';

describe('LgSimpleSearchBar', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(LgSimpleSearchBar, true);
    expect(vm.$el).to.exist;
  });
});
