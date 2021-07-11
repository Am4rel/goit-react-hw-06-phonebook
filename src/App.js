import React from 'react';
import Form from './Components/Form'
import Filter from './Components/Filter'
import ContactsList from './Components/ContactsList';
import stylesDiv from './styles/boxStyle.module.css'

function App() {
  return (
    <>
      <h2 className={stylesDiv.title}>My phonebook</h2>
      <Form />
      <div className={stylesDiv.divBox}>
        <Filter />
        <ContactsList />
      </div>
    </>
  )
}

export default App;
