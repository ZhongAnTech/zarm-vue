import ActivityIndicator from './src/activityIndicator.vue';
import transformVueComponent from '../utils/sfc';

/* istanbul ignore next */
const ActivityIndicatorComponentOptions = transformVueComponent(ActivityIndicator);

export default ActivityIndicatorComponentOptions;
