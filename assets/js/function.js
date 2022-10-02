

const dataCheck = (msg, type = 'danger') => {

    return `<p class="alert alert-${type} d-flex justify-content-between" role="alert">${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>`;
}


const emailCheck = (email) => {
    let pattern = /^[a-z0-9\._]{1,}@[a-z0-9]{1,}\.[a-z]{1,4}$/;
    return pattern.test(email)
}

const cellCheck = (cell) => {
    let pattern = /^(01|8801|\+8801)[0-9]{9}$/;
    return pattern.test(cell)
}