(function () {

    var container = document.querySelector("#unity-container");
    var canvas = document.querySelector("#unity-canvas");
    var loader= document.querySelector("#loader");
    var loaderFill= document.querySelector("#fill");

    function onProgress(progress) {
        loaderFill.style.width = progress * 100 + "%";
    }

    function onComplete(unityInstance) {
        loader.remove();
    }
    function onWindowResize() {
        var width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

        var height = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

        canvas.height=height;
        canvas.width=width;
    }

    var buildUrl = "Build";
    var loaderUrl = buildUrl + "/Tiny_Web_Project.loader.js";
    var config = {
        dataUrl: buildUrl + "/Tiny_Web_Project.data",
        frameworkUrl: buildUrl + "/Tiny_Web_Project.framework.js",
        codeUrl: buildUrl + "/Tiny_Web_Project.wasm",
        streamingAssetsUrl: "StreamingAssets",
        companyName: "Powerful Men With Tiny Penises That Ruined The World",
        productName: "tiny.io",
        productVersion: "",
    };

    /*
    var script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
        createUnityInstance(canvas, config, onProgress)
            .then(onComplete)
            .catch((message) => {
                alert(message);
        });
    };
    document.body.appendChild(script);
    */

    //RCK
    var script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
        createUnityInstance(canvas, config, onProgress)
            .then((unityInstance) => {
                loader.remove();

                window.unityInstance = unityInstance;   //the magic to send data to unity
                
            }).catch((message) => {
                alert(message);
            });
    };
    document.body.appendChild(script);
    // End RCk

    window.addEventListener('resize', onWindowResize);
    onWindowResize();

})();
