//js - search
 //const API_KEY = '9cbb52e6579c256183b59d31049fbf06';
const search = document.querySelector('.js-search');
const list = document.querySelector('js-list');

//функція як створює розмітку на основі карток
const instruments = [{  
  "poster_path": "/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg",   
  "id": 343611,  
  "original_title": "Jack Reacher: Never Go Back",  
}]
  //  {  
  //"poster_path": "/IfB9hy4JH1eH6HEfIgIGORXi5h.jpg",  
  //"adult": false,  
 // "overview": "Jack Reacher must uncover the truth behind a major government conspiracy in order to clear his name. On the run as a fugitive from the law, Reacher uncovers a potential secret from his past that could change his life forever.",  
  //"release_date": "2016-10-19",  
  //"genre_ids": [  
  //  53,  
   // 28,  
   // 80,  
   // 18,  
  //  9648  
  //],  
  //"id": 343611,  
 // "original_title": "Jack Reacher: Never Go Back",  
  //"original_language": "en",  
  //"title": "Jack Reacher: Never Go Back",  
  //"backdrop_path": "/4ynQYtSEuU5hyipcGkfD6ncwtwz.jpg",  
  //"popularity": 26.818468,  
 // "vote_count": 201,  
 // "video": false,  
  //"vote_average": 4.19  
//}
//створити розмітку
function createMarkup(arr) {
    const markup =arr.map(({id,poster_path,original_title,})=`<li data-id="${id}">
    <img src="${poster_path}" alt="${original_title}">
    <h2>${original_title}</h2>
    <p></p>
</li>`).join('')
  list.innerHTML = markup;
}
createMarkup(instruments);