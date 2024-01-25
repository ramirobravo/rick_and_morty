import { createStore, applyMiddleware, compose } from 'redux';
import {thunk} from 'redux-thunk';
import rootReducer from './reducer/rootReducer';

// const composed = compose( window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk))
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
// const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;











// import { createStore, applyMiddleware, compose } from "redux";
// import { thunk } from "redux-thunk";
// import rootReducer from './reducer/rootReducer';


// const customMiddleware = store => next => action => {
//     // Puedes realizar lógica personalizada aquí antes de que la acción alcance el reducer
//     return next(action);
// };
// // const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS
// const middleware = applyMiddleware(thunk, customMiddleware);

// const store = createStore(rootReducer, middleware);

// export default store;



