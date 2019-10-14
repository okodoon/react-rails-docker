const counterReducer = (state:number = 0, action:any) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      if (state >0) {
        return state - 1
      }  
    default:
      return state
  }
}

export default counterReducer