/* lightmode and darkmode code */

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('darkmode-toggle');
    
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark');
        toggle.checked = true;
    } else {
        document.body.classList.add('light');
    }

    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});
