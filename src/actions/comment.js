const URL = "https://node-hnapi.herokuapp.com/";

export const getData = (type, page) => 
    dispatch => {
        fetch(`${URL}${type}?page=${page}`)
        .then(res => res.json())
        .then(data => {
            dispatch(receiveData(`${type.toUpperCase()}_LIST`, data));
        })
    };

export const getItem = (id) => 
    dispatch => {
        fetch(`${URL}item/${id}`)
        .then(res => res.json())
        .then(data => {
            dispatch(receiveData('STORY', data));
        })
    };

const receiveData = (type, data) => {
    return {
        type,
        data,
    }
};    