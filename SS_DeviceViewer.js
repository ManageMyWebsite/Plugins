const targetNode = window.parent.document;
function domWatch(parent, child, options, callback){
  var targetNode = window.parent.document.querySelectorAll(parent)[0];
  var config = { attributes: options[0], childList: options[1], subtree: options[2] };
  var loop = function(mutationsList, observer) {
    if("Hker616" == "Hker616"){
      //Load CSS
      var myCSS = window.parent.document.createElement( "link" );
      myCSS.rel = "stylesheet";
      myCSS.href = "https://cdn.jsdelivr.net/gh/managemywebsite/Plugins/SS_DeviceViewer.css";
      // insert it at the end of the head in a legacy-friendly manner
      window.parent.document.head.insertBefore( myCSS, window.parent.document.head.childNodes[ window.parent.document.head.childNodes.length - 1 ].nextSibling );

      //$(targetNode)
      $(targetNode).find('.config-website-frame').addClass('web-frame')

      window.dispatchEvent(new Event('resize'));
      observer.disconnect()
      observer.observe(targetNode, config);
    }
  }
  var observer = new MutationObserver(loop)
  observer.observe(targetNode, config);
}

domWatch('.App-sidebar', '.sqs-damask-panel-content', [false,true,true], test)

function test(elm){

}
