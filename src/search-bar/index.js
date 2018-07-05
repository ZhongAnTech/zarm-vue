import SearchBar from './src/search-bar';
/* istanbul ignore next */
SearchBar.install = function (Vue) {
  Vue.component(SearchBar.name, SearchBar);
};
export default SearchBar;
