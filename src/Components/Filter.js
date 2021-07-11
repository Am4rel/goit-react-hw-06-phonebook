import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import styles from '../styles/Filter.module.css'

function Filter({ onFilter }) {
    return (
        <div className={styles.filterField}>
            <h2>Contacts</h2>
            <label> <p>Find contact by name:</p>
                <input type="text" name="filter" onChange={onFilter}></input>
            </label>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        filter: state.rootReducer.contacts.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFilter: (e) => {
            const value = e.target.value;
            return dispatch(actions.filter(value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);