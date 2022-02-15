

function seterror(id, error) {
    element = document.getElementById(id)
    element.getElementsByClassName('ferror')[0].innerHTML = error;
}



function verify() {
    var rv = true;

    var name = document.forms['myform']['fname'].value;
    if (name.length < 4) {
        seterror('name', 'name is short')
        var rv = false;

    }

    console.log(name);


    var email = document.forms['myform']['fmail'].value;
    if (email.length < 10) {
        seterror('email', 'invalid email')
        var rv = false;

    }
    console.log(email);

    var cont = document.forms['myform']['fnum'].value;
    if (cont.length <= 10) {
        seterror('cont', 'invalid number')
        var rv = false;

    }
    console.log(cont);


    var lis = document.forms['myform']['flis'].value;
    if (lis.length < 1) {
        seterror('lis', 'incomplete')
        var rv = false;

    }


    var add = document.forms['myform']['fadd'].value;
    if (add.length < 1) {
        seterror('add', 'incomplete')
        var rv = false;

    }
    console.log(add);

    if(rv==true)
    {
        
    alert("Your ride is booked")
    }

    return rv;

}









