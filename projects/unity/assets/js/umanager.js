function uError(){
    var fullScreenButton = $("#goFull");
    fullScreenButton.addClass("disabled");
    fullScreenButton.removeAttr("onclick");
    fullScreenButton.attr("disabled", "disabled");
  }

function loadUnity(path){
    return UnityLoader.instantiate("unityContainer", path, {
      compatibilityCheck: function (unityInstance, onsuccess, onerror) {
        if(window.location.href.startsWith("file")){
          uError();
        }
        else if (!UnityLoader.SystemInfo.hasWebGL) {
          uError();
          unityInstance.popup("Your browser does not support WebGL",
            [{text: "OK", callback: onerror}]);
        } else if (UnityLoader.SystemInfo.mobile) {
          uError();
          alert("Please4 note that Unity WebGL is not currently supported on mobiles. Please use a desktop to access this content");
            //onerror();//[{text: "OK", callback: onerror}]);
        } else if (["Edge", "Firefox", "Chrome", "Safari"].indexOf(UnityLoader.SystemInfo.browser) == -1) {
          unityInstance.popup("Please note that your browser is not currently supported for this Unity WebGL content. Please use one of the following " + 
          "browsers:\n" + ["Edge", "Firefox", "Chrome", "Safari"].join("\n"),
            [{text: "OK", callback: onerror}]);
        } else {
          onsuccess();
        }
      },
        popup: function(a, b){
        alert(a);
        //b[0].callback();
      }
    }
      );
}

function getMethods(obj) {
  var result = [];
  for (var id in obj) {
    try {
      if (typeof(obj[id]) == "function") {
        result.push(id + ": " + obj[id].toString());
      }
    } catch (err) {
      result.push(id + ": inaccessible");
    }
  }
  return result;
}