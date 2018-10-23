function addID(){
  console.log("Hehe")
  chrome.storage.local.get(['ids'], function(result) {
    console.log(result.ids)
  });
}