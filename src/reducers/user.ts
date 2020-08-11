/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: Shentong
 * @Date: 2020-08-10 18:58:33
 * @LastEditors: Shentong
 * @LastEditTime: 2020-08-10 19:04:48
 */

import { UPDATE_USER } from "../constants/counter";

const INITIAL_STATE = {
  is_portrayal: 1,
  is_skip: 0,
  phone: "15591611037",
  status: 1,
  token: "FD212B91EAE41A5B703DD84799463DC3",
};

export default function counter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        token: state.token + 1,
      };
    default:
      return state;
  }
}