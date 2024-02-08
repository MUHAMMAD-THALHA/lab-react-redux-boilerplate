import './App.css'
import {createStore, combineReducers} from "redux"
import { Provider } from 'react-redux'
import Counter from './Components/Counter'
import { reducer } from './Components/Reducer'


const rootReducer = combineReducers({
  reducer
});

const store=createStore(rootReducer)


function App() {

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
    
  )
}

export default App