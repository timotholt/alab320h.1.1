
import { Header } from './Header';

export function EmployeePage({employee}) {

    const style = {
        border: "0.1rem solid gold",
        margin: "0.2rem",
        padding: "0.3rem",
        width: "auto"};

    return (
        <div style={style}>
            <Header title="Employee"/>
            <div style={{
      border: '0.1rem solid lightgray',
      margin: '0.2rem',
      padding: '0.3rem',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={{
        padding: '0.2rem',
        flex: '0 0 auto',
        width: '80px',
        height: '80px' // Adjust width as needed
      }}>
        <img src="public\icon-5359553_1280.webp" alt="Avatar" width="80px" height="80px" />
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
        <div style={{
  border: '0.1rem solid lightgray',
  margin: '0.2rem',
  padding: '0.3rem',
  display: 'flex',
  alignItems: 'center'
}}>
  <div style={{
    flex: 1,
    fontSize: '0.8rem',
    fontWeight: 'normal',
    color: 'black',
    textAlign: 'left',
    marginTop: '-0.6rem',
    marginLeft: '0.2rem',
    paddingTop: '0.5rem'
  }}>
    <div><strong>Call Office</strong></div>
    <div style={{ fontSize: '0.7rem', color: '#777' }}>
        {employee.office}</div>
  </div>
    </div>

    <div style={{
  border: '0.1rem solid lightgray',
  margin: '0.2rem',
  padding: '0.3rem',
  display: 'flex',
  alignItems: 'center'
}}>
  <div style={{
    flex: 1,
    fontSize: '0.8rem',
    fontWeight: 'normal',
    color: 'black',
    textAlign: 'left',
    marginTop: '-0.6rem',
    marginLeft: '0.2rem',
    paddingTop: '0.5rem'

  }}>
    <div><strong>Call Mobile</strong></div>
    <div style={{ fontSize: '0.7rem', color: '#777' }}>
        {employee.mobile}</div>
  </div>
    </div>

    <div style={{
  border: '0.1rem solid lightgray',
  margin: '0.2rem',
  padding: '0.3rem',
  display: 'flex',
  alignItems: 'center'
}}>
  <div style={{
    flex: 1,
    fontSize: '0.8rem',
    fontWeight: 'normal',
    color: 'black',
    textAlign: 'left',
    marginTop: '-0.6rem',
    marginLeft: '0.2rem',
    paddingTop: '0.5rem'

  }}>
    <div><strong>SMS</strong></div>
    <div style={{ fontSize: '0.7rem', color: '#777' }}>
        {employee.sms}</div>
  </div>
    </div>
    <div style={{
  border: '0.1rem solid lightgray',
  margin: '0.2rem',
  padding: '0.3rem',
  display: 'flex',
  alignItems: 'center'
}}>
  <div style={{
    flex: 1,
    fontSize: '0.8rem',
    fontWeight: 'normal',
    color: 'black',
    textAlign: 'left',
    marginTop: '-0.6rem',
    marginLeft: '0.2rem',
    paddingTop: '0.5rem'

  }}>
    <div><strong>Email</strong></div>
    <div style={{ fontSize: '0.7rem', color: '#777' }}>
        {employee.email}</div>
  </div>
    </div>
</div>

    )
}
