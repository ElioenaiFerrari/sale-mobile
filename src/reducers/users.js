export default function users(state = {}, action) {
  switch (action.type) {
    case 'ADD_EMAIL':
      return {...state, email: action.email};
    case 'ADD_PASSWORD':
      return {...state, password: action.password};
    case 'ADD_CELL':
      return {...state, cellphone: action.password};
    default:
      return state;
  }
}
