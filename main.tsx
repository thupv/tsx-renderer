/// <reference path="jsx.d.ts" />
import {render} from "./renderer";

const ITEMS = 'hello there people'.split(' ');

let list = (items: any[]) => items.map( p => <li> {p} </li> );

let vdom = (
  <div id="foo">
    <p>A simple JSX DOM renderer!</p>
    <ul>{ list(ITEMS) }</ul>
  </div>
);

let dom = render(vdom);

document.body.appendChild(dom);

let json = JSON.stringify(vdom, null, '  ');

document.body.appendChild(
  render( <pre id="vdom">{ json }</pre> )
);