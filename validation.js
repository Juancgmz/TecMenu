function ValidateEmail(mail)
{
  $("#errorMessage").hide()
  $("#successMessage").hide()

  if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i.test(email.value) && /^(?=.*\d).{4,8}$/.test(password.value))
   {
     $("#successMessage").show();
   }
   else
   {
    $("#errorMessage").show()
   }

   return false;
}
