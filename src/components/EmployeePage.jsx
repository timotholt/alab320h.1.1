
import { Header } from './Header';

export function EmployeePage(employeeList) {

    const style = {
        border: "0.1rem solid gold",
        margin: "0.2rem",
        padding: "0.3rem",
        width: "auto"};

    return (
        <div style={style}>
            <Header title="Employee"/>
        </div>
    )
}
