export function addUser(contact) {
    return {
        type: 'ADD_USER',
        contact
    }
}


function reducer(prevState = {contactList:[]}, action){
    switch (action.type) {
        case 'ADD_USER':
            return {
               contactList: [...prevState.contactList, action.contact]
            } 
        default:
            return prevState
    }
}

export default reducer;

