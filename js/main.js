// 选项卡切换
// 获取按钮
var btnArr = document.getElementsByClassName('btn');
// 获取内容区
var contentArr = document.getElementsByClassName('wrap');

// 循环遍历所有按钮
for (var i = 0; i < btnArr.length; i++){
	// 记录每个按钮的序号
	btnArr[i].index = i;
	// 为其绑定点击事件
	btnArr[i].onclick = function () {
		// 将所有内容区隐藏
		for (var j = 0; j < btnArr.length; j++){
			contentArr[j].className = 'wrap';
		}
		// 让被选中的内容区显示出来
		contentArr[this.index].className = 'wrap active';
	}
}


// 泡泡移动
var bubbleArr = document.getElementsByClassName('friendOn');

var bubbleWrap = document.getElementsByClassName('friendsOnline')[0];

var maxWidth = bubbleWrap.clientWidth - bubbleArr[0].offsetWidth;
var maxHeight = bubbleWrap.clientHeight - bubbleArr[0].offsetHeight;

for (var i = 0; i < bubbleArr.length; i++){
	bubbleArr[i].l = bubbleArr[i].offsetLeft;
	bubbleArr[i].t = bubbleArr[i].offsetTop;

	bubbleArr[i].speedX = Math.random()*0.3+0.1;
	bubbleArr[i].speedY = Math.random()*0.3+0.1;

	run(bubbleArr[i]); 
}

function run(obj) {
	obj.timer = setInterval(function () {
		obj.l += obj.speedX;
		obj.t += obj.speedY;

		if (obj.l>=maxWidth){
			obj.speedX*=-1;
		}else if(obj.l<=0){
			obj.speedX*=-1;
		}
		if (obj.t>=maxHeight){
			obj.speedY*=-1;
		}else if(obj.t<=0){
			obj.speedY*=-1;
		}
		
		obj.style.left = obj.l+"px";
		obj.style.top = obj.t+"px";
	}, 10);
}

// 完善右边栏交互效果
var count = 999;
bubbleWrap.onmouseover = function () {
	for (var i = 0; i < bubbleArr.length; i++){
		bubbleArr[i].index = i;
		clearInterval(bubbleArr[i].timer);
		bubbleArr[i].onclick = function () {
			bubbleArr[this.index].style.zIndex = count++;
		}
	}
}
bubbleWrap.onmouseout = function () {
	for (var i = 0; i < bubbleArr.length; i++){
		run(bubbleArr[i]);
	}
}

// 轮播图

//获取元素
var middle = document.getElementById('middle');
var imgArr = middle.getElementsByTagName('img');

var album_maxWidth = 3500;
//获取定位信息
var album_l = middle.offsetLeft;
setInterval(function (){
	album_l -= 2;
	if (album_l <= -album_maxWidth){
		album_l = 0;
	}
	middle.style.left = album_l + "px";
},30);


