import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employees-add-form';

import './app.css';

//використовуємо класи коли нам треба буде динамиічно змінювати елементи на сторінці 
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { name: "Hoffman A", salary: "800", increase: false, id: 1 },
                { name: "Smith J", salary: "5000", increase: true, id: 2 },
                { name: "Richards N.", salary: "3000", increase: false, id: 3 },
            ]
        }
        this.maxId = 5;
    }

    deleteItem = (id) => { //удаляєм працівника
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => { //добавляємо нового працівника
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newData = [...data, newItem];
            return {
                data: newData
            }
        })
    }

    render() {
        const { data } = this.state;

        return (
            <div className="app">
                <AppInfo />

                <div className="panel-search">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployersList
                    data={data}
                    onDelete={this.deleteItem} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;