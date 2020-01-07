export default function users(
  state = {email: '', password: '', cellphone: ''},
  action,
) {
  switch (action.type) {
    case 'ADD_EMAIL':
      return {...state, email: action.email};
    case 'ADD_PASSWORD':
      return {...state, password: action.password};
    case 'ADD_CELL':
      return {...state, cellphone: action.cellphone};
    default:
      return state;
  }
}
