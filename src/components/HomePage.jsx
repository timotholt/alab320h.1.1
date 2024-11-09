import { Header } from './Header';
import { SearchBar } from './SearchBar';
import { EmployeeList } from './EmployeeList';

export function HomePage({ employees }) {
    
  // Check if 'employees' is an array
  if (!Array.isArray(employees)) {
    console.error(
      `Error: 'employees' prop is not an array. Expected an array of employee objects. Received: ${typeof employees}`
    );
    console.log('Received data:', employees);

    // Consider returning a more informative error message to the user
    return (
      <div className="error-message">
        An error occurred while fetching employee data. Please try again later.
      </div>
    );
  }

  const style = { border: '0.1rem solid gold', margin: "0.2rem",padding: '0.3rem', width: 'auto' };

  return (
    <div className="homepage-container" style={style}>
      <Header title="Employee Directory" />
      <SearchBar />
      <EmployeeList employees={employees} />
    </div>
  );
}