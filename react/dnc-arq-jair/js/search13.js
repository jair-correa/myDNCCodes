// Função de busca
const data = [
  { name: 'Apple' },
  { name: 'Banana' },
  { name: 'Orange' },
  { name: 'Pineapple' },
  { name: 'Strawberry' },
  { name: 'Grapes' }
];

const getData = (data) => {
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const searchButton = document.getElementById('searchButton');

  searchButton.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();
    searchResults.innerHTML = '';

    if (query.length < 3) {
      searchResults.innerHTML = '<p>Please enter at least 3 characters.</p>';
      return;
    }

    const results = data.filter(item =>
      item.name.toLowerCase().includes(query)
    );

    if (results.length === 0) {
      searchResults.innerHTML = '<p>No results found.</p>';
    } else {
      results.forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.textContent = item.name;
        searchResults.appendChild(resultItem);
      });
    }
  });
};

getData(data);

// Live Reload (WebSocket para desenvolvimento com Live Server)
if ('WebSocket' in window) {
  (function () {
    function refreshCSS() {
      var sheets = [].slice.call(document.getElementsByTagName("link"));
      var head = document.getElementsByTagName("head")[0];
      for (var i = 0; i < sheets.length; ++i) {
        var elem = sheets[i];
        var parent = elem.parentElement || head;
        parent.removeChild(elem);
        var rel = elem.rel;
        if (elem.href && (typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet")) {
          var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
          elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
        }
        parent.appendChild(elem);
      }
    }
    var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
    var address = protocol + window.location.host + window.location.pathname + '/ws';
    var socket = new WebSocket(address);
    socket.onmessage = function (msg) {
      if (msg.data === 'reload') window.location.reload();
      else if (msg.data === 'refreshcss') refreshCSS();
    };
    if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
      console.log('Live reload enabled.');
      sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
    }
  })();
} else {
  console.error('Upgrade your browser. This Browser does NOT support WebSocket for Live-Reloading.');
}
