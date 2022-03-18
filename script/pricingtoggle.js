document.querySelector('.round').addEventListener('click', function(){
    var val = document.querySelector('.container').classList.toggle('month')
    if (val){
      for(var i = 0; i <= 3; i++){
        document.getElementsByClassName('month-price')[i].style.display = 'block';
        document.getElementsByClassName('year-price')[i].style.display = 'none';
      }
    }
    else{
      for(var i = 0; i <= 3; i++){
        document.getElementsByClassName('month-price')[i].style.display = 'none';
        document.getElementsByClassName('year-price')[i].style.display = 'block';
      }
    }
  })