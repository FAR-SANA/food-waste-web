import { supabase } from "./supabase.js";

window.loginUser = async function (event) {
  event.preventDefault();

  const email = document.querySelector('input[type="email"]').value;
  const password = document.querySelector('input[type="password"]').value;

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    alert(error.message);
    return;
  }

  const userId = data.user.id;

  // Fetch role from users table
  const { data: profile, error: profileError } = await supabase
    .from("users")
    .select("role")
    .eq("id", userId)
    .single();

  if (profileError) {
    alert("Could not fetch user role");
    console.error(profileError);
    return;
  }

  // Redirect based on role
  if (profile.role === "donor") {
    window.location.href = "donor.html";
  } else {
    window.location.href = "receiver.html";
  }
};
