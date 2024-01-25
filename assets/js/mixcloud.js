  // Your JSON data with links
  var iframeData = [
    "https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fgothradio%2Fgothicrock-wave-gothtronic-the-split-hours-1-id-4tblzwnzgwv9ftkfbaeafnovwluwdmwzna91djvz%2F",
    // Add more links as needed
  ];

  // Function to create iframes and append them to the #iframes div
  function createIframes() {
    var iframesContainer = document.getElementById('mixcloud');

    iframeData.forEach(function(link) {
      var iframe = document.createElement('iframe');
      iframe.width = "100%";
      iframe.height = "60";
      iframe.src = link;
      iframe.frameborder = "0";
      iframesContainer.appendChild(iframe);
    });
  }

  
