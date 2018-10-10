// document.addEventListener("click", function(){
//     document.getElementById("bg").innerHTML = "Hello World!";
// });

document.addEventListener("click", function() {
  document.getElementById("demo").innerHTML = "Hello World!";
});


var newBackground = document.getElementById('bg'),
  colors = ['grey', 'green', 'red'];

bg.onclick = function() {
  color = colors.shift();
  colors.push(color);
  bg.style.backgroundColor = color
}