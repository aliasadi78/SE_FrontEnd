import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import EditTime from "../Component/Reservation/editTime";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

let container = null;
let location;
let console;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);

  console = global.console;
  global.console = {
    log: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    info: jest.fn(),
    debug: jest.fn(),
  };
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
  global.console = console;
});

it("EditTime Test", () => {
  act(() => {
    render(<EditTime />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);
});
