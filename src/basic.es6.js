'use strict';

require('babel-polyfill');

import {createStore} from 'redux';
import {addTodo, toggleTodo, setVisibilityFilter} from './actions/index.js';

let store = createStore(() => {
  return 'Hello, Redux';
});

const addTodoElem = document.getElementById('addTodo');
const input = addTodoElem.getElementsByTagName('input')[0];
const button = addTodoElem.getElementsByTagName('button')[0];
button.addEventListener('click', () => {
  let todoText = input.value;
  store.dispatch(addTodo(todoText));
});

const todoList = document.getElementById('todoList');
const elements = todoList.getElementsByTagName('li');
const listArray = [...elements];
listArray.forEach((v, index) => {
  v.addEventListener('click', (e) => {
    store.dispatch(toggleTodo(index));
  });
});

const links = document.getElementById('links');
const childs = links.childNodes;
const childList = [...childs];
childList.filter((v) => v.nodeName != '#text').forEach((v) => {
  v.addEventListener('click', (e) => {
    let filterText = v.innerHTML;
    store.dispatch(setVisibilityFilter(filterText));
  });
});
