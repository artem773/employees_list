import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                { name: "Hoffman A", salary: "800", increase: false, id: 1 },
                { name: "Smith J", salary: "5000", increase: true, id: 2 },
                { name: "Richards N.", salary: "3000", increase: false, id: 3 },
                { name: "Stievens K.", salary: "500", increase: false, id: 4 }
            ]
        }
    }
    
    deleteItem = (id) => {
        this.setState(({data}) => {

            //создаем новий массів data но у же без того обьекта что ми удаляем
            //const index = data.findIndex(elem => elem.id === id); //находім елемент із масіва по індексу которий содежіт id (унікальний ідентефікатор)
            //сложний способ
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);
            // const newArr = [...before, ...after];
            //легкій способ - filter()
            return{
                data: data.filter(item => item.id !== id)
            }
        })
    }

    render(){

        return (
            <div className="app">
                <AppInfo />
    
                <div className="search-panel">
                    <SearchPanel />
                    <AppFilter />
                </div>
    
                <EmployersList 
                    data={this.state.data}
                    onDelete={this.deleteItem} />
                <EmployeesAddForm />
            </div>
        );
    }
}

export default App;