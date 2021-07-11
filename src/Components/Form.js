import React from 'react';
import * as actions from '../redux/actions';
import { connect } from 'react-redux';
import buttonStyles from '../styles/button.module.css';
import styles from '../styles/Form.module.css';

function Form({ onContactAdd }) {
    return <form onSubmit={onContactAdd} className={styles.formBox}>
        <label> <p>Name:</p>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
            />
        </label>

        <label> <p>Telephone number:</p>
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять из цифр, может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
            />
        </label>

        <button type="submit" className={buttonStyles.button}> Add a contact</button>
    </form>
}

const mapStateToProps = state => {
    console.log(state);
    return {
        contacts: state.rootReducer.contacts.items,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onContactAdd: (e) => {
            e.preventDefault();
            const name = e.target.name.value
            const number = e.target.number.value
            e.target.name.value = '';
            e.target.number.value = '';

            return dispatch(actions.addNumber(name, number))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);