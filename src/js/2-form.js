const formData = { email: "", message: "" };

const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

const saveData = localStorage.getItem(STORAGE_KEY);
if (saveData) {
    formData = JSON.parse(saveData);
    form.email.value = formData.email || "";
    form.massage.value = formData.message || "";
}

form.addEventListener("input", (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  });
  