import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group"> 
            <button
                className="button-filter"
                type="button">
                All employees
            </button>
            <button
                className="button-filter"
                type="button">
                To grow up
            </button>
            <button
                className="button-filter"
                type="button">
                Salary more 1000$
            </button>
        </div> //bootstrap class btn-group
    );
}

export default AppFilter;
