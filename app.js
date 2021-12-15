import { ready } from 'https://lsong.org/scripts/dom.js';
import { h, render, useEffect, useState } from 'https://lsong.org/scripts/components/react.js';

const getLinks = async () => {
  const response = await fetch(`./links.json`);
  const links = await response.json();
  return links;
};

const Site = ({ site }) => {
  return h('a', { className: 'site', href: site.url }, [
    h('div', { className: 'site-icon' }, 'ABC'),
    h('div', { className: 'site-name' }, site.name),
  ]);
};

const Group = ({ group }) => {
  const { name, links } = group;
  return h('div', {}, [
    h('h2', {}, name),
    h('ul', { className: 'sites' }, links.map(link => h(Site, { site: link })))
  ])
};

const App = () => {
  const [groups, setLinks] = useState([]);
  useEffect(() => {
    getLinks().then(setLinks);
  }, []);
  return (
    h('div', {}, groups.map(group => h(Group, { group })))
  );
};

ready(() => {
  const app = document.getElementById('app');
  render(h(App), app);
});