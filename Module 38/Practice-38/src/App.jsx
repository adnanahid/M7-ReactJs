import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Person name='Adnan' age='22'></Person>
      <Person name='Nahid' age='21'></Person>
      <Person></Person>
      <Student name = {'Adnan'} grade={12} Percent={'63%'}></Student>
      <Student  name = {'Hola'} grade={12} Percent={'67%'}></Student>
    </>
  );
}

function Person(pros) {
  return (
    <h2>
      Hi this is {pros.name}. I'm {pros.age} years old
    </h2>
  );
}

const {name, grade, Percent} = {}
function Student({name, grade, Percent}) {
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Class:{grade}</p>
      <p>Percent: {Percent}</p>
    </div>
  );
}

export default App;
