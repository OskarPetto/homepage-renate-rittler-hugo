 // For smooth scrolling on mobile because 100vh is not constant 

  function openSidebar() {
    $("#openSidebarButton").css({ "display": "none"});
    $(".sidebar").css({"transition": "width 0.4s"});
    $(".sidebar").width(window.innerWidth);
    $(".sidebar").height(window.innerHeight);
    $(".sidebar-content").css({ "display": "block"});
  }

  function closeSidebar() {
    $("#openSidebarButton").css({ "display": "inline"});
    $(".sidebar").css({"transition": "unset"});
    $(".sidebar").width(0);
    $(".sidebar").height(0);
    $(".sidebar-content").css({ "display": "none"});
  }
