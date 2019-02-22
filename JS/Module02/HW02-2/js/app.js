'use strict';


const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let userPassword;
let gess;




do{

  userPassword = prompt ('Введите пароль', '');
  gess = passwords.includes (userPassword);
  if ( userPassword === null){
      break;
  } 
  attempts -= 1;
   if (!gess && attempts > 0){
    alert (`Неверный пароль, у вас осталось ${attempts} попыток `);
  }else if (!gess && attempts === 0){
    alert ('У вас закончились попытки, аккаунт заблокирован!');        

  } else {
    alert ('Молодец!');
    break; 
    }
}while (attempts>0 );
