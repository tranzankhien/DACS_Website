import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDHJTD6sc-Eo8ZhjIsq02l6YrtQW9B3I84",
  authDomain: "fire-base-1-f5d03.firebaseapp.com",
  projectId: "fire-base-1-f5d03",
  storageBucket: "fire-base-1-f5d03.appspot.com",
  messagingSenderId: "586956050033",
  appId: "1:586956050033:web:201141b14178d7a97415d0"
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
window.firebaseAuth = firebaseAuth;

document.addEventListener("DOMContentLoaded", function () {
    var loginModalEl = document.getElementById("loginModal");
    var registerModalEl = document.getElementById("registerModal");
    var forgotModalEl = document.getElementById("forgotPasswordModal");

    var loginModal = new bootstrap.Modal(loginModalEl, { backdrop: "static" });
    var registerModal = new bootstrap.Modal(registerModalEl, { backdrop: "static" });
    var forgotModal = new bootstrap.Modal(forgotModalEl, { backdrop: "static" });

    // Chuyển từ đăng nhập sang đăng ký
    document.getElementById("openRegister").addEventListener("click", function () {
        loginModalEl.addEventListener("hidden.bs.modal", function () {
            registerModal.show();
        }, { once: true });
        loginModal.hide();
    });

    // Chuyển từ đăng nhập sang quên mật khẩu
    document.getElementById("openForgotPassword").addEventListener("click", function () {
        loginModalEl.addEventListener("hidden.bs.modal", function () {
            forgotModal.show();
        }, { once: true });
        loginModal.hide();
    });

    // Chuyển từ đăng ký về đăng nhập
    document.getElementById("openLogin").addEventListener("click", function () {
        registerModalEl.addEventListener("hidden.bs.modal", function () {
            loginModal.show();
        }, { once: true });
        registerModal.hide();
    });

    // Khi đóng modal cuối cùng thì xóa backdrop
    function removeBackdrop() {
        if (!loginModalEl.classList.contains("show") && !registerModalEl.classList.contains("show")) {
            document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());
            document.body.classList.remove("modal-open");
            document.body.style.overflow = "";
        }
    }
    loginModalEl.addEventListener("hidden.bs.modal", removeBackdrop);
    registerModalEl.addEventListener("hidden.bs.modal", removeBackdrop);

    // Các nút mở login modal từ bên ngoài
    document.querySelectorAll(".openLogin").forEach(btn => {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            loginModal.show();
        });
    });

    // Kiểm tra login khi bấm nút "Vé của tôi"
    const myTicketBtn = document.getElementById("myTicketsBtn");
    if (myTicketBtn) {
        myTicketBtn.addEventListener("click", function (e) {
            if (typeof isLoggedIn !== "undefined" && !isLoggedIn) {
                e.preventDefault();
                loginModal.show();
            } else {
                window.location.href = "../pages/my_tickets.php";
            }
        });
    }

    // Đăng ký bằng Firebase
    const registerForm = document.getElementById('firebaseRegisterForm');
    if (registerForm) {
        registerForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const fullname = registerForm.fullname.value;
            const email = registerForm.email.value;
            const password = registerForm.password.value;
            try {
                const userCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
                const user = userCredential.user;
                // Lấy idToken
                const token = await user.getIdToken();
                // Gửi về server để xác thực và tạo session
                const res = await fetch('../auth/firebase_verify.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ idToken: token })
                });
                const data = await res.json();
                if (data.status === 'success') {
                    window.location.href = 'home.php';
                } else {
                    document.getElementById('registerError').innerText = data.message || 'Đăng ký thất bại!';
                }
            } catch (err) {
                document.getElementById('registerError').innerText = err.message;
            }
        });
    }

    // Đăng nhập bằng Firebase
    const loginForm = document.getElementById('firebaseLoginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async function (e) {
            e.preventDefault();
            const email = loginForm.email.value;
            const password = loginForm.password.value;
            try {
                const userCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
                const user = userCredential.user;
                const token = await user.getIdToken();
                const res = await fetch('../auth/firebase_verify.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ idToken: token })
                });
                const data = await res.json();
                if (data.status === 'success') {
                    window.location.href = 'home.php';
                } else {
                    document.getElementById('loginError').innerText = data.message || 'Đăng nhập thất bại!';
                }
            } catch (err) {
                document.getElementById('loginError').innerText = err.message;
            }
        });
    }

    // Đăng nhập với Google
    const googleBtn = document.querySelector('.btn.btn-light.w-100 img[alt="Google"]')?.parentElement
        || document.querySelector('.btn.btn-light.w-100');
    if (googleBtn) {
        googleBtn.addEventListener('click', async function (e) {
            e.preventDefault();
            const provider = new GoogleAuthProvider();
            try {
                const result = await signInWithPopup(firebaseAuth, provider);
                const user = result.user;
                const token = await user.getIdToken();
                // Gửi token về server để xác thực và tạo session
                const res = await fetch('../auth/firebase_verify.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ idToken: token })
                });
                const data = await res.json();
                if (data.status === 'success') {
                    window.location.href = 'home.php';
                } else {
                    document.getElementById('loginError').innerText = data.message || 'Đăng nhập Google thất bại!';
                }
            } catch (err) {
                document.getElementById('loginError').innerText = err.message;
            }
        });
    }
});
