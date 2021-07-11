import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { updateStorage } from '../utils/updateLocalStorage';
import styles from '../styles/ContactList.module.css'
import buttonStyles from '../styles/button.module.css'

function ContactsList({ contacts, filter, onContactDelete }) {
    const contactList = filter !== "" ?
        contacts.filter(contact => { return contact.name.toString().toLowerCase().includes(filter.toString().toLowerCase()) }) :
        contacts;

    updateStorage(contacts)

    return (
        <ul className={styles.list}>
            {contactList.map(contact =>
                <li id={contact.id} key={contact.id} className={styles.listItem}>
                    <p><b>Name: </b>{contact.name}</p>
                    <p><b>Number: </b>{contact.number}</p>
                    <button type="button" onClick={onContactDelete} className={buttonStyles.button}>Delete</button>
                </li>)
            }
        </ul >
    )
}

const mapStateToProps = state => {
    return {
        contacts: state.rootReducer.contacts.items,
        filter: state.rootReducer.contacts.filter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onContactDelete: (e) => {
            const id = e.target.parentElement.id;
            return dispatch(actions.deleteNumber(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);