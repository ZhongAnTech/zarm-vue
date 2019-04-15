import Button from './src/button.vue';
import transformVueComponent from '../utils/sfc';

/* istanbul ignore next */
const ButtonComponentOptions = transformVueComponent(Button);

export default ButtonComponentOptions;
