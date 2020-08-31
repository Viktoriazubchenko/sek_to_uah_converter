// let options = {
//     background: 'red',
//     width: 100,
//     height: 100,
//     font: {
//         size: '15px',
//         color: 'white'
//     }
// };

// console.log(JSON.stringify(options));

// console.log(JSON.parse(JSON.stringify(options)).background);
let inputSek = document.getElementById('sek');
let inputUah = document.getElementById('uah');

inputSek.addEventListener('input', function(){
    let request = new XMLHttpRequest();
    //request.open(method, url, async, login, password);
    // why and where i go to the shop
    request.open('GET', 'js/currency.json');
    // what i will buy in shop
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // i go to shop
    request.send();

    // status (of server) - shop is closed or opened etc.
    // statusText 
    // responceText / responce - assortiment of shop
    // readyState
    request.addEventListener('readystatechange', function(){
        if(request.readyState === 4 && request.status == 200){
            let data = JSON.parse(request.response);
            inputUah.value = (inputSek.value / data.sek).toFixed(2); 
        } else {
            inputUah.value = "Error";
        }
    });

});

inputUah.addEventListener('input', function(){
    let request = new XMLHttpRequest();
    //request.open(method, url, async, login, password);
    // why and where i go to the shop
    request.open('GET', 'js/currency.json');
    // what i will buy in shop
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    // i go to shop
    request.send();

    // status (of server) - shop is closed or opened etc.
    // statusText 
    // responceText / responce - assortiment of shop
    // readyState
    request.addEventListener('readystatechange', function(){
        if(request.readyState === 4 && request.status == 200){
            let data = JSON.parse(request.response);
            inputSek.value = (inputUah.value * data.sek).toFixed(2); 
        } else {
            inputSek.value = "Error";
        }
    });

});
let btn = document.querySelector('.converter_btn');
let sek = document.querySelector('.converter_sek');
let uah = document.querySelector('.converter_uah');
let converter = document.querySelector('.converter');
btn.addEventListener('click', function(){
   if(converter.firstElementChild.classList.contains('converter_sek')){
        sek.parentNode.replaceChild(uah, sek);
        converter.appendChild(sek);
   } else {
        uah.parentNode.replaceChild(sek, uah);
        converter.appendChild(uah);
   }
   
});