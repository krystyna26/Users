$(document).ready(function(){
    $('#userform').submit(function(){
        console.log("serialize: "+$(this).serialize());
        // return false;
        event.preventDefault();

    
        $('.table').add(function(){
            var fname = $('input[type=text][name=firstname]').val();
            var lname = $('input[type=text][name=lastname]').val();
            var email = $('input[type=email][name=email]').val();
            var connr = $('input[type=phone][name=Phone#]').val();
            // console.log("value: "+value);
            $('.table1').append(
                `<table>
                    <tbody>
                        <tr>
                            <td>`+fname+`</td>
                            <td>`+lname+`</td>
                            <td>`+email+`</td>
                            <td>`+connr+`</td>
                        </tr>
                    </tbody>
                </table>`);
        })
        $("#userform input").val("");
    });
});