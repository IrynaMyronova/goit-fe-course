const placesInSharm = 15;
const placesInHurgada = 25;
const placesInTaba = 6;


const num = (prompt ('Введите количество необходимых мест', ''));
const numberOfPlaces = Number(num);
const isValidInput = ((numberOfPlaces !== null) && (!isNaN(numberOfPlaces)));

 
    if (num===null){
        alert ('Нам очень жаль, приходите еще!');
    }
 
 else  if ((parseInt(numberOfPlaces)===numberOfPlaces) && ( numberOfPlaces <= 25) && isValidInput ){
   
    if ( (numberOfPlaces >= 1) &&  (numberOfPlaces <= placesInTaba)){

    if ( confirm ( 'Есть нужное Вам количество мест в группе taba. ' +  'Согласны ли Вы быть в этой группе?')) {
 
        alert ('Приятного путешествия в группе taba!');
        
    }else  if (confirm ( 'Есть нужное Вам количество мест в группе hurgada. ' + 'Согласны ли Вы быть в этой группе?')){
        alert ('Приятного путешествия в группе hurgada!');

    } else  if (confirm ( 'Есть нужное Вам количество мест в группе sharm. ' + 'Согласны ли Вы быть в этой группе?')) {
 
        alert ('Приятного путешествия в группе sharm!');

    } else {
        alert ('Нам очень жаль, приходите еще!');
    }
    }

    if  ( (numberOfPlaces > placesInTaba) &&  (numberOfPlaces <= placesInSharm)){
    if (confirm ( 'Есть нужное Вам количество мест в группе hurgada.' + ' Согласны ли Вы быть в этой группе?')){
        alert ('Приятного путешествия в группе hurgada!');

    } else  if (confirm ( 'Есть нужное Вам количество мест в группе sharm.'  + ' Согласны ли Вы быть в этой группе?')) {
 
        alert ('Приятного путешествия в группе sharm!');

    } else {
        alert ('Нам очень жаль, приходите еще!');
    }
    }

    if ( (numberOfPlaces > placesInSharm) &&  (numberOfPlaces <= placesInHurgada)){
    if (confirm ( 'Есть нужное Вам количество мест в группе hurgada. '  + ' Согласны ли Вы быть в этой группе?')){
        alert ('Приятного путешествия в группе hurgada!');

    } else {
        alert ('Нам очень жаль, приходите еще!');
    }
}
}
else if ((parseInt(numberOfPlaces)===numberOfPlaces) && ( numberOfPlaces >= 25) && isValidInput ){
    alert ('Извините, столько мест нет ни в одной группе!');
}
 else  {
alert ('Ошибка ввода');
 }

