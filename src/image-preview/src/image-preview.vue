<script>
import zaPopup from '@/popup';
import zaCarousel from '@/carousel';
import zaCarouselItem from '@/carousel-item';
import zaPinchZoom from '@/pinch-zoom';
import zaActivityIndicator from '@/activity-indicator';
import { isObject, isString } from '@/utils/validator';
import Locale from '@/utils/locale';
import defaultLocale from './default';

const LoadStatus = {
  before: 'loadBefore',
  start: 'loadStart',
  end: 'loadEnd',
  after: 'loadAfter',
};

const formatImages = (images) => {
  const previewImages = [];
  images.forEach((image) => {
    if (isString(image)) {
      previewImages.push({
        url: image,
      });
    } else if (isObject(image)) {
      previewImages.push({
        url: image.url,
        originUrl: image.originUrl,
        loaded: LoadStatus.before,
      });
    }
  });
  return previewImages;
};

export default {
  name: 'zaImagePreview',
  inject: ['localeProvider'],
  props: {
    prefixCls: {
      type: String,
      default: 'za-image-preview',
    },
    activeIndex: {
      type: [Number, String],
      default: 0,
    },
    showPagination: {
      type: Boolean,
      default: true,
    },
    defaultImages: {
      type: Array,
      default: () => [],
    },
    doubleClickTimer: null,
    touchStartTime: null,
    visible: {
      type: Boolean,
      default: false,
    },
  },

  components: {
    zaPopup,
    zaCarousel,
    zaCarouselItem,
    zaPinchZoom,
    zaActivityIndicator,
  },

  data() {
    const { defaultImages } = this;

    return {
      currentVisible: false,
      currentIndex: 0,
      images: formatImages(defaultImages),
      prevVisible: false,
      prevActiveIndex: 0,
      moving: false,
    };
  },

  watch: {
    visible(value, oldValue) { // eslint-disable-line no-unused-vars, object-shorthand
      if (value === this.currentVisible) return;
      this.currentVisible = value;
    },
  },

  computed: {
    loaded() {
      return this.images.length && this.images[this.currentIndex].loaded;
    },
    loadText() {
      return this.localeProvider ? this.getLocales(this.loaded) : defaultLocale[this.loaded];
    },
  },

  methods: {
    // 国际化
    getLocales(key) {
      return Locale.getLocaleByComponent(this.localeProvider, 'ImagePreview', key);
    },
    onChange(index) {
      this.currentIndex = index;
      this.$nextTick(() => {
        this.$emit('change');
      });
    },

    close() {
      if (this.moving) {
        return false;
      }
      this.$emit('close');
    },

    loadOrigin() {
      const { currentIndex = 0, images } = this;
      const { originUrl, loaded } = images[currentIndex];
      if (loaded !== LoadStatus.before || !originUrl) {
        return;
      }
      images[currentIndex].loaded = LoadStatus.start;
      this.images = images;

      const img = new Image();
      img.onload = () => {
        images[currentIndex].loaded = LoadStatus.end;
        images[currentIndex].url = originUrl;
        this.images = images;

        setTimeout(() => {
          images[currentIndex].loaded = LoadStatus.after;
          this.images = images;
        }, 1500);
      };
      img.src = originUrl;
    },

    showOriginButton(images, activeIndex) {
      if (
        images
        && images[activeIndex]
        && images[activeIndex].originUrl
      ) {
        return true;
      }
      return false;
    },

    onWrapperTouchStart() {
      this.touchStartTime = Date.now();
    },

    onWrapperTouchEnd() {
      const deltaTime = Date.now() - this.touchStartTime;
      const { onClose } = this;
      // prevent long tap to close component
      if (deltaTime < 300) {
        if (!this.doubleClickTimer && !this.moving) {
          this.doubleClickTimer = setTimeout(() => {
            this.doubleClickTimer = null;
            if (typeof onClose === 'function') {
              onClose();
            }
          }, 300);
        } else {
          clearTimeout(this.doubleClickTimer);
          this.doubleClickTimer = null;
        }
      }
      this.moving = false;
    },

    onWrapperTouchMove() {
      if (this.touchStartTime) {
        this.moving = true;
      }
    },

    onWrapperMouseDown() {
      this.touchStartTime = Date.now();
    },

    onWrapperMouseUp() {
      setTimeout(() => {
        this.moving = false;
      }, 0);
      this.touchStartTime = 0;
    },

    renderImages() {
      const { prefixCls, images, minScale, maxScale } = this;

      return images.map((item, i) => {
        return (
          <za-carousel-item class={`${prefixCls}__item`} key={+i}>
            <za-pinch-zoom
              class={`${prefixCls}__item__img`}
              minScale={minScale}
              maxScale={maxScale}
            >
              <img src={item.url} alt="" draggable={false} />
            </za-pinch-zoom>
          </za-carousel-item>
        );
      });
    },

  },

  render() {
    const { prefixCls, activeIndex, showPagination, currentIndex = 0, currentVisible, images, loaded, loadText } = this;

    return (
      <za-popup direction="center" visible={currentVisible} class={prefixCls}>
        <div
          class={`${prefixCls}__content`}
          direction="center"
          onTouchStart={this.onWrapperTouchStart}
          onTouchEnd={this.onWrapperTouchEnd}
          onTouchCancel={this.onWrapperTouchEnd}
          onTouchMove={this.onWrapperTouchMove}
          onMouseDown={this.onWrapperMouseDown}
          onMouseMove={this.onWrapperTouchMove}
          onMouseUp={this.onWrapperMouseUp}
          onClick={this.close}
        >
          {
            currentVisible ? <za-carousel
              showPagination={false}
              onChange={this.onChange}
              activeIndex={currentIndex}
            >
              {this.renderImages()}
            </za-carousel> : null
          }
        </div>
        <div class={`${prefixCls}__footer`}>
          {loaded && this.showOriginButton(images, activeIndex) && (loaded !== LoadStatus.after)
            ? (
              <button class={`${prefixCls}__origin__button`} onClick={this.loadOrigin}>
                {loaded === LoadStatus.start ? <za-activityIndicator class={`${prefixCls}__loading`} size="xs" type="spinner" /> : ''}
                {loadText}
              </button>
            )
            : ''}
          {currentVisible && showPagination && images && images.length > 1 && <div class={`${prefixCls}__index`}>{currentIndex + 1} / {images.length}</div>}
        </div>
      </za-popup>
    );
  },
};
</script>
