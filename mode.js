//select
let theme = document.querySelector('#selectThame');
//html
let html = document.querySelector('html');

//function outer of addEventListener
function update(bgColor, textoColor){
    html.style.backgroundColor = bgColor;
    html.style.color = textoColor;
}

theme.addEventListener('change', function(){
   //the validate value from..
   theme.value === 'darkMode'? 
   update('black','white')
   :
   update('white', 'black');         
    
    
    
});
