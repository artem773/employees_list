import './app-filter.css';

const AppFilter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'All employees', colored: false },
        { name: 'riseEmployees', label: 'To grow up', colored: false },
        { name: 'salaryMoreThen1000', label: 'Salary more 1000$', colored: false }
    ];
    const buttons = buttonsData.map(({ name, label, colored }) => {
        const active = props.filter === name;
        const clazz = active ? '-selected' : '';
        const style = colored ? { color: 'white' } : null;

        return (
            <button
                className={`button-filter${clazz}`}
                type="button"
                key={name}
                onClick={() => props.onFilterSelect(name)}
                style={style}>
                {label}
            </button >
        )
    })
    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
}

export default AppFilter;
