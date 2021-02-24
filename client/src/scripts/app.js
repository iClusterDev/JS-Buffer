import store from './components/store';
import Display from './components/library/Display';

/**
 * /////////////////////////////////////////////////////
 * check
 * /////////////////////////////////////////////////////
 */
const display = new Display({
  width: store.state.display.width,
  height: store.state.display.height,
  onResize: (width, height) => {
    return store.dispatch('resize', { width, height });
  },
});

// game load then
// init scene (level and actors) then ???
// start
//  - update scene → on dead (game: over) → on win (game:win)
//  - render scene on display
