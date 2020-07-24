const LOAD_USER = 'user/LOAD_USER';

export const loadUser = user => ({ type: LOAD_USER, user });

/* 초기 상태 선언 */
const initialState = {
  user : {
      id : null,
      name : null,
  },
};

/* 리듀서 선언 */
// 리듀서는 export default 로 내보내주세요.
export default function user(state = initialState, action) {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        user : action.user
      };
    default:
      return state;
  }
}