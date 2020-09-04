import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h1>React Hooks</h1>
      <article>
        <b>What is a Hook? </b>
        <br />A Hook is a special function that lets you “hook into” React
        features. For example, useState is a Hook that lets you add React state
        to function components. We’ll learn other Hooks later.
        <br />
        <b>When wouldI use a Hook? </b>
        <br />
        If you write a function component and realize you need to add some state
        to it, previously you had to convert it to a class. Now you can use a
        Hook inside the existing function component. We’re going to do that
        right now!
        <br />
        <h3>The following are the hooks with example</h3>
      </article>
      <br />
      <br />

      <div id="Grid">
        <Link to="UseState">
          <div className="Hook">
            <h3>UseState</h3>
            <p className="para">
              Hook uses useState() functional component for setting and
              retrieving state. Let us understand Hook state with the following
              example.
            </p>
          </div>
        </Link>
        <div className="Hook">
          <h3>UseEffect</h3>
          <p>
            The Effect Hook lets you perform <b>side effects</b>in{" "}
            <b>functional components</b>.It is a close replacemnet for{" "}
            <b>componetDidMount, componentDidUpdate</b> and{" "}
            <b>componentWithUnmont</b>
          </p>
        </div>
        <div className="Hook">
          UseState
          <p>update State</p>
        </div>
      </div>
    </>
  );
};
export default Header;
