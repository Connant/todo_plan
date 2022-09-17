export const ActionType = {
  ADD: 'ADD',
  DELETE: 'DELETE'
}

const initialState = {

};




export const routesReducer = (state = initialState) => {


  switch ('') {

      case ActionType.ADD: {

          return { ...state };
      }

      case ActionType.DELETE:


          return { ...state };

      default:
          return state;
  }
};
