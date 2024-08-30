var btn =document.querySelector('button');

function random(num) {

    return Math.floor(Math.random() * (num + 1));
}
function change() {

    let rancol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.getElementById('textCol').style.color = rancol;
  }

  
document.addEventListener('click', change);