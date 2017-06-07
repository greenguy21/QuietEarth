//Home
FlowRouter.route(['/', '/home'], {
  action:function(){
    FlowLayout.render('layout',{sidebar:'sidebar', main:'home', cart:'cart'})
  }
});

//Register
FlowRouter.route('/register', {
  action:function(){
    FlowLayout.render('layout',{sidebar:'', main:'register', cart:''})
  }
});

//signin
FlowRouter.route('/signin', {
  action:function(){
    FlowLayout.render('layout',{sidebar:'', main:'signin', cart:''})
  }
});

//signout
FlowRouter.route('/signout', {
  action:function(){
    Meteor.logout(function(err){
      if (!err){
        FlowRouter.go('/signin');
      }
    })
  }
});

FlowRouter.route('/checkout', {
  action:function(){
    FlowLayout.render('layout',{sidebar:'', main:'checkout', cart:''})
  }
});

FlowRouter.route('/category/:categoryName', {
  subscriptions:function(params){
    console.log("subscription: ", params);
    //make sure subscriptions exist
  },
  triggersEnter:function(params){
    console.log("ENTER", params);
    //check to see that the user is logged in
  },
  triggersExit:function(params){
    console.log("EXIT",params);
    //check that there is no unsaved data
  },
  action:function(){
    FlowLayout.render('layout',{sidebar:'sidebar', main:'category', cart:'cart'})
  }
});
