common_url = "bharath999999";
nt = "_blank"; //nt -> new tab opener

//call icon manager
let call_icon = document.getElementById("call-icon");
call_icon.onmouseover = function(){
    call_icon.setAttribute("src","./call1.png");
}

call_icon.onmouseleave = function(){
    call_icon.setAttribute("src","./call.png");
}

call_icon.onclick = function(){
    window.open('tel:+919618836976', nt);
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

//twitter icon handler
let twitter_icon = document.getElementById("twitter-icon");
twitter_icon.onmouseover = function(){
    twitter_icon.classList.remove('fa-twitter');
    twitter_icon.classList.add('fa-square-twitter');
}

twitter_icon.onmouseleave = function(){
    twitter_icon.classList.remove('fa-square-twitter');
    twitter_icon.classList.add('fa-twitter');
}

twitter_icon.onclick = function(){
    window.open(`https://www.twitter.com/bharath_tweeets`, nt);
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
    telegram_icon.setAttribute("src","./telegram1.png");
}

telegram_icon.onmouseleave = function(){
    telegram_icon.setAttribute("src","./telegram.png");
}

telegram_icon.onclick = function(){
    window.open(`http://t.me/${common_url}`, nt);
}

let profile_icon = document.getElementById("icon");
profile_icon.onmouseover = function(){
    profile_icon.setAttribute("src","./smile.png");
}

profile_icon.onmouseleave = function(){
    profile_icon.setAttribute("src","./profile.png");
}

//linkedin icon manager
let linkedin_icon = document.getElementById("linkedin-icon");
linkedin_icon.onmouseover = function(){
    linkedin_icon.classList.remove('fa-linkedin-in');
    linkedin_icon.classList.add('fa-linkedin');
}

linkedin_icon.onmouseleave = function(){
    linkedin_icon.classList.remove('fa-linkedin');
    linkedin_icon.classList.add('fa-linkedin-in');
}

linkedin_icon.onclick = function(){
    window.open(`https://www.linkedin.com/in/${common_url}`, nt);
}

//facebook icon manager
let facebook_icon = document.getElementById("facebook-icon");
facebook_icon.onmouseover = function(){
    facebook_icon.classList.remove('fa-facebook-f');
    facebook_icon.classList.add('fa-facebook');
}

facebook_icon.onmouseleave = function(){
    facebook_icon.classList.remove('fa-facebook');
    facebook_icon.classList.add('fa-facebook-f');
}

facebook_icon.onclick = function(){
    window.open(`https://www.facebook.com/${common_url}`, nt);
}

//LeetCode icon manager
let leetCode_icon = document.getElementById("leetCode-icon");
leetCode_icon.onmouseover = function(){
    leetCode_icon.setAttribute("src","./leetcode1.png");
}

leetCode_icon.onmouseleave = function(){
    leetCode_icon.setAttribute("src","./leetcode.png");
}

leetCode_icon.onclick = function(){
    window.open(`https://www.leetcode.com/${common_url}`, nt);
}

//arrow handler
arrow = document.getElementById("arrow");
arrow.onclick = function(){
    let subheader = document.getElementById("subheader1");
    subheader.style.display = "";
    arrow.classList.remove("fa-angle-down");
    let header = document.getElementById("main-header");
    header.style.paddingBottom = "0px";
}

arrow1 = document.getElementById("arrow1");
arrow1.onclick = function(){
    let subheader = document.getElementById("subheader1");
    subheader.style.display = "none";
    let header = document.getElementById("main-header");
    header.style.paddingBottom = "260px";
    arrow.classList.add("fa-angle-down");
}