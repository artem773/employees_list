import './app-info.css';

const AppInfo = ({ employeesCount, increaseCount }) => {
    return (
        <div className="app-info">
            <h1>Employees list</h1>
            <h3>Count: {employeesCount}</h3>
            <h3>Premium awards: {increaseCount}</h3>
        </div>
    );
}

export default AppInfo;