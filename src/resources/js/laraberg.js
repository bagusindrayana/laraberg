// Gutenberg imports
import './gutenberg/settings'
import initGutenberg from './gutenberg/init-gutenberg'

import 'normalize.css'

// Gutenberg JS Style
import '@frontkom/gutenberg-js/build/css/block-library/style.css';
import '@frontkom/gutenberg-js/build/css/style.css';

import './../scss/laraberg.scss'

window.initGutenberg = initGutenberg
