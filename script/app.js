
          // Sidebar'ı yükle
          fetch('../layout/sidebar.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('sidebar-container').innerHTML = data;
          });

      // Navbar'ı yükle
      fetch('../layout/navbar.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('navbar-container').innerHTML = data;
          });
         
// Sidebar Aç/Kapat
function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const navbar = document.querySelector('.navbar');
  const mainContent = document.querySelector('.main-content');

  sidebar.classList.toggle('collapsed'); // Sidebar'ı aç/kapa
  navbar.classList.toggle('collapsed'); // Navbar genişliğini ayarla
  mainContent.classList.toggle('collapsed'); // Main content sola kayar


  var tabsFn = (function() {
  
    function init() {
      setHeight();
    }
    
    function setHeight() {
      var $tabPane = $('.tab-pane'),
          tabsHeight = $('.nav-tabs').height();
      
      $tabPane.css({
        height: tabsHeight
      });
    }
      
    $(init);
  })();
}


