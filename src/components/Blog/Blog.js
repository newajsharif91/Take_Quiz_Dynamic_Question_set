import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog pt-20">
      <div>
        <img src="" alt="" />
      </div>

      <div className="pt-5 w-4/5 mx-auto">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bgc rounded-lg"
        >
          <div className="collapse-title text-xl font-medium text-white">
            Whats is the Purpose of react React Rout?
          </div>
          <div className="collapse-content">
            <p className="text-lg text-white">
              React Router is an API for React applications.React Router, and
              dynamic, client-side routing, allows us to build a single-page web
              application with navigation without the page refreshing as the
              user navigates. React Router uses component structure to call
              components, which display the appropriate information. <br />
              <br />
              <span className="font-bold">Using React Router </span> <br />
              First, install React Router, using either yarn or npm. <br />
              yarn add react-router-dom <br />
              npm install react-router-dom
            </p>
          </div>
        </div>
      </div>

      <div className="pt-5 w-4/5 mx-auto">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bgc rounded-lg"
        >
          <div className="collapse-title text-xl font-medium text-white">
            How does context API works?
          </div>
          <div className="collapse-content">
            <p className="text-lg text-white">
              <span className="font-bold text-white">What is Context API?</span>
              <br />
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux. <br />
              <span className="font-bold text-white">
                React context API: How it works?
              </span>{" "}
              <br />
              React.createContext() is all you need. It returns a consumer and a
              provider. Provider is a component that as it's names suggests
              provides the state to its children. It will hold the "store" and
              be the parent of all the components that might need that store.
              Consumer as it so happens is a component that consumes and uses
              the state. More information can be found on React's documentation
              page
            </p>
          </div>
        </div>
      </div>

      <div className="pt-5 w-4/5 mx-auto">
        <div
          tabIndex={0}
          className="collapse collapse-plus border border-base-300 bgc rounded-lg"
        >
          <div className="collapse-title text-xl font-medium text-white">
            What us useRef() and hou its works?
          </div>

          <div className="collapse-content">
            <p className="text-lg text-white">
              <span>
                useRef() is a hook API of react. it accepts one argument as the
                initial value and returns a reference. A reference is an object
                having a special property current.
              </span>{" "}
              <br />
              <span>
                useRef returns a mutable ref object whose .current property is
                initialized to the passed argument (initialValue).
              </span>
              <br />
              Essentially, useRef is like a “box” that can hold a mutable value
              in its .current property. <br />
              You might be familiar with refs primarily as a way to access the
              DOM. If you pass a ref object to React with , React will set its
              .current property to the corresponding DOM node whenever that node
              changes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
