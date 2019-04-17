import NavBar from './src/nav-bar.vue';
import transformVueComponent from '../utils/sfc';

/* istanbul ignore next */
const NavBarComponentOptions = transformVueComponent(NavBar);

export default NavBarComponentOptions;
