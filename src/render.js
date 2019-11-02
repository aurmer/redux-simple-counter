const render = (state,id) => {
    const counterDOM = document.querySelector(`#${id} .counterValue`);
    counterDOM.innerHTML = `<span style="color:${state.color}">${state.value}</span>`;
}
