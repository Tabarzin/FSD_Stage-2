import './assets/scss/main.scss';
//import './components/colors_type/colors-type.scss';




function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('./pages', true, /\.(scss|js)$/));
//requireAll(require.context('./assets/favicons/', true, /\.js$/));

/*function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}*/

