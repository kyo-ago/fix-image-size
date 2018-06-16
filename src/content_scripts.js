(() => {
	let children = Array.from(document.body.children)
	if (children.length !== 1) {
		return;
	}
	let img = children[0] || {};
	if ((img.nodeName || "").toLowerCase() !== "img") {
		return;
	}
	if (img.style.cursor) {
		return;
	}
	img.style.objectFit = "contain";

	let setZoomIn = () => {
		img.style.cursor = "zoom-in";
		img.style.width = "100%";
		img.style.height = "100%";
	}
	let setZoomOut = () => {
		img.style.width = "";
		img.style.height = "";
		img.style.cursor = "zoom-out";
	}

	setZoomIn();
	img.addEventListener("click", () => {
		if (img.style.width) {
			setZoomOut();
		} else {
			setZoomIn();
		}
	});
})();
