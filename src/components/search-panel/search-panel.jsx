import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term);
    }

    render() {
        const { term } = this.state;
        return (
            <input
                type="text"
                className="form__field"
                placeholder="Search employee.."
                value={term}
                onChange={this.onUpdateSearch} />
        );
    }
}

export default SearchPanel;