import Stepper from './src/stepper.vue';
import transformVueComponent from '../utils/sfc';

/* istanbul ignore next */
const StepperComponentOptions = transformVueComponent(Stepper);

export default StepperComponentOptions;
