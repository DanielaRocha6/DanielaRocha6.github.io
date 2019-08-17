function updatePhotos(){
    "use strict";
    let max=8;
    let i=1;
    setInterval(function(){
        if(i==max){ i=1;}
        document.getElementById("photos-family-friends").setAttribute("src","./img/"+i+".jpg");
        i++;
      }, 1400);
  }

  