const checkList = (contacts, value) => {
    return contacts.items.filter(item => item.name.toString().toLowerCase() === value.toString().toLowerCase()).length
}

export default checkList;