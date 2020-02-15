function getGithubInfo(user) {

  var url = "https://api.github.com/users/"+user;
  var xhttp = new XMLHttpRequest();
  xhttp.open('GET', url, false);
  xhttp.send();
  return xhttp;




    // 1. Create an instance of XMLHttpRequest class and send a GET request using it.
    // The function should finally return the object(it now contains the response!)


}
function showUser(user) {

  $('#name').html(user.name);
  $("#ID").html(user.id);
  $('#avatar').html("<img style='width: 150px;' src ="+user.avatar_url + ">");
  $('#url').html("<a href = "+user.html_url+">user profile</a>");


    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
}

function noSuchUser(username) {
  $('#profile').html("No user found");
    //3. set the elements such that a suitable message is displayed
}

$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            response = getGithubInfo(username);
            //if the response is successful show the user's details
            if (response.status == 200) {
                showUser(JSON.parse(response.responseText));
                //else display suitable message
            } else {
                noSuchUser(username);
            }
        }
    })
});
