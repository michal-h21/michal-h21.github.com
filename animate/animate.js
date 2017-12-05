function add_animations(cls){
  var elements = document.querySelectorAll(cls);
  elements.forEach(function(value, index, obj){
    console.log(value + ", " + index + ", "+ obj + ", "+ this);
    var next = 0;
    var reset = function(){next=0};
    var curr_obj = obj[index];
    var images = curr_obj.querySelectorAll("img");
    setInterval(function(){
      images.forEach(function(val, i, newobj){
        newobj[i].style.display="none";
      });
      if(next < images.length-1){ next++} else {reset()}
      console.log("next: "+ next);
      images[next].style.display = "block";
    }, 100);
  });
}

add_animations(".animateinline");

