import Progress from './src/progress.vue';
import transformVueComponent from '../utils/sfc';

/* istanbul ignore next */
const ProgressComponentOptions = transformVueComponent(Progress);

export default ProgressComponentOptions;
