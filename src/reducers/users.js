export default function users(
  state = {email: '', password: '', cellphone: '', token: ''},
  action,
) {
  switch (action.type) {
    case 'ADD_EMAIL':
      return {...state, email: action.email};
    case 'ADD_PASSWORD':
      return {...state, password: action.password};
    case 'ADD_CELL':
      return {...state, cellphone: action.cellphone};
    case 'ADD_TOKEN':
      return {...state, token: action.token};
    case 'ADD_NAME':
      return {...state, name: action.name};
    default:
      return state;
  }
}
