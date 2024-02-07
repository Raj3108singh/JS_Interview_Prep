/*
call back code with a single call back function. But if we have multiple dependencies like script 2 
should load after script 1 has loaded and so on. Soon we end up in call back hell.

call back hell makes the code difficult to read, follow and maintaine.

*/

function loadScript(src, cb) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => cb(null, script);
    script.onerror = () => cb(new Error('Call back error'));

    document.head.append(script);
}

loadScript('/module/script.js', function (error, script) {
    if (error) {
        //Handle the error
    } else {
        // script loaded successfuly
    }
})