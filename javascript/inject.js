chrome.storage.local.set({
	ids: ["100012806441566"]
}, function (result) {
	console.log('Value is set to ' + result);
});
var span = document.createElement("span")
span.innerText = "Suốt ngày hiện ảnh ny cũ ghét vl"
document.querySelector(`#u_ps_0_7_1`).replaceWith(span);
document.querySelector(`#u_ps_0_7_2`).remove();

chrome.storage.local.get(['ids'], function (result) {
	removeByIDs(result.ids)
});

function removeByIDs(IDs) {
	IDs.forEach(function (herID) {
		var she = document.querySelector(`[data-id="${herID}"]`)
		if (she) {
			she.remove()
			console.log(`Removed ${herID}`)
		}
	});
}

function addID() {
	console.log("Hehe")
	chrome.storage.local.get(['ids'], function (result) {
		console.log(result.ids)
	});
}