import { Component } from 'react';
import { nanoid } from 'nanoid'; // рандомно обирає id 

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
                { name: "Hoffman A.", salary: "800", increase: false, rise: false, id: nanoid() },
                { name: "Smith J.", salary: "5000", increase: false, rise: false, id: nanoid() },
                { name: "Richards N.", salary: "3000", increase: false, rise: false, id: nanoid() },
                { name: "Johnson K.", salary: "1800", increase: false, rise: false, id: nanoid() },
                { name: "Clause V.", salary: "2100", increase: false, rise: false, id: nanoid() },
                { name: "Brown N.", salary: "1400", increase: false, rise: false, id: nanoid() },
            ],
            term: '',
            filter: 'all' //default показуємо спочатку усіх працівників 
        }
        this.nextId = 4;
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
            id: nanoid()
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

    //передаємо строку -term- яку ми шукаємо, а items - масів данних шо ми будемо фільтрувати 
    searchEmp = (items, term) => { //метод для пошуку елементів з існуючого списка data по імені 
        if (!term.length) return items; //якшо користувач ввів шось в інпут і одразу видалив, то ми повертаєм ісходний масів items

        return items.filter(item => {
            return item.name.indexOf(term) > -1; // повертаєм елемент з name який співпадає з тим шо ми ввели в інпут (-1 це вивод метода коли немає співпадіння, тому ми стоавимо >-1, шоб знаходило тількі те де є співпадіння ) 
        })
    }

    onUpdateSearch = (term) => { //обновляємо теперішній стан строки 
        this.setState({ term: term });
    }


    filterPost = (items, filter) => {
        switch (filter) {
            case 'riseEmployees':
                return items.filter(item => item.rise === true);
            case 'salaryMoreThen1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter: filter });
    }

    render() {
        const { data, term, filter } = this.state;
        const employeesCount = this.state.data.length; // вся кількість працівників в data
        const increaseCount = this.state.data.filter(item => item.increase === true).length; //к-сть працівників шо з надбавкою по зп 
        const visibleData = this.filterPost(this.searchEmp(data, term), filter); // елеменити шо відображаютсья 

        return (
            <div className="app">
                <AppInfo
                    employeesCount={employeesCount}
                    increaseCount={increaseCount} />

                <div className="panel-search">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect} />
                </div>

                <EmployersList
                    data={visibleData}
                    onDelete={this.deleteItem}
                    // onToggleIncrease={this.onToggleIncrease}
                    onToggleProp={this.onToggleProp} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        );
    }
}

export default App;