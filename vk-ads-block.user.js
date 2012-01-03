// ==UserScript==
// @name           Radically simple JS for hide ads from vkontakte.ru. Written for Luakit, not tested extensively in other browsers
// @author         Sergey Ushakov, rasherny@gmail.com
// @include        http://*vkontakte.ru/*
// ==/UserScript==

document.getElementById("left_ads").style.visibility = 'hidden'
