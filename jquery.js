
var kepek = ["kep1.jpg", "kep2.jpg", "kep3.jpg", "kep4.jpg", "kep5.jpg", "kep6.jpg", "kep7.jpg", "kep8.jpg", "kep9.jpg", "kep10.jpg", "kep1.jpg", "kep2.jpg", "kep3.jpg", "kep4.jpg", "kep5.jpg", "kep6.jpg", "kep7.jpg", "kep8.jpg", "kep9.jpg", "kep10.jpg"];
var kepekalt = ["lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny", "lila szörny", "zöld szörny"];
var kattintTomb = [];

var kattintDb = 0;

$(function () {
    console.log("Helló világ!");

//   $("article").append('<img src="kepek/kep1.jpg" alt="kep1"/>');
//   $("article").append('<img src="kepek/kep2.jpg" alt="kep2"/>');
    for (var i = 0; i < kepek.length; i++) {
//        $("article").append('<img src="kepek/' + kepek[i] + '" alt=""/>');
        $("article").append('<img/>');
        $("article img").eq(i).attr("src", "kepek/hatter.jpg");
        $("article img").eq(i).attr("alt", "szörnyikék");
        $("article img").eq(i).attr("id", i);
    }
    $("article img").click(kattint);
});

function kattint(){
    var id = $(this).attr("id");
//    console.log(id);
    $(this).attr("src", "kepek/" + kepek[id]);
    $(this).attr("alt", kepekalt[id]);
    kattintDb++;
//    console.log(kattintDb + ". kattintás");
    kattintTomb[kattintDb] = id;
    if (kattintDb === 2) {
//        $("article img").attr("src", "kepek/hatter.jpg");
        kattintDb = 0;
        if (kepek[kattintTomb[1]] === kepek[kattintTomb[2]]) {
            $("article img").eq(kattintTomb[1]).attr("src", "");
            $("article img").eq(kattintTomb[2]).attr("src", "");
        }else{
//            $("article img").eq(kattintTomb[1]).attr("src", "kepek/hatter.jpg");
            setTimeout(visszaFordit, 1000);
        }
    }
}
function visszaFordit(){
    $("article img").eq(kattintTomb[1]).attr("src", "kepek/hatter.jpg");
    $("article img").eq(kattintTomb[2]).attr("src", "kepek/hatter.jpg");
}