// % $(npm bin)/browserify -t babelify ./src/DEBUG.js -o log.js
import todoApp from './reducers/index.js';

const initialState = todoApp({}, {});
console.log(initialState);

const nextState = todoApp(initialState, {
  type: 'ADD_TODO',
  id: 1,
  text: 'First todo',
});
console.log(nextState);
