Template.register.events({ 
    'submit form': function(event) { 
         event.preventDefault();
         var email = event.target.email.value;
         var password = event.target.password.value;
         Accounts.createUser({
             email:email,
             password:password
         })
    } 
}); 
