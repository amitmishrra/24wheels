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
        let n = document.getElementById('nm')
        n.style.borderColor = 'red'

    }
    console.log(name);



    var mail = document.forms['myform']['fmail'].value;
    if (mail.length < 10) {
        seterror('mail', 'invalid')
        var rv = false;

        let em = document.getElementById('em')
        em.style.borderColor = 'red'

    }
    console.log(mail);


    var con = document.forms['myform']['fnum'].value;
    if (con.length <= 10) {
        seterror('contact', 'invalid')
        var rv = false;

        let c = document.getElementById('con')
        c.style.borderColor = 'red'

    }
    console.log(con);



    var add = document.forms['myform']['fadd'].value;
    if (add.length <= 10) {
        seterror('add', 'incomplete')
        var rv = false;
        let ad = document.getElementById('ad')
        ad.style.borderColor = 'red'

    }
    console.log(add);



    var brnd = document.forms['myform']['b'].value;
    if (brnd.length <= 3) {
        seterror('brnd', 'incomplete')
        var rv = false;

        let b = document.getElementById('b')
        b.style.borderColor = 'red'

    }
    console.log(brnd);

    var mdl = document.forms['myform']['m'].value;
    if (mdl.length <= 3) {
        seterror('mdl', 'incomplete')
        var rv = false;
        let mm = document.getElementById('m')
        mm.style.borderColor = 'red'

    }
    console.log(mdl);



    var rgn = document.forms['myform']['rn'].value;
    if (rgn.length <= 3) {
        seterror('rgn', 'incomplete')
        var rv = false;
        let rg = document.getElementById('rn')
        rg.style.borderColor = 'red'

    }
    console.log(rn);


    if(rv==true)
    {
        
    alert("Your vehicle is registered")
    }









return rv;    
}