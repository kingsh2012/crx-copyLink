var tempUrl,
    tempTitle;

chrome.contextMenus.create({
           title: 'copyLink',
           contexts:['link'],
           onclick:function(data,tab){
             tempUrl = data.linkUrl;
             var input = document.getElementById('temp');
             input.innerText = tempTitle+"\r\n"+tempUrl;
             input.select();
             document.execCommand("Copy");

           }
});

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
  if (request.name == "text") {
    tempTitle = request.data;
  }
});