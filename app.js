import { ready } from 'https://lsong.org/scripts/dom.js';
import { h, render } from 'https://unpkg.com/preact?module';

const App = () => {
  return (
    h('div', {}, [
      h('h2', {}, 'Hello World'),
    ])
  );
};

ready(() => {
  const app = document.getElementById('app');
  render(h(App), app);
});