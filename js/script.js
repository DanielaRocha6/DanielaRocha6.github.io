function updatePhotos(){
    let max=8;
    let i=1;
    setInterval(function(){
        if(i==top){ i=1;}
        document.getElementById("photos-family-friends").setAttribute("src","./img/"+i+".jpg");
        i++;
      }, 1300);
  }
