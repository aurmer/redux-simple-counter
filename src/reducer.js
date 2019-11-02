const initialState = {
    value: 0,
    color: 'black'
}

function deepCopy (x) {
  return JSON.parse(JSON.stringify(x))
}

const reducer = (currentState, action) => {
    // first run; set initial state
    if (!currentState) {
      return deepCopy(initialState)
    }

    let nextState = deepCopy(currentState)

    const { type } = action;
    if (type === "INCREMENT") {
      nextState.value = nextState.value + 1
    }
    else if (type === "ADD_5") {
      nextState.value = nextState.value + 5
    }
    else if (type === "REMOVE_5") {
      nextState.value = nextState.value - 5
    }
    else if (type === "SET_COLOR") {
      nextState.color = action.color
    }
    else if (type === "SET_VALUE") {
      nextState.value = action.newValue
    }

    return nextState
}
