export default function users(
  state = {email: '', password: '', course: 'ADMINISTRAÇÃO'},
  action,
) {
  switch (action.type) {
    case 'ADD_EMAIL':
      return {...state, email: action.email};
    case 'ADD_PASSWORD':
      return {...state, password: action.password};
    case 'ADD_COURSE':
      return {...state, course: action.course};
    default:
      return state;
  }
}
