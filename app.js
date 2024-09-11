// JavaScript Document
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.getElementById('.carousel');
let listIremDom = document.getElementById('.carousel .list');
let thumbnailDom = document.getElementById('.carousel .thumbnail');


nextDom.onclick = function(){
	showSlider('next');
}
function showslider(type){
	let itemSlider = document.querySelectorAll('.carousel .list .item')
	let itemThumbnail.querySelectorAll('.carousel .thumbnail .item')
}
if(type == 'next'){
	listIremDom.appendChild(itemSlider[0]);
}