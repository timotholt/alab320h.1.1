import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';

import { HomePage } from './components/HomePage';
import { EmployeePage } from './components/EmployeePage';


const employees = [
  { name: 'James King', title: 'President and CEO' },
  { name: 'Julie Taylor', title: 'VP of Marketing' },
  { name: 'Eugene Lee', title: 'CFO' },
  { name: 'John Williams', title: 'VP of Engineering' },
  { name: 'Ray Moore', title: 'VP of Sales' },
  { name: 'Paul Jones', title: 'QA Manager' },
];

function App() {
    const style = {
        border: "0.1rem solid black",
        // width: "100%",
        padding: "0.3rem"};

            // is employees an array
    if (!Array.isArray(employees)) {
        console.error("employees is not an array");
        return null;
    }

  return (
    <div style={style}>
      <div style={{display: "flex", flexDirection: "row", }}>
        <div style={{flex: 1}}>
          <HomePage employees={employees}/>
        </div>
        <div style={{flex: 1}}>
          <EmployeePage employee={employees[0]}/>
        </div>
      </div>
    </div>
  )
}

export default App
