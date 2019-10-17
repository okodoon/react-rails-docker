export interface CounterState {
  num: number,
  isPlusmode: boolean,
  history: string[],
}
const COUNTER_INITIAL_STATE = {
  history: [],
  isPlusmode: true,
  num: 0,
};

type Actions = {
  type: "INCREMENT";
} | {
  type: "DECREMENT";
} | {
  type: "CHANGEFUNC";
}

const plusMessage = `足したにゃ`
const minusMessage = `引いたにゃ`

export const counterReducer = (state: CounterState = COUNTER_INITIAL_STATE, action:Actions) => {
  const dt = new Date()
  switch (action.type) {
    case 'INCREMENT':
      return (
        Object.assign(
          {}, state, {
            history: [...state.history, dt.getHours() + "時" + dt.getMinutes() + "分" + plusMessage],
            num: state.num + 1 ,
          }
        )
      )
    case 'DECREMENT':
      if (state.num >0) {
        return (
          Object.assign(
            {}, state, {
              history: [...state.history, dt.getHours() + "時" + dt.getMinutes() + "分" + minusMessage],
              num: state.num - 1 ,
            }
          )
        )
      }
    case 'CHANGEFUNC':
      return {
        ...state,
        isPlusmode: !state.isPlusmode,
      };
    default:
      return state
  }
}