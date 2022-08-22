import axios from "axios";
import { Dispatch } from "redux";

import { TodosAction, TodosActionTypes } from "../../types/todos";

export const fetchTodos = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodosAction>) => {
    try {
      dispatch({ type: TodosActionTypes.FETCH_TODOS });
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
      );
      // const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
      //   params: { _page: page, _limit: limit }
      // });
      setTimeout(() => {
        dispatch({ type: TodosActionTypes.FETCH_TODOS_SUCCESS, payload: response.data })
      }, 500)

    } catch (error) {
      dispatch({ type: TodosActionTypes.FETCH_TODOS_ERROR, payload: `Todos loading error: ${error}` })
    }
  };
};

export const setTodosPage = (page: number): TodosAction => {
  return { type: TodosActionTypes.SET_TODOS_PAGE, payload: page }
};