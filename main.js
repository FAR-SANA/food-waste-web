import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
  "https://aalzhahoyjvqbojwlsea.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFhbHpoYWhveWp2cWJvandsc2VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5Njk5NTQsImV4cCI6MjA4NjU0NTk1NH0.7uBG5SXHpVz_ZeiJOag1-_jcFfZTfb0AOvNKd_bKUbQ"
);

window.signupUser = async function () {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return alert(error.message);

  await supabase.from("users").insert({
    id: data.user.id,
    name,
    role
  });

  window.location.href = role === "donor" ? "donor.html" : "receiver.html";
};

window.loginUser = async function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) alert(error.message);
  else window.location.href = "index.html";
};
