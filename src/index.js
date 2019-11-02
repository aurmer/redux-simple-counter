const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
let counterStoreArray = [createStore(reducer)];
initCounterStore(counterStoreArray[0],'counter1')


function initCounterStore(counterStore,id) {
  console.log(id)
  // Re-render the application every time the state changes
  // Here we pass the Redux state to our render method (defined globally in render.js)
  counterStore.subscribe(() => render(counterStore.getState(),id))

  // Dispatch the "INCREMENT" action every time the +1 button is pressed
  const incrementButton = document.querySelector(`#${id} .increment`);
  incrementButton.addEventListener('click', e => counterStore.dispatch({ type: "INCREMENT" }));

  const addFiveButton = document.querySelector(`#${id} .add5`);
  addFiveButton.addEventListener('click', e => counterStore.dispatch({ type: "ADD_5" }));

  const removeFiveButton = document.querySelector(`#${id} .remove5`);
  removeFiveButton.addEventListener('click', e => counterStore.dispatch({ type: "REMOVE_5" }));

  const colorSelect = document.querySelector(`#${id} .set-color`);
  colorSelect.addEventListener('change', e => counterStore.dispatch(
    {
      type: "SET_COLOR",
      color: colorSelect.value
    }
  ));

  const newValueButton = document.querySelector(`#${id} .set-value`);
  newValueButton.addEventListener('click', e => counterStore.dispatch(
    {
      type: "SET_VALUE",
      newValue: parseInt(window.prompt("What is the new value?"))
    }
  ));
}


const addCounterButton = document.querySelector(`#add-counter`)
addCounterButton.addEventListener('click', function (e) {
  addCounterHTML(counterStoreArray.length + 1)
  counterStoreArray.push(createStore(reducer))
  initCounterStore(counterStoreArray[counterStoreArray.length - 1],'counter' + counterStoreArray.length)
})

function addCounterHTML(id) {
  const counterContainer = document.querySelector(`.counters-container`)
  let newCounter = document.createElement("div")
  newCounter.id = 'counter' + id
  newCounter.innerHTML = `
    <h1 class="counterValue">0</h1>
    <button class="increment">+1</button>
    <button class="add5">+5</button>
    <button class="remove5">-5</button>
    <select class="set-color">
      <option>black</option>
      <option>red</option>
      <option>green</option>
      <option>blue</option>
    </select>
    <button class="set-value">Set value</button>
  `
  counterContainer.appendChild(newCounter)
}
