// 画面右側に折り畳み用+-ボタンを配置
var	h3tags;
function addFold() {
	h3tags = document.getElementsByTagName("h3");
	for (var i = 0; i < h3tags.length; i++) {
		h3tags[i].innerHTML += "<a class='fold' onClick='fold(h3tags[" + i + "])'><img src='../css/open.png'/></a>";
	}
}
function fold(h3tag) {
	var img = h3tag.lastChild.firstChild;
	var isOpen = img.getAttribute("src") == "../css/open.png";
	img.setAttribute("src", isOpen ? "../css/close.png" : "../css/open.png");
	var youAreHere = false;
	for (var i = 0; i < h3tag.parentNode.children.length; i++) {
		var tag = h3tag.parentNode.children[i];
		if(tag == h3tag) { youAreHere = true; }
		else if(youAreHere == true) {
			if(tag.className == "p" || tag.tagName == "LI" || tag.tagName == "UL" || tag.tagName == "HR" || tag.tagName == "IMG") {
				tag.style.display = isOpen ? "none" : "";
			}
			else break;
		}
	}
}


// シミュレーション画面を開く
function startSimulation(htmlPath) {
	var iframe = document.createElement('iframe');
	iframe.src = htmlPath;
	var div = document.createElement('div');
	div.id = 'simulation';
	div.insertBefore(iframe, div.firstChild);
	div.addEventListener('click',function () { div.parentNode.removeChild(div); }, false);
	div.addEventListener('touchstart',function () { div.parentNode.removeChild(div); }, false);
	var body = document.getElementsByTagName('body')[0];
	body.insertBefore(div, body.firstChild);
}

// シミュレーション開始のボタンクリック処理
function addStartSimulationListener() {
	buttons = document.getElementsByTagName('input');
	for(var i=0; i<buttons.length; i++) {
		buttons[i].addEventListener('touchend', function() { startSimulation(this.getAttribute('html-path')); });
		buttons[i].addEventListener('click', function() { startSimulation(this.getAttribute('html-path')); });
	}
}

// シミュレーション画面のボタンクリック処理
function addParameterChangedListener(funcs) {
	buttons = document.getElementsByTagName('input');
	for(var i=0; i<funcs.length; i++) {
		buttons[i].addEventListener('touchstart', funcs[i]);
		buttons[i].addEventListener('click', funcs[i]);
	}
}


var	allowFold = true;
window.onload = function() {
	if(allowFold) { addFold(); }
	addStartSimulationListener();
};

// GoogleAnalytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-84006000-1', 'auto');
ga('send', 'pageview');