function footer() {
	document.write('<div id="bottom">');
	document.write('<a class="greeninfo" href="http://www.dreamhost.com/green.cgi"><img class="greeninfopic" alt="Green Web Hosting! This site hosted by DreamHost." src="https://secure.newdream.net/green1.gif" height="32" width="100" /></a>');
	document.write('<p class="copyright">Copyright &copy; ');
	writeTheDate()
	document.write(' Brian Johnsen | Some Rights Reserved</p>');
	document.write('</div>');
}



function goback() {
	history.back();
}


function writeTheDate() {
  var modDate = new Date()
  var modYear = modDate.getYear()
  if(modYear<1000) modYear+=1900
       
  document.write("20" 
  	+ (modYear+"").substring(2,4))
}


