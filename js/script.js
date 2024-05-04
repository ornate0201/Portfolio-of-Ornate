var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function onetap(tabname){
    for(tablink of tablinks){
        tablink.classlist.remone("active-link");
    }

   for(tabcontent of ttabcontents){
        tablink.classlist.remone("active-tab");
   }
}


////////////////////////

var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";

}

function closemenu(){
    sidemeu.style.right = "-200px";
    
}