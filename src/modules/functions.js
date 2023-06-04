export const createAndAppend = function (parent, el_type) {
    const el = document.createElement(el_type);
    parent.appendChild(el);

    return el;
};

export const createList = function (parent, arr) {
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = arr[i];
        parent.appendChild(li);
    }
};
