//sidebar controller
contact_icon = document.getElementById("contact");
flag = true;

contact_icon.onclick = function(){
    let sidebar =  document.getElementById("body3");
    let side = document.getElementById("main-header");
    if(flag){
        sidebar.style.paddingLeft="71px";
        side.style.display = "flex";
    }
    else{
        side.style.display = "none";
        sidebar.style.paddingLeft="21px";
    }
    flag = !flag;
}
