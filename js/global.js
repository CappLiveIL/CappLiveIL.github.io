/*

	#Codded and Program By Tal Leon
	#contact mail - tal222881@gmail.com

*/
var classNames = [];
if (navigator.userAgent.match(/(iPad|iPhone|iPod)/i)) classNames.push('device-ios');
//if (navigator.userAgent.match(/android/i)) classNames.push('device-android');
if (navigator.userAgent.match(/(android|Windows Phone|Lumia|webOS|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi|nok(6|i))/i)) classNames.push('device-android');

var html = document.getElementsByTagName('html')[0];

if (classNames.length) classNames.push('on-device');
if (html.classList) html.classList.add.apply(html.classList, classNames);