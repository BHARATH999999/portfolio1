common_url = "bharath999999";
nt = "_blank"; //nt -> new tab opener

//call icon manager
let call_icon = document.getElementById("call-icon");
call_icon.onmouseover = function(){
    // call_icon.classList.remove('fa-solid');
    // call_icon.classList.add('fa-duotone');
}

call_icon.onmouseleave = function(){
    // call_icon.classList.remove('fa-square-github');
    // call_icon.classList.add('fa-github');
}

call_icon.onclick = function(){
    window.open(`https://www.github.com/${common_url}`, nt);
}

//mail icon manager
let mail_icon = document.getElementById("mail-icon");
mail_icon.onmouseover = function(){
    mail_icon.classList.remove('fa-regular');
    mail_icon.classList.add('fa-solid');
}

mail_icon.onmouseleave = function(){
    mail_icon.classList.remove('fa-solid');
    mail_icon.classList.add('fa-regular');
}

mail_icon.onclick = function(){
    window.open("https://mail.google.com/mail/?view=cm&fs=1&to=bharathdeva9@gmail.com&su=Hii%20Bharath&body=lpf", nt);
}

//github icon manager
let github_icon = document.getElementById("github-icon");
github_icon.onmouseover = function(){
    github_icon.classList.remove('fa-github');
    github_icon.classList.add('fa-square-github');
}

github_icon.onmouseleave = function(){
    github_icon.classList.remove('fa-square-github');
    github_icon.classList.add('fa-github');
}

github_icon.onclick = function(){
    window.open(`https://www.github.com/${common_url}`, nt);
}

//insatgram icon manager
let instagram_icon = document.getElementById("instagram-icon");
instagram_icon.onmouseover = function(){
    instagram_icon.classList.remove('fa-instagram');
    instagram_icon.classList.add('fa-square-instagram');
}

instagram_icon.onmouseleave = function(){
    instagram_icon.classList.remove('fa-square-instagram');
    instagram_icon.classList.add('fa-instagram');
}

instagram_icon.onclick = function(){
    window.open(`https://www.instagram.com/${common_url}`, nt);
}

//whatsapp icon manager
let whatsapp_icon = document.getElementById("whatsapp-icon");
whatsapp_icon.onmouseover = function(){
    whatsapp_icon.classList.remove('fa-whatsapp');
    whatsapp_icon.classList.add('fa-square-whatsapp');
}

whatsapp_icon.onmouseleave = function(){
    whatsapp_icon.classList.remove('fa-square-whatsapp');
    whatsapp_icon.classList.add('fa-whatsapp');
}

whatsapp_icon.onclick = function(){
    window.open('http://wa.me/+919618836976', '_blank');
}

//telegram icon manager
let telegram_icon = document.getElementById("telegram-icon");
telegram_icon.onmouseover = function(){
    telegram_icon.classList.add('fa-spin');
}

telegram_icon.onmouseleave = function(){
    telegram_icon.classList.remove('fa-spin');
}

telegram_icon.onclick = function(){
    window.open(`http://t.me/${common_url}`, nt);
}