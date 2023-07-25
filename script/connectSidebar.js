var connectBtn = document.getElementById('connectBtn');
var connectSidebar = document.getElementById('connectSidebar');
var connect = document.querySelector('.connect-button')

function showSidebar() {
  connectBtn.addEventListener("click", function () {
    connect.classList.toggle("active");

    connectBtn.classList.toggle("active");
    overlay.classList.toggle("active");
    connectSidebar.classList.toggle("active");
  });
}


// Function to show the connectBtn sidebar when connectBtn is clicked
function showConnectSidebar() {
  connectBtn.addEventListener("click", function () {
    connectSidebar.style.right = "0";
    overlay.style.display = "block";
  });
}

// Function to hide both sidebars when called
function hideSidebars() {
  connectSidebar.style.right = "-400px";
  sidebar.style.left = "-400px";
  overlay.style.display = "none";
}

// Call the function to close both sidebars when the overlay is clicked
overlay.addEventListener("click", hideSidebars);

document.getElementById("connect-close-btn").addEventListener("click", function() {
  var connectSidebar = document.getElementById("connectSidebar");
  var overlay = document.getElementById("overlay");
  
  connectSidebar.style.right = "-400px";
  overlay.style.display = "none";
  return false;
  });

  // Return false to prevent default behavior and page refresh
  


// Call the functions to enable sidebar behavior
showSidebar();
showConnectSidebar();


// function showConnectSidebar() {
//     document.getElementById("connectBtn").addEventListener("click", function() {
//       var connectSidebar = document.getElementById("connectSidebar");
//       var overlay = document.getElementById("overlay");
    
//       if (connectSidebar.style.right === "-400px") {
//      connectSidebar.style.right = "0";
//      overlay.style.display = "block";
//     } else {
//      connectSidebar.style.right = "-400px";
//      overlay.style.display = "none";
//     }
//     });
    
    
  
  
    