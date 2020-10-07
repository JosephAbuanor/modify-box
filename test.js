array = document.getElementsByName('cssProperty');
for (let i = 0; i < array.length; i++)
{
  console.log(array[i]);
  array[i].addEventListener('change', property);
}


function property(){
  value = this.value
  id = this.id

  newlol = document.getElementById("modify").style

  if (id == "background"){newlol.background = value}
  else if(id == "width"){newlol.width = value}
  else if(id == "height"){newlol.height = value}






}
