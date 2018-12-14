window.onload = function()
{
	
		function getclass(classn) {//创建函数 传入形参
                if(!document.getElementsByClassName) {//判断document.getElementsByClassName方法是否支持
                    var list = document.getElementsByTagName("*");//先取得所有的dom标签元素
                    var temp = [];//创建临时数组
                    for(var i = 0; i < list.length; i++) {//循环每一个dom元素
                        if(list[i].className == classn) {//判断当前这个元素的class名称是否等于box
                            temp.push(list[i])//如果等于，将该元素添加到数组中去
                        }

                    }
                     return temp;//；返回给函数
                }
                else{

                    return document.getElementsByClassName(classn); 
                }
                }
	
	var oShow = document.getElementById('showbusiness');
	var oBussiness = document.getElementById('bussiness');
	var oBox = document.getElementById('businessbox');
	var aMqs =  getclass('mq')  ;
	var aMqnav =getclass('mqnav')[0].getElementsByTagName('li') ;
	var t1,t2,t3,t4,t5,t6;
	

	
	
	oShow.onmouseenter = function()
	{
		clearInterval(t2);
		oBussiness.style.display='block';
		t1 = setInterval(function(){
			var opa = oBussiness.style.opacity*100;
			if(oBussiness.offsetLeft<80)
			{
				oBussiness.style.opacity=(opa+10)/100;
				oBussiness.style.left=oBussiness.offsetLeft+8+'px';
			}
			else if(oBussiness.offsetLeft==80)
			{
				clearInterval(t1);
			}
		},10);
	}
	oBox.onmouseleave = function()
	{
		clearInterval(t1);
		t2 = setInterval(function(){
			var opa = oBussiness.style.opacity*100;
			if(oBussiness.offsetLeft>0)
			{
				oBussiness.style.opacity=(opa-10)/100;
				oBussiness.style.left=oBussiness.offsetLeft-8+'px';
			}
			else if(oBussiness.offsetLeft==0)
			{
				oBussiness.style.display='none';
				clearInterval(t2);
			}			
		},10);
	}
	var n=0;
	function mqmove()
	{
		n=++n>5?0:n;
		for(var i=0;i<aMqs.length;i++)
		{
			aMqs[i].style.mozOpacity=0
			aMqs[i].style.khtmlOpacity=0
			aMqs[i].style.opacity = 0;
			aMqs[i].style.display='none'
			aMqnav[i].children[0].className=''
			
		}
		aMqnav[n].children[0].className='active';
		clearInterval(t3);
		t3 = setInterval(function(){
			var opa = aMqs[n].style.opacity*100;
			aMqs[n].style.mozOpacity=(opa+10)/100
			aMqs[n].style.khtmlOpacity=(opa+10)/100
			aMqs[n].style.opacity = (opa+10)/100;
			aMqs[n].style.display='block'
			aMqs[n].style.filter='alpha(opacity='+(opa+10)+')'; 
			if(aMqs[n].style.opacity>=1)
			{
				aMqs[n].style.opacity=1
				aMqs[n].style.mozOpacity=1
				aMqs[n].style.khtmlOpacity=1
				aMqs[n].style.filter='alpha(opacity=100)';
				clearInterval(t3);
			}
		},50);
	}
	t4 = setInterval(mqmove,5000);
	
	
	for(var k=0;k<aMqnav.length;k++)
	{
		aMqnav[k].onmouseenter = (function(k)
		{
			return function()
			{
				clearInterval(t4);
				
				n=k-1;
				mqmove();
				for(var l=0;l<6;l++)
				{
					clearInterval(aMqnav[l].children[0].children[0].k);
					clearInterval(aMqnav[l].children[0].children[0].j);
					aMqnav[l].children[0].children[0].j = (function(o){
						return setInterval(function(){
							if(o.offsetHeight<48)
							{
								o.style.height=o.offsetHeight+1+'px';
							}
							else
							{
								clearInterval(o.j);
							}
						},10);
						
					})(aMqnav[l].children[0].children[0]);
				}
			}
		})(k);
		
		aMqnav[k].onmouseout = (function(k)
		{
			return function()
			{
				clearInterval(t4);
				for(var l=0;l<6;l++)
				{
					clearInterval(aMqnav[l].children[0].children[0].k);
					clearInterval(aMqnav[l].children[0].children[0].j);
					aMqnav[l].children[0].children[0].k = (function(o){
						return setInterval(function(){
							if(o.offsetHeight>0)
							{
								o.style.height=o.offsetHeight-1+'px';
							}
							else
							{
								clearInterval(o.k);
							}
						},10);
						
					})(aMqnav[l].children[0].children[0]);
				}
			}
		})(k);		

	}
	
	
	
	
	var nav = document.getElementById('nav');
	var lis = nav.children;
	
	for(var n=0;n<lis.length;n++)
	{
		lis[n].onmouseover = (function(n){
			return function()
			{
				for(var i=0;i<lis.length;i++)
				{
					lis[i].children[1].style.display='none';
				}
				lis[n].children[1].style.display='block';
			}
		})(n);
		lis[n].onmouseout = (function(n){
			return function()
			{
					lis[n].children[1].style.display='none';
			}
		})(n);		
	}
	
	var mqbox = document.getElementById('mq');
	mqbox.onmouseover = function()
	{
		clearInterval(t4);
	}
	
	mqbox.onmouseout = function()
	{
		clearInterval(t4);
		t4 = setInterval(mqmove,5000);
	}
	
	
	var scrollbox = document.getElementById('scrollbox');
	console.log(scrollbox)
	var left1 = document.getElementById('left1');
	var right1 = document.getElementById('right1');
	var time=0;
	right1.onclick = function()
	{
		time++;
		if(time>3)
		{
			time=2;
			return;
		}
		clearInterval(t5);
		t5 = setInterval(function(){
			var left = scrollbox.offsetLeft
			if(left==-960*time||left>=2880)
			{
				clearInterval(t5);
			}			
			else if(left<960*time)
			{
				scrollbox.style.left = left  -10 +'px'
			}
			if(left==-2880)
			{
				right1.style.background='url(img/btn_right.png)';
			}
			else
			{
				right1.style.background='url(img/icon_right.png)';
				left1.style.background='url(img/icon_left.png)';
			}

		},10);
	}
	
	left1.onclick = function()
	{
		time--;
		if(time<0)
		{
			time=0;
			return;
		}
		clearInterval(t5);
		t5 = setInterval(function(){
			var left = scrollbox.offsetLeft
			if(left==-960*time||left==0)
			{
				clearInterval(t5);
			}
			else if(left<-960*time)
			{
				scrollbox.style.left = left  +10 +'px'
			}
			if(left==0)
			{
				left1.style.background='url(img/btn_left.png)';
			}
			else
			{
				left1.style.background='url(img/icon_left.png)';
				right1.style.background='url(img/icon_right.png)';
			}			
		},10);
	}
	
	
	var left2 = document.getElementById('left2');
	var right2 = document.getElementById('right2');
	var scrobox1 = document.getElementById('scrollbox1');
	var time1=0;
	right2.onclick = function()
	{	time1++;
		if(time1>2)
		{
			time1=2;
			return;
		}
		clearInterval(t6);
		t6 = setInterval(function(){
			if(scrollbox1.scrollLeft==464*time1)
			{
				clearInterval(t6);
				
			}			
			else if(scrollbox1.scrollLeft<464*time1)
			{
				scrollbox1.scrollLeft+=16;
			}
			if(scrollbox1.scrollLeft==928)
			{
				right2.src='img/btn_right.png';
			}
			else
			{
				left2.src='img/icon_left.png';
				right2.src='img/icon_right.png';
			}

		},20);
	}
	
	left2.onclick = function()
	{
		time1--;
		if(time1<=0)
		{
			time1=0;
			return false;
		}
		clearInterval(t6);
		t5 = setInterval(function(){
			if(scrollbox1.scrollLeft==464*time1)
			{
				clearInterval(t6);
			}			
			else if(scrollbox1.scrollLeft>464*time1)
			{
				scrollbox1.scrollLeft-=16;
			}
			if(scrollbox1.scrollLeft==0)
			{
				left2.src='img/btn_left.png';
			}
			else
			{
				left2.src='img/icon_left.png';
				right2.src='img/icon_right.png';
			}			

		},20);
	}	
	
	var lis1 = document.getElementById('dnav').children;
	var divs = document.getElementById('div').children;
	
	for(var i=0;i<lis1.length;i++)
	{
		lis1[i].onmouseenter = (function(i){
			return function()
			{
				for(var l=0;l<divs.length;l++)
				{
					divs[l].style.display='none';
				}
				divs[i].style.display='block';
			}
		})(i);
	}
	
	
	var gotop = document.getElementById('gotop')
	gotop.onclick=function()
	{
		document.body.scrollTop=document.documentElement.scrollTop=0
	}
}
