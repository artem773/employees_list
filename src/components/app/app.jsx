import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employees-add-form';

function App(){

    const data = [
        {name: "Hoffman A", salary: "800", increase: false},
        {name: "Smith J", salary: "3000", increase: true},
        {name: "Richards N.", salary: "5000", increase: false},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployersList data={data}/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;