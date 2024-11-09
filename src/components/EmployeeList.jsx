import EmployeeListItem from "./EmployeeListItem";
export function EmployeeList({ employees }) {

    const style = {
        border: "0.1rem solid magenta",
        margin: "0.2rem",
        padding: "0.2rem",}

    // is employees an array
    if (!Array.isArray(employees)) {
        console.error("employees is not an array");
        return null;
    }


    return (
        <div className="employee-list-container">
            {employees.map(employee => <EmployeeListItem key={employee.name} employee={employee} />)}
        </div>
    );
}
