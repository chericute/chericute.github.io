    function checkPswd() {
      var confirmPassword = "eweonesan";
      var password = document.getElementById("pswd").value;
      if (password == confirmPassword) {
        window.location = "loop/main.html";
      } else {alert("Ih passnya salah!");
     }
    }

var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 100 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        document.body.appendChild(css);
    };
fo4 5229541

as a clarification from an action of mine,

idk what gotten into me.

i was intended to troll you by sending that private message as a "taunt" and temporary blocked you the other day to see how you reacted and maybe taunted to take my other scores.

ofc anyone can spin harder and take it as it sits there too long

i have sniped several people but a guy also sent me the same message to me i just laugh it off and not exaggerating and keep it between us.

we eventually exchange scores afterwards.

so i thought we can do too.

but you take it too far and too seriously seeing how you share the "private" message and gather like an angry osu army to ends me.

i know sending kys to someone you just know is rude but believe you me,

its not what i really meant

so im sowy i mean it.

i apologize for what it turns out plus if you cant accept my apology im willing to quit osu for good.

maybe i dont deserve this community

i believe this is a lost cause of my bad skills with communicating and thus miscommunication arise

and i hope this time its just between us

tldr: i dont mean of what i said in fact idc about any scores its just a game

have a nice day :)


