document.addEventListener('DOMContentLoaded', () => {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            showConfig(e.target.dataset.config);
        });
    });

    const logoutButton = document.getElementById('logout');
    logoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href ="index.html";
    });
});

function showConfig(configId) {
    const configForms = document.querySelectorAll('.form-group');
    configForms.forEach(form => form.style.display = 'none');

    const selectedConfig = document.getElementById(configId);
    if (selectedConfig) {
        selectedConfig.style.display = 'block';
    }
}

function saveConfig() {
    const form = document.getElementById('configForm');
    const formData = new FormData(form);
    const configData = {};

    formData.forEach((value, key) => {
        configData[key] = value;
    });

    console.log('Config Data:', configData);
    alert('Configuration saved!');
}
