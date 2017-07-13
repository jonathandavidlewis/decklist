/*
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