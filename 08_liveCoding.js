    let area = document.querySelector('textarea');  //Dans le document css je selectionne  l'element textarea
    let iframe = document.querySelector("iframe");  //Dans le document css je selectionne  l'element iframe
    const elem = document.getElementById("myBar");
    const counter = document.getElementById('count');
    const maxlength = 200;
    counter.innerHTML = maxlength


    area.onkeyup = area.onkeypress =  function() {

        area.innerHTML = this.value
    
        let progress = 100*html.textContent.length/maxlength
        elem.style.setProperty('width',progress +'%')
    
        if (progress<33){
            elem.style.setProperty('background-color', "green");
        }
        else if (progress >=33 && progress <66)
            elem.style.setProperty('background-color',"orange");
            
        else if (progress >66)
            elem.style.setProperty('background-color',"red");
    };


area.addEventListener('input', function()
        {
            iframe.srcdoc = area.value;
        },);
    
function btn () {
    let area = document.querySelector('textarea');
    area.value += '<b> </b>';
};

function ital () {
    let area = document.querySelector('textarea');
    area.value += '<i> </i>';
};


area.addEventListener('input', event => {

    let backcount = area.value.length;
    const leftCharLenght = maxlength -  event.target.value.length;

    
    // if (leftCharLenght < 0 ) return;
    counter.innerText = leftCharLenght;
    
    if (leftCharLenght == 0) {
        area.setAttribute('maxlength' ,backcount);
    }
    else {
        area.setAttribute('maxlength' ,'');
    }
});

let loading = document.getElementById('img');

area.onfocus = () => {
    loading.style.visibility = "visible";

}
area.onblur = () => {
    loading.style.visibility = "hidden";
    
}



    
  

  