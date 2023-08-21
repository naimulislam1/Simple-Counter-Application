// // selecte dom element
// const counterEl = document.getElementById("counter");
// const incrementEl = document.getElementById("increment");
// const decrementEl = document.getElementById("decrement");

// // initial state
// const initialState = {
//   value: 0,
// };

// // create reducer fuction
// function counterReducer(state = initialState, action) {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       value: state.value + 1,
//     };
//   } else if (action.type === "decrement") {
//     return {
//       ...state,
//       value: state.value - 1,
//     };
//   } else {
//     return state;
//   }
// }

// // crete store
// const store = Redux.createStore(counterReducer);

// const render = () => {
//   const state = store.getState();
//   counterEl.innerText = state.value.toString();
// };

// // update UI iniitially
// render();

// store.subscribe(render);

// // button click listener
// incrementEl.addEventListener("click", () => {
//   store.dispatch({
//     type: "increment",
//   });
// });

// decrementEl.addEventListener("click", () => {
//   store.dispatch({
//     type: "decrement",
//   });
// });

// select DOM element
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// intial state
const initialState = {
  value: 0,
};

// create reducer function
function counterReducer(state = initialState, action) {
  if (action.type === "increment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - 1,
    };
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};

// update UI iniitially
render();

store.subscribe(render);

// button click listener
incrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "increment",
  });
});

decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});
