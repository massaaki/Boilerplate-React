import produce from 'immer';
export default function reducerSample(state = [], action) {
  console.log(state);
  switch(action.type) {
    case '@reducerSample/ADD':
      // console.log(state);
      return produce(state, draft => {
        //set changes here
        if(action.item) {
          draft[0] = { item: action.item };
        } else {
          draft.push({item: action.item});
        }

      });
    //-
    default:
      return state;
  }
}
