import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employees-add-form';

function App() {

    const data = [
        { name: "Hoffman A", salary: "800", increase: false, id: 1 },
        { name: "Smith J", salary: "5000", increase: true, id: 2 },
        { name: "Richards N.", salary: "3000", increase: false, id: 3 },
        { name: "Stievens K.", salary: "500", increase: false, id: 4 }
    ];

    return (
        <div className="app">
            <AppInfo />

            <div className="search-panel">
                <SearchPanel />
                <AppFilter />
            </div>

            <EmployersList data={data} />
            <EmployeesAddForm />
        </div>
    );
}

export default App;