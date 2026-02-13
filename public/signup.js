import { supabase } from "./supabase.js";

async function signupUser(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const role = document.getElementById("role").value;
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    alert("Please provide email and password.");
    return;
  }

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    alert("Auth error: " + error.message);
    console.error(error);
    return;
  }

  console.log("Auth response:", data);

  // Different supabase versions return user in different shapes; try to locate id
  const userId = data?.user?.id ?? data?.id ?? null;

  if (!userId) {
    alert("No user id returned; check email confirmation settings.");
    return;
  }

  const { error: dbError } = await supabase.from("users").insert({
    id: userId,
    name,
    role,
  });

  if (dbError) {
    alert("DB error: " + dbError.message);
    console.error(dbError);
    return;
  }

  alert("Account created!");
  window.location.href = "login.html";
}

const form = document.querySelector('.signup-form');
if (form) form.addEventListener('submit', signupUser);

window.signupUser = signupUser;
