// 画面右側に+-ボタンを配置
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

// 数値計算の実行用ウィンドウを開く
function startSimulation(htmlPath) {
	var w = 330;
	var h = 430;
	window.open(htmlPath, '', 'width='+w+',height='+h+',left='+(window.screenX+window.outerWidth/2-w/2)+',top='+(window.screenY+window.outerHeight/2-h/2));
}


window.onload = function() {
	addFold();
}


// ウィンドウが小さいときの水平スクロールに対応
var scrollX_pre = 0;
window.addEventListener('scroll', function horizontalScroll() {
	if(scrollX_pre != window.scrollX) {
		scrollX_pre = window.scrollX;
		if(window.scrollX == 0) {
			document.getElementById("left").style.left = ""; // これがないとウィンドウサイズ変更時に画面左端に張り付く
		}
		else {
			document.getElementById("left").style.left = - window.scrollX + "px";
		}
	}
}
, false);


// GoogleAnalytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-84006000-1', 'auto');
ga('send', 'pageview');