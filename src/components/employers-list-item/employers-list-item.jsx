import React, { Component } from 'react';
import Cookie from '../../img/cookie.png'
import Trash from '../../img/trash.png'
import './employers-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: false,
            like: false,
            trash: { Trash }
        }
    }

    onIncrease = () => {
        this.setState(({ increase }) => ({ //деструктуріруєм ({}) => ({})
            increase: !increase
        }))
    }

    onLike = () => {
        this.setState(({ like }) => ({
            like: !like
        }))
    }

    render() {
        const { name, salary, onDelete } = this.props;
        const { increase, like } = this.state;

        let classNames = "list-group-item d-flex justify-content-between"; // це якщо користувач клікнув на одне із імен(шоб мінявся колір імені)
        if (increase) {
            classNames += ' increase ';
        }
        if (like) {
            classNames += ' like';
        }

        return (
            <li className={classNames}>
                <span className="list-group-item-label" onClick={this.onLike}>{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + "$"} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={this.onIncrease}>
                        {/* <i className='fas fa-cookie'></i> */}
                        <img src={Cookie} alt="cookie" />
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}> {/*визов знаходиця на employers list => app*/}
                        {/* <i className="fas fa-trash"></i> */}
                        <img src={Trash} alt="" />
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;
