document.addEventListener('mousedown',function(e){
	if (e.which === 3 && e.target.tagName === "A") {
		window.templinkTitle = e.target.innerText;
		console.log(window.templinkTitle);
		chrome.extension.sendRequest({name:'text',data:templinkTitle});
	}
},false);