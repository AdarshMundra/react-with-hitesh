# ReduxToolkit


## step
``` text
step1 : create a file store.js in the folder app in src

    -> import {configureStore} from '@reduxjs/toolkit';
    -> export const store = configureStore({})

step2 : create a file todoSlice.js in the folder features/todo in src
    -> import {createSlice, nanoid } from '@reduxjs/toolkit';
    -> const initialState = {todos: [{id: 1, text: "Hello world"}]}
    -> export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {},
        removeTodo: (state, action) => {}
        }
    })

    -> export const {addTodo, removeTodo} = todoSlice.actions
    -> export default todoSlice.reducer

step3 chamge step 1 
    -> import todoReducer from '../features/todo/todoSlice';
    -> export const store = configureStore({reducer: todoReducer})

step4 cretate compnents
    -> import {useDispatch} from 'react-redux'
    -> import {addTodo} from '../features/todo/todoSlice' 
    -> create State
    -> use dipatch dispatch(addTodo(input))

step5 selector
    -> const todos = useSelector(state => state.todos)
    -> const dispatch = useDispatch()
    ->{todos.map(todo) => (<li key={todo.id}>{todo.text}
    onClick={() => dispatch(removeTodo(todo.id))}
    </li>)}

step main.jsx
import { Provider } from 'react-redux'
import {store} from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)



```
