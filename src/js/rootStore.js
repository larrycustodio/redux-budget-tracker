import { createStore } from 'redux';
import rootReducer from './rootReducer';

//Create a store, attach chrome devtools middleware
const rootStore = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default rootStore;