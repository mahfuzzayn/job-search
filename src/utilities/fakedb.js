// use local storage to manage cart data
const addToDb = (id) => {
    let shoppingCart = getAppliedJobs();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
        localStorage.setItem("applied-jobs", JSON.stringify(shoppingCart));
        return true;
    } else {
        return false;
    }
};

const removeFromDb = (id) => {
    const shoppingCart = getAppliedJobs();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem("applied-jobs", JSON.stringify(shoppingCart));
    }
};

const getAppliedJobs = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem("applied-jobs");
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
};

const deleteAppliedJobs = () => {
    localStorage.removeItem("applied-jobs");
};

export { addToDb, removeFromDb, getAppliedJobs, deleteAppliedJobs };
