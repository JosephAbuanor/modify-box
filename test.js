
function background(){
  bg = document.getElementById('background').value
  document.getElementById("modify").style.background = bg;
}

function width(){
  width = document.getElementById('width').value
  document.getElementById("modify").style.width = width;
}

function height(){
  height = document.getElementById('height').value
  document.getElementById("modify").style.height = height;
}


document.getElementById('background').addEventListener('change',background);
document.getElementById('width').addEventListener('change',width);
document.getElementById('height').addEventListener('change',height);
