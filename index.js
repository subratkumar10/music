var l=document.querySelectorAll(".drum").length;
for(var i=0;i<l;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){addSound(this.innerHTML)});



}
document.addEventListener("keypress",function(event){
  addSound(event.key);
});


function addSound(key)
{
switch(key)
{
  case "w":var a =new Audio("sounds/crash.mp3");
      a.play();
      break;
      case "a":var b =new Audio("sounds/kick-bass.mp3");
          b.play();
          break;
          case "s":var c =new Audio("sounds/snare.mp3");
              c.play();
              break;
              case "d":var d =new Audio("sounds/tom-1.mp3");
                  d.play();
                  break;
                  case "j":var e=new Audio("sounds/tom-2.mp3");
                      e.play();
                      break;
                      case "k":var f=new Audio("sounds/tom-3.mp3");
                          f.play();
                          break;
                          case "l":var g=new Audio("sounds/tom-4.mp3");
                              g.play();
                              break;
                              default:alert("click on the correct button");
}

}
