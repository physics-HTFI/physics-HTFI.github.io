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