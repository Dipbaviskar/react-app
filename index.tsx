import * as React from 'react';
import { createRoot } from 'react-dom/client';

function click_me() {
  console.log(Math.random());
}
function EventHandling() {
  return <button onClick={click_me}>Click me</button>;
}
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<EventHandling />);
