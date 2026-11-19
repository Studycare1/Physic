// === Source Code Protection Script ===
(function() {
    'use strict';

    // 1. Disable Right Click
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // 2. Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    document.addEventListener('keydown', function(e) {
        if (
            e.key === 'F12' || e.keyCode === 123 || 
            (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) || 
            (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) || 
            (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) || 
            (e.ctrlKey && (e.key === 'U' || e.key === 'u'))
        ) {
            e.preventDefault();
            return false;
        }
    });

    // 3. DevTools Detection (Window Resize Trick)
    var threshold = 160;
    var checkDevTools = function() {
        var widthDiff = window.outerWidth - window.innerWidth;
        var heightDiff = window.outerHeight - window.innerHeight;
        if (widthDiff > threshold || heightDiff > threshold) {
            document.body.innerHTML = "<div style='text-align:center;padding:50px;font-family:sans-serif;'><h1>⚠️ Access Denied</h1><p>Developer Tools detected. Please close it to continue.</p></div>";
        }
    };
    setInterval(checkDevTools, 1000);

    // 4. Disable Text Selection (Optional - for extra safety)
    // document.addEventListener('selectstart', function(e) { e.preventDefault(); });
})();
