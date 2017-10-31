window.onload=function(){

    var input=document.getElementById('inp');
    var btn=document.getElementById('btn');
    btn.onclick=function()
    {
      var  value=input.value;
      Additem(value,"Active");
        input.value="";
        Display();

      //gettodos();
    }
Display()
}
