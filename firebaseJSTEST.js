var myFirebaseRef = new Firebase('https://mywittlefirebase.firebaseio.com/');

myFirebaseRef.push({
  Isays: "MEOW",
  kittyWhiskers: "these are my whiskers: ><",
})
myFirebaseRef.on('child_added', function(snapshot){
  console.log(snapshot.val());
});


$('button').keypress(function (e) {
    if (e.keyCode == 13) {
      var name = $('#nameInput').val();
      var text = $('#messageInput').val();
      myDataRef.set('User ' + name + ' says ' + text);
      $('#messageInput').val('');
    }
  });
