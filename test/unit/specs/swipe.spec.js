import { createVue, destroyVM } from '../util';

describe('Swipe', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', done => {
    vm = createVue({
      template: `
      <za-swipe direction='left'>
        <za-swipe-item>
          <div>swipe1</div>
        </za-swipe-item>
        <za-swipe-item>
          <div>swipe2</div>
        </za-swipe-item>
        <za-swipe-item>
          <div>swipe3</div>
        </za-swipe-item>
      </za-swipe>
      `,
    }, true);

    vm.$nextTick(() => {
      expect(vm.$el.classList.contains('za-swipe')).to.true;
      expect(vm.$el.querySelector('.za-swipe-items').children.length).to.equal(3);
      done();
    });
  });

  it('loop', done => {
    vm = createVue({
      template: `
      <za-swipe
        loop
        direction='left'>
        <za-swipe-item>
          <div>swipe1</div>
        </za-swipe-item>
        <za-swipe-item>
          <div>swipe2</div>
        </za-swipe-item>
        <za-swipe-item>
          <div>swipe3</div>
        </za-swipe-item>
      </za-swipe>
      `,
    }, true);
    vm.$nextTick(() => {
      expect(
        vm.$el.querySelector('.za-swipe-items').children.length).to.equal(5);
      done();
    });
  });

  it('autoPlay', done => {
    vm = createVue({
      template: `
        <za-swipe
          :autoPlayIntervalTime='50'
          autoPlay
          direction='left'>
          <za-swipe-item>
            <div>swipe1</div>
          </za-swipe-item>
          <za-swipe-item>
            <div>swipe2</div>
          </za-swipe-item>
          <za-swipe-item>
            <div>swipe3</div>
          </za-swipe-item>
        </za-swipe>
      `,
    }, true);

    setTimeout(() => {
      setTimeout(() => {
        const translate = vm.$el.querySelector('.za-swipe-items').style.transform;
        expect(translate).to.not.equal('translate3d(0px, 0px, 0px)');
        done();
      }, 60);
    }, 10);
  });

  it('mannul click', done => {
    let result;
    vm = createVue({
      template: `
      <za-swipe
        ref='swipe'
        direction='left'
        :autoPlayIntervalTime='50'
        @change='handleChange'
        @changeStart='handleChangeStart'
        @changeEnd='handleChangeEnd'>
        <za-swipe-item>
          <div>swipe1</div>
        </za-swipe-item>
        <za-swipe-item>
          <div>swipe2</div>
        </za-swipe-item>
        <za-swipe-item>
          <div>swipe3</div>
        </za-swipe-item>
      </za-swipe>
      `,
      methods: {
        handleChange(index) {
          result = index;
        },
        handleChangeStart(index) {
          result = index;
        },
        handleChangeEnd(index) {
          result = index;
        },
      },
    }, true);
    const swipe = vm.$refs.swipe;
    swipe.onJumpTo(1);
    setTimeout(() => {
      expect(result).to.equal(1);
      expect(swipe.currentActiveIndex).to.equal(1);
      swipe.onSlideTo(2);
      setTimeout(() => {
        expect(result).to.equal(2);
        expect(swipe.currentActiveIndex).to.equal(2);
        done();
      }, 350);
    }, 60);
  });
});
