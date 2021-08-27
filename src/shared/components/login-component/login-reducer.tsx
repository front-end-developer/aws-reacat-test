export const loginReducer = (state: any, action: any) => {
    switch (action.type) {
      case 'field':
        return {
          ...state,
          [action.field]: action.value
        }
      case 'login':
        return {
          ...state,
          isLoading: true,
          isError: ''
        }
      case 'success':
        return {
          ...state,
          isLoggedin: true,
          isLoading: false
        }
      case 'error':
        return {
          ...state,
          isError: 'incorrect username or password',
          isLoading: false,
          username: '',
          password: '',
        }
      case 'logout':
        return {
          ...state,
          isLoggedin: false,
          username: '',
          password: ''
        }
        break;
    }
    return state;
  }