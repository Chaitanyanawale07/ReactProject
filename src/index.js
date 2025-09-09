import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// const element = React. createElement(
//   'div',{className: 'my-container'},
//   React.createElement('h1', null, 'hello, All!'),
//    React.createElement('p', null, 'Welcome to ITvedant!'),
//     React.createElement('p', null, 'Bye Bye!'),
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);

// const root1=document.getElementById('root1');
// const root2=ReactDOM.createRoot(document.getElementById('root2'));

// setInterval(()=>{
//   root1.innerHTML = `
//   <div>
//     <h1>hello Actual DOM </h1>
//     <b>${new Date().toLocaleTimeString()}<b/>
//   </div>`;

//   root2.render(
//     <div>
//       <h1>hello Virtual DOM</h1>
//       <p>${new Date().toLocaleTimeString()}</p>
//     </div>
//   );
// },
// 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
