import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button
                className="button btn button-light"
                type="button">
                All employees
            </button>
            <button
                className="button btn button-outline-light"
                type="button">
                To grow up
            </button>
            <button
                className="button btn button-outline-light"
                type="button">
                Salary more 1000$
            </button>
        </div>
    );
}

export default AppFilter;
