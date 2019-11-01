import { createStore } from 'redux';
import mathReducer from "./reducers/math-reducer"

const mathStore = createStore(mathReducer);

export default mathStore;