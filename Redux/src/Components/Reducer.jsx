export const reducer = (state = 0, action) => {

    switch (action.type) {
  
      case 'increment':
        return state + 1;
  
      case 'decrement':
        if (state > 0) {
          return state - 1;
        }
        return state;
  
      default:
        return state;
    }
  };