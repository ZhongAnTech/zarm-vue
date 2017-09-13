import { createVue, destroyVM } from '../util';

const ACTION_STATE = {
  normal: 0,  // 普通
  pull: 1,    // 下拉状态（未满足刷新条件）
  drop: 2,    // 可释放状态（满足刷新条件）
  loading: 3, // 加载中
  success: 4, // 加载成功
  failure: 5, // 加载失败
};

describe('Pull', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createVue({
      template: `
        <za-pull>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </za-pull>
      `,
    }, true);
    const el = vm.$el;
    expect(el.classList.contains('za-pull')).to.be.true;
  });

  it('refreshing and success', done => {
    vm = createVue({
      template: `
        <za-pull :refreshing='refreshing' :duration='50'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </za-pull>
      `,
      data() {
        return {
          refreshing: true,
        };
      },
    }, true);
    const el = vm.$el;
    expect(el.getElementsByTagName('svg')[0].classList.contains('rotate360')).to.be.true;
    vm.refreshing = false;
    vm.$nextTick(() => {
      expect(el.querySelector('.za-icon-right-round')).to.exist;
      done();
    });
  });

  it('pull and drop', done => {
    vm = createVue({
      template: `
        <za-pull :duration='50' ref='pull'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </za-pull>
      `,
    }, true);
    const el = vm.$el;
    vm.$refs.pull.doAction(ACTION_STATE.pull, 10);
    vm.$nextTick(() => {
      expect(el.getElementsByTagName('svg')[0].classList.contains('za-spinner')).to.be.true;
      vm.$refs.pull.doAction(ACTION_STATE.drop, 110);
      vm.$nextTick(() => {
        expect(el.getElementsByTagName('svg')[0].classList.contains('za-spinner')).to.be.true;
        done();
      });
    });
  });

  it('customer render', done => {
    vm = createVue({
      template: `
        <za-pull :duration='50' ref='pull'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <template scope='props' slot='pull'>
            <div class='custom-control1'>
              <span>下拉中</span>
            </div>
          </template>
          <template scope='props' slot='drop'>
            <div class='custom-control2'>
              <span>释放加载</span>
            </div>
          </template>
          <template scope='props' slot='loading'>
            <div class='custom-control3'>
              <span>加载中</span>
            </div>
          </template>
          <template scope='props' slot='success'>
            <div class='custom-control4'>
              <span>加载成功</span>
            </div>
          </template>
        </za-pull>
      `,
    }, true);
    const el = vm.$el;
    vm.$refs.pull.doAction(ACTION_STATE.pull, 10);
    vm.$nextTick(() => {
      expect(el.querySelector('.custom-control1')).to.exist;
      vm.$refs.pull.doAction(ACTION_STATE.drop, 110);
      vm.$nextTick(() => {
        expect(el.querySelector('.custom-control2')).to.exist;
        vm.$refs.pull.doAction(ACTION_STATE.loading, 100);
        vm.$nextTick(() => {
          expect(el.querySelector('.custom-control3')).to.exist;
          vm.$refs.pull.doAction(ACTION_STATE.success, 100);
          vm.$nextTick(() => {
            expect(el.querySelector('.custom-control4')).to.exist;
            done();
          });
        });
      });
    });
  });
});
