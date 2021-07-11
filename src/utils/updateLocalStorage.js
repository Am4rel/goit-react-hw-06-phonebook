export function updateStorage(newObj) {
    return localStorage.setItem("contacts", JSON.stringify(newObj));
};

export function readStorage() {
    return JSON.parse(localStorage.getItem("contacts"));
};