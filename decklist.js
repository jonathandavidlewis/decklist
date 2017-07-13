/*
 How to Apply These Terms to Your New Programs

  If you develop a new program, and you want it to be of the greatest
possible use to the public, the best way to achieve this is to make it
free software which everyone can redistribute and change under these terms.

  To do so, attach the following notices to the program.  It is safest
to attach them to the start of each source file to most effectively
state the exclusion of warranty; and each file should have at least
the "copyright" line and a pointer to where the full notice is found.

    Create edit save and retrieve trading card game decklists.
    Copyright (C) 2017 Drew Billings

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
		
		Contact me by electronic and paper mail:
		github.com /fowardslash/ riftrid3r
*/
$(document).ready(function (){
	$('button').click(function (){
		$('#deckList').append("<ul>" + $("input[name=card]").val() + " <a href='#' class='close' aria-hidden='true'>&times;</a></ul>");
	});
	$("body").on('click', '#deckList a', function (){
		$(this).closest("ul").remove();
	});
});

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}


const CARD_ENDPOINT = 'https://api.magicthegathering.io/v1/cards'
const HTTP_METHOD = 'GET'

var sendQuery = function(searchParams) {
  

}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}


renderCards = function() {

}

var searchParams = ''

var searchButton = $("#card-search")
searchButton.click(function() {
  var searchParams = $("searchField").value
  sendQuery(searchParams, CARD_ENDPOINT, )
  ;

