import Badge from './src/badge.vue';
import transformVueComponent from '../utils/sfc';

/* istanbul ignore next */
const BadgeComponentOptions = transformVueComponent(Badge);

export default BadgeComponentOptions;
