document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单提交

    // 获取表单元素
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var usernameError = document.getElementById('usernameError');
    var passwordError = document.getElementById('passwordError');
    var loginError = document.getElementById('loginError');

    // 初始化错误信息
    usernameError.style.display = 'none';
    passwordError.style.display = 'none';
    loginError.style.display = 'none';

    var isValid = true;

    // 验证用户名
    if (username.trim() === '') {
        usernameError.textContent = 'Username can\'t be blank';
        usernameError.style.display = 'block';
        isValid = false;
    }

    // 验证密码
    if (password.trim() === '') {
        passwordError.textContent = 'Password can\'t be blank';
        passwordError.style.display = 'block';
        isValid = false;
    }

    // 如果所有字段都有效，则进行身份验证
    if (isValid) {
        if (username === 'admin' && password === 'password') {
            // 验证成功，跳转到另一个页面
            location.replace('pages/aboutme.html')
        } else {
            // 验证失败，显示错误消息
            loginError.textContent = 'Username or Password is wrong.';
            loginError.style.display = 'block';
        }
    }
});