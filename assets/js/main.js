(() => {
  // footer year
  const yearEl = document.querySelector("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // mobile menu toggle
  const btn = document.querySelector(".menu-btn");
  const nav = document.querySelector("#site-nav");

  if (btn && nav) {
    btn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open"); // navにis-openクラスが存在すれば削除、なければ追加
      btn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // basic form validation (dummy)
  const form = document.querySelector("form.form");
  if (!form) return;

  const status = form.querySelector(".form__status");

  const setError = (input, message) => {
    const errId = input.getAttribute("aria-describedby");
    const err = errId ? document.getElementById(errId) : null;
    if (err) err.textContent = message || ""; // エラーが存在すればメッセージをセット、なければ空文字に
    const hasError = Boolean(message);
    input.setAttribute("aria-invalid", String(hasError));
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // フォームのデフォルトの動作をキャンセル(ページリロード防止)
    if (status) status.textContent = "";

    const name = form.querySelector("#name");
    const email = form.querySelector("#email");

    let ok = true;

    if (name && name.value.trim().length === 0) {
      setError(name, "お名前を入力してください");
      ok = false;
    } else if (name) {
      setError(name, "");
    }

    if (email) {
      const v = email.value.trim();
      if (v.length === 0) {
        setError(email, "メールアドレスを入力してください");
        ok = false;
      } else {
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        if (!valid) {
          setError(email, "メールアドレスを正しく入力してください");
          ok = false;
        } else {
          setError(email, "");
        }
      }
    }

    if (ok && status) {
      status.textContent = "送信しました（ダミー）";
      form.reset();
    }
  });
})();
