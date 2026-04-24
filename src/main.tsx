import { render } from 'preact';
import App from './app';
import './styles/reset.css';
import './styles/global.css';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const mount = document.getElementById('app');
if (mount) render(<App />, mount);
