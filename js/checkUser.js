
(() => {
    var isLogin = localStorage.getItem("user");
    console.log(isLogin)
    if (isLogin != "true") {
        location.href = 'login.html'
    }
})()

