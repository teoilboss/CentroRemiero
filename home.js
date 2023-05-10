// Funzione per impostare un cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }
  
  // Funzione per ottenere il valore di un cookie
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  
  // Funzione per mostrare il messaggio dei cookies
  function showCookiesMessage() {
    var cookiesMessage = document.createElement('div');
    cookiesMessage.setAttribute('id', 'cookies-message');
    cookiesMessage.innerHTML = '<p>Questo sito utilizza i cookies per garantire la migliore esperienza utente. Continuando a navigare su questo sito, accetti il nostro utilizzo dei cookie. <a href="#" onclick="acceptCookies()">Accetta i cookies</a></p>';
  
    document.body.appendChild(cookiesMessage);
  }
  
  // Funzione per accettare i cookies
  function acceptCookies() {
    setCookie('cookies-accepted', 'true', 365);
    var cookiesMessage = document.getElementById('cookies-message');
    cookiesMessage.parentNode.removeChild(cookiesMessage);
  }
  
  // Mostra il messaggio dei cookies solo se non sono già stati accettati
  if (!getCookie('cookies-accepted')) {
    showCookiesMessage();
  }
  