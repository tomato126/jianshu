import * as constants from './constants'
import { fromJS } from 'immutable' /* 把js对象转换为immutable对象 */

const defaultState = fromJS({
  focused: false,
  mouseIn:false,
  list: [],
  page: 1,
  totalPage: 1
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS :
      //immutable对象的set方法，会结合之前immutable对象的值
      //和设置的值，返回一个全新的对象，并不会修改原来的数据
      return state.set('focused', true)
    case constants.SEARCH_BLUR :
      return state.set('focused', false)
    case constants.CHANGELIST :
      /* return state.set('list', action.data).set('totalPage',action.totalPage) */
      /* 当.set需要的次数很多时，可以用merge */
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    case constants.MOUSE_ENTER :
      return state.set('mouseIn',true)
    case constants.MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case constants.CHANGE_PAGE:
      return state.set('page', action.page)
    default:
      return state;
  }
}