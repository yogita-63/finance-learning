function openTab(evt, new_tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    console.log(tabcontent.length);
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      console.log(i);
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(new_tab).style.display = "block";
    evt.currentTarget.className += " active";
}
console.log(document.getElementById("defaultOpen"));
document.getElementById("defaultOpen").click();

