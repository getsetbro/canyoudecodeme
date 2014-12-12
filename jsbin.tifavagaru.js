function cutHex(h) {
  return (h.charAt(0)=="#") ? h.substring(1,7):h;
}

function hexToB(h) {
  return parseInt((cutHex(h)).substring(4,6),16);
}
var img = $('.img');
function mark(cnt){
  var cntvar = Math.floor( cnt /44);
  var tp = 52 + (27.5 * cntvar);
  var lft = 13 + ( ( cnt * 13 ) - ( ( 44 * 13 ) * cntvar ) );
  img.append('<div class="pnt" style="top: '+tp+'px; left: '+lft+'px">x</div>');
}

var d1 = $('.d1');
var curr = $('.current');
var count = 0;

$('#c1').on('input', function(e) {

  var a = $(this).val();
  var b = hexToB(a);
  var c = Math.floor( b / 2 );
  var d = String.fromCharCode(c);
  curr.html('hex: '+a+'<br>B value: '+b+'<br>charCode (B value div by 2): '+c+'<br>Letter: '+d);
  d1.append('<span>' + d + '</span>');
  mark(count);
  count++;
});