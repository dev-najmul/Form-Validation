
const name  = document.getElementById('name');
const email  = document.getElementById('email');
const cell  = document.getElementById('cell');
const username  = document.getElementById('username');

const user_data_reg  = document.getElementById('user_data_reg');

const submit  = document.getElementById('submit');
const msg = document.querySelector('.msg');
const nameReq = document.querySelector('.nameReq');
const emailReq = document.querySelector('.emailReq');
const cellReq = document.querySelector('.cellReq');
const usernameReq = document.querySelector('.usernameReq');
const sound = document.querySelector('.sound');


//Display submited data

const udName = document.getElementById('udName');
const udEmail = document.getElementById('udEmail');
const udCell = document.getElementById('udCell');
const udUName = document.getElementById('udUName');
const dpData = document.getElementById('dpData');



user_data_reg.addEventListener ('submit' , (event) =>{
    event.preventDefault();


    if(name.value == ''){
        nameReq.innerHTML = '*requerd';
        nameReq.style.color = 'red';
        name.style.borderColor = 'red';

        name.onkeyup = () => {
            nameReq.innerHTML = '';
            name.style.borderColor = '#ced4da';
            name.style.backgroundColor = '#e8f0fe';
        } 
    }else{
        nameReq.innerHTML = '';
        name.style.borderColor = '#ced4da';  
    }



    if(email.value == ''){
        emailReq.innerHTML = '*requerd';
        emailReq.style.color = 'red';
        email.style.borderColor = 'red';

        email.onkeyup = () => {
            emailReq.innerHTML = '';
            email.style.borderColor = '#ced4da';
            email.style.backgroundColor = '#e8f0fe';
        }
    }else{
        emailReq.innerHTML = '';
        email.style.borderColor = '#ced4da';
    }



    if(cell.value == ''){
        cellReq.innerHTML = '*requerd';
        cellReq.style.color = 'red';
        cell.style.borderColor = 'red';

        cell.onkeyup = () => {
            cellReq.innerHTML = '';
            cell.style.borderColor = '#ced4da';
            cell.style.backgroundColor = '#e8f0fe';
        }
    }else{
        cellReq.innerHTML = '';
        cell.style.borderColor = '#ced4da';
    }



    if(username.value == ''){
        usernameReq.innerHTML = '*requerd';
        usernameReq.style.color = 'red';
        username.style.borderColor = 'red';

        username.onkeyup = () => {
            usernameReq.innerHTML = '';
            username.style.borderColor = '#ced4da';
            username.style.backgroundColor = '#e8f0fe';
        }
    }else{
        usernameReq.innerHTML = '';
        username.style.borderColor = '#ced4da';
    }





    if (name.value == '' || email.value == '' || cell.value == '' || username.value == ''){
        msg.innerHTML = dataCheck('Data can\'t be empty.');
    } else if ( emailCheck (email.value) == false ){
        msg.innerHTML = dataCheck ('invalid email', 'info')
    }else if( cellCheck(cell.value) == false){
        msg.innerHTML = dataCheck ('invalid cell', 'info')
    } else{
        msg.innerHTML = dataCheck('Data stable','success');
        sound.play()

        dpData.style.display = 'block';

        udName.innerHTML = 'Name: '+ name.value;
        udEmail.innerHTML = 'Email: '+ email.value;
        udCell.innerHTML = 'Cell: '+ cell.value;
        udUName.innerHTML = 'Username: '+ username.value;

    }
})







