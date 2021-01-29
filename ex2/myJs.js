

document.getElementById("dropdown").addEventListener("mouseover", myFunction);

function myFunction() {
    var dropdown = document.querySelectorAll(".dropdown-item");
    for (var i=0;i<dropdown.length;i++){
        dropdown[i].style.display = 'block';
    }
}


document.getElementById("dropdown").addEventListener("mouseout", mouseLeave);

function mouseLeave() {
    setTimeout(
        function(){
            var dropdown = document.querySelectorAll(".dropdown-item");
            for (var i=0;i<dropdown.length;i++){
                dropdown[i].style.display = 'none';
            }
        }, 3000);
}



function openNav() {
    if(document.querySelector("#openbtn").innerText === "Open Sidebar"){
        var slidebar = document.querySelectorAll(".sidebar-item");
        for (var i=0;i<slidebar.length;i++){
            slidebar[i].style.display = 'block';
        }
        document.querySelector("#mySidebar").style.display = 'block'
        document.querySelector("#openbtn").innerText = "Close Sidebar";
    }
    else{
        var slidebar = document.querySelectorAll(".sidebar-item");
        for (var i=0;i<slidebar.length;i++){
            slidebar[i].style.display = 'none';
        }
        document.querySelector("#openbtn").innerText = "Open Sidebar";
    }
}

