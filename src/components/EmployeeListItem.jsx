import React from 'react';

export default function EmployeeListItem({ employee }) {
  return (
    <div style={{
      border: '0.1rem solid red',
      margin: '0.2rem',
      padding: '0.3rem',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        padding: '0.2rem',
        flex: '0 0 auto',
        width: '40px' // Adjust width as needed
      }}>
        <img src="public\icon-5359553_1280.webp" alt="Avatar" width="40px" height="40px" />
      </div>
      <div style={{
        flex: 1,
        fontSize: '0.8rem',
        fontWeight: 'normal',
        color: 'black',
        textAlign: 'left',
        marginTop: '-0.6rem',
        marginLeft: '0.2rem'
      }}>
        <div><strong>{employee.name}</strong></div>
        <div style={{ fontSize: '0.7rem', color: '#777' }}>
            {employee.title}</div>
      </div>
    </div>
  );
}