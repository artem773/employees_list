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
                { name: "Hoffman A", salary: "800", increase: true, rise: false, id: 1 },
                { name: "Smith J", salary: "5000", increase: false, rise: false, id: 2 },
                { name: "Richards N.", salary: "3000", increase: false, rise: true, id: 3 },
            ]
        }
        this.maxId = 4;
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
            rise: false,
            id: this.maxId++
        }
        this.setState(({ data }) => {
            const newData = [...data, newItem];
            return {
                data: newData
            }
        })
    }

    // onToggleIncrease = (id) => { //премія працівнику по id
    //     // this.setState(({ data }) => {
    //     //     const index = data.findIndex(elem => elem.id === id); //знаходимо елементе по індексу, чі індекс дорівнює тому індексу шо приходить нам з id

    //     //     const old = data[index]; //записуємо старий масів з тим індексом шо ми знайшли 
    //     //     const newItem = { ...old, increase: !old.increase };
    //     //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]; //создаємо новий масів

    //     //     return {
    //     //         data: newArr
    //     //     }
    //     // })

    //     другий спосіб 

    //     this.setState(({ data }) => ({ //
    //         data: data.map(item => {
    //             if (item.id === id) {
    //                 return { ...item, increase: !item.increase } //розвертаємо новий масів у якого значення increase протіположне(true || false)
    //             }
    //             return item;
    //         })
    //     }))
    // }

    onToggleProp = (id, prop) => { // 1а функція шо переключає increase і rise 
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, [prop]: !item[prop] }
                }
                return item;
            })
        }))
    }

    render() {
        const { data } = this.state;
        const employeesCount = this.state.data.length; // вся кількість працівників в data
        const increaseCount = this.state.data.filter(item => item.increase === true).length; //к-сть працівників шо з надбавкою по зп 
        return (
            <div className="app">
                <AppInfo
                    employeesCount={employeesCount}
                    increaseCount={increaseCount} />

                <div className="panel-search">
                    <SearchPanel />
                    <AppFilter />
                </div>

                <EmployersList
                    data={data}
                    onDelete={this.deleteItem}
                    // onToggleIncrease={this.onToggleIncrease}
                    onToggleProp={this.onToggleProp} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;