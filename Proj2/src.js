window.addEventListener("bar", function(){title()});
window.addEventListener("seeAWARDS", function(){title()});
window.onscroll = function()
{offer()};


function seeAWARDS(lc){
    var Courses = document.getElementById("Courses");
    var Hackathons = document.getElementById("Hackathons");
    var Diploma = document.getElementById("Diploma");
    var cntxt3 = document.getElementById("cntxt3");
    var cntxt2 = document.getElementById("cntxt2");
    var cntxt1 = document.getElementById("cntxt1");

    if (lc == 1){
        Courses.style.display = "none";
        Hackathons.style.display = "none";
        Diploma.style.display = "block";
    } else if(lc == 2){
        Hackathons.style.display = "none";
        Diploma.style.display = "none";
        Courses.style.display = "block";
    } else if(lc == 3){
        Hackathons.style.display = "block";
        Diploma.style.display = "none";
        Courses.style.display = "none";
    }
}


function offer(){
    var offer_m = document.getElementById("nvbar");
    var offer_ofs = offer_m.offsetTop;
    
    if(offer_ofs > window.pageYOffset){
        offer_m.classList.remove("sticky");
    } else {
        offer_m.classList.add("sticky");
    }
}

function bar(){
    var mob=document.getElementById("mob");
    
    if ($(window).width() < 1200) {
        if (mob.style.display == "block" )
        {
            mob.style.display = "none";
        }
        else  if (mob.style.display != "block" )
        {
            mob.style.display = "block";
        }
    } else {
        return;
    }
}