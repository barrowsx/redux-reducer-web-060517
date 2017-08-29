export function manageFriends(state, action){
  switch(action.type){
    case "ADD_FRIEND":
      if(action.friend.name !== undefined && action.friend.hometown !== undefined && action.friend.id !== undefined){
        return {...state, friends: [...state.friends, action.friend]}
      } else {
        return state;
      }
    case "REMOVE_FRIEND":
      return {...state, friends: state.friends.filter(element => {
        return element.id !== action.id
      })}
    default:
      return state;
  }
}
