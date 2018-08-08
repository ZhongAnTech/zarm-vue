import zaPull from '@/pull';
import { mount } from '../util';
import { dispatchTouchStart, dispatchTouchMove, dispatchTouchEnd } from '../touchs';

const REFRESH_STATE = {
  normal: 0, // 普通
  pull: 1, // 下拉状态（未满足刷新条件）
  drop: 2, // 可释放状态（满足刷新条件）
  loading: 3, // 加载中
  success: 4, // 加载成功
  failure: 5, // 加载失败
};

const LOAD_STATE = {
  normal: 0,  // 普通
  abort: 1, // 中止
  loading: 2, // 加载中
  success: 3, // 加载成功
  failure: 4, // 加载失败
  complete: 5, // 加载完成（无新数据）
};

describe('Pull', () => {
  it('create', done => {
    const TestCompo = {
      components: {
        zaPull,
      },
      template: `
        <za-pull>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </za-pull>
      `,
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$nextTick(() => {
      expect(vm.$el.classList.contains('za-pull')).toBe(true);
      done();
    });
  });

  it('refreshing and success', done => {
    const TestCompo = {
      components: {
        zaPull,
      },
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
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$nextTick(() => {
      expect(vm.$el.getElementsByTagName('svg')[0].classList.contains('rotate360')).toBe(true);
      done();
    });
  });

  it('drag refreshing', done => {
    const TestCompo = {
      components: {
        zaPull,
      },
      template: `
        <za-pull :refreshing='refreshing' :onRefresh='refresh(1)'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </za-pull>
      `,
      data() {
        return {
          refreshing: false,
        };
      },
      methods: {
        refresh() {
          return () => new Promise((resolve) => {
            this.refreshing = true;
            resolve(true);
          });
        },
      },
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$nextTick(() => {
      dispatchTouchStart(vm.$el, {
        pageX: 50,
        pageY: 0,
      });
      dispatchTouchMove(vm.$el, {
        pageX: 50,
        pageY: 50,
      });
      dispatchTouchEnd(vm.$el, {
        pageX: 50,
        pageY: 50,
      });
      done();
    });
  });

  it('pull and drop', done => {
    const TestCompo = {
      components: {
        zaPull,
      },
      template: `
        <za-pull :duration='50' ref='pull'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </za-pull>
      `,
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    vm.$refs.pull.doRefreshAction(REFRESH_STATE.pull, 10);
    vm.$nextTick(() => {
      expect(vm.$el.getElementsByTagName('svg')[0].classList.contains('za-spinner')).toBe(true);
      vm.$refs.pull.doRefreshAction(REFRESH_STATE.drop, 110);
      vm.$nextTick(() => {
        expect(vm.$el.getElementsByTagName('svg')[0].classList.contains('za-spinner')).toBe(true);
        done();
      });
    });
  });

  it('customer render refresh', done => {
    const TestCompo = {
      components: {
        zaPull,
      },
      template: `
        <za-pull :duration='50' ref='pull'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <template slot-scope='props' slot='refreshPull'>
            <div class='custom-control1'>
              <span>下拉中</span>
            </div>
          </template>
          <template slot-scope='props' slot='refreshDrop'>
            <div class='custom-control2'>
              <span>释放加载</span>
            </div>
          </template>
          <template slot-scope='props' slot='refreshLoading'>
            <div class='custom-control3'>
              <span>加载中</span>
            </div>
          </template>
          <template slot-scope='props' slot='refreshSuccess'>
            <div class='custom-control4'>
              <span>加载成功</span>
            </div>
          </template>
        </za-pull>
      `,
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const el = vm.$el;
    vm.$refs.pull.doRefreshAction(REFRESH_STATE.pull, 10);
    vm.$nextTick(() => {
      expect(el.querySelector('.custom-control1')).toBeTruthy();
      vm.$refs.pull.doRefreshAction(REFRESH_STATE.drop, 110);
      vm.$nextTick(() => {
        expect(el.querySelector('.custom-control2')).toBeTruthy();
        vm.$refs.pull.doRefreshAction(REFRESH_STATE.loading, 100);
        vm.$nextTick(() => {
          expect(el.querySelector('.custom-control3')).toBeTruthy();
          vm.$refs.pull.doRefreshAction(REFRESH_STATE.success, 100);
          vm.$nextTick(() => {
            expect(el.querySelector('.custom-control4')).toBeTruthy();
            done();
          });
        });
      });
    });
  });

  it('customer render load success', done => {
    const TestCompo = {
      components: {
        zaPull,
      },
      template: `
        <za-pull :duration='50' ref='pull'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <template slot-scope='props' slot='loadComplete'>
            <div class='custom-control1'>
              <span>没有更多了</span>
            </div>
          </template>
          <template slot-scope='props' slot='loadLoading'>
            <div class='custom-control3'>
              <span>加载成功</span>
            </div>
          </template>
        </za-pull>
      `,
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const el = vm.$el;
    vm.$refs.pull.doLoadAction(LOAD_STATE.loading, 10);
    vm.$nextTick(() => {
      expect(el.querySelector('.custom-control3')).toBeTruthy();
      vm.$refs.pull.doLoadAction(LOAD_STATE.complete, 110);
      vm.$nextTick(() => {
        expect(el.querySelector('.custom-control1')).toBeTruthy();
        done();
      });
    });
  });

  it('customer render load failure', done => {
    const TestCompo = {
      components: {
        zaPull,
      },
      template: `
        <za-pull :duration='50' ref='pull'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <template slot-scope='props' slot='loadFailure'>
            <div class='custom-control2'>
              <span>加载失败</span>
            </div>
          </template>
          <template slot-scope='props' slot='loadLoading'>
            <div class='custom-control3'>
              <span>加载成功</span>
            </div>
          </template>
        </za-pull>
      `,
    };
    const wrapper = mount(TestCompo);
    const { vm } = wrapper;
    const el = vm.$el;
    vm.$refs.pull.doLoadAction(LOAD_STATE.loading, 10);
    vm.$nextTick(() => {
      expect(el.querySelector('.custom-control3')).toBeTruthy();
      vm.$refs.pull.doLoadAction(LOAD_STATE.failure, 110);
      vm.$nextTick(() => {
        expect(el.querySelector('.custom-control2')).toBeTruthy();
        done();
      });
    });
  });
})
