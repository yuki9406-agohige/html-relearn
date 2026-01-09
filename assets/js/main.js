(() => {
  // footer year
  const yearEl = document.querySelector("#year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // mobile menu toggle
  const btn = document.querySelector(".menu-btn");
  const nav = document.querySelector("#site-nav");

  if (btn && nav) {
    btn.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // basic form validation (dummy)
  const form = document.querySelector("form.form");
  if (!form) return;

  const status = form.querySelector(".form__status");

  const setError = (input, message) => {
    const field = input.closest(".field");
    const err = field ? field.querySelector(".field__error") : null;
    if (err) err.textContent = message || "";
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
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
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      if (!valid) {
        setError(email, "メールアドレスを正しく入力してください");
        ok = false;
      } else {
        setError(email, "");
      }
    }

    if (ok && status) {
      status.textContent = "送信しました（ダミー）";
      form.reset();
    }
  });
})();
