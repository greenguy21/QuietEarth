Template.signin.events({
    'submit form' : function(event){
        event.preventDefault();//prevents default form submission
        var email = event.target.email.value;
        var password = event.target.password.value;
        Meteor.loginWithPassword(email, password);
        FlowRouter.go('/');
    }
})