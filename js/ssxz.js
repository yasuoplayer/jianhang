window.onload = function()
{
	var oShow = document.getElementById('showbusiness');
	var oBussiness = document.getElementById('bussiness');
	var oBox = document.getElementById('businessbox');
	var t1,t2;
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
				console.log(1);
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
	var scro = document.getElementById('scro');
	var lis = scro.getElementsByTagName('li');
	var mask = document.getElementById('mask');

	for(var i=0;i<lis.length;i++)
	{
		lis[i].onmouseenter = (function(i){
			var that = lis[i];
			return function()
			{
				for(var k=0;k<lis.length;k++)
				{
					lis[i].style.zIndex='1';
				}
				that.style.zIndex='5';
				mask.style.display='block';
				clearInterval(that.t)
				clearInterval(that.t1)
				that.t = setInterval(function(){
					
					if(that.offsetHeight<321)
					{
						that.style.height=that.offsetHeight+2+'px';
					}
					if(that.offsetHeight>=321)
					{
						clearInterval(that.t);
					}
				},20);
			}
		})(i);
		
		lis[i].onmouseout = (function(i){
			var that = lis[i];
			return function()
			{
				for(var k=0;k<lis.length;k++)
				{
					lis[i].style.zIndex='1';
				}
				mask.style.display='none';
				clearInterval(that.t)
				clearInterval(that.t1)
				that.t1= setInterval(function(){
					
					if(that.offsetHeight>=240)
					{
						that.style.height=that.offsetHeight-2+'px';
					}
					if(that.offsetHeight<=240)
					{
						clearInterval(that.t1);
					}
				},20);
			}
		})(i);		
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
	var headnav = document.getElementById('headnav');
	var oldtop=0;
	var isfix = false;
	window.onscroll = function(){	
		var scrot = document.documentElement.scrollTop || document.body.scrollTop;
		if(scrot>481&&isfix==false)
		{
			headnav.style.position='fixed';
			headnav.style.background='#eee';
			headnav.style.top = -81+'px';
			isfix=true;
		}
		else if(scrot>481&&isfix)
		{
			if(oldtop>scrot&&headnav.offsetTop<0)  //shang
			{
				console.log('shang');
				clearInterval(headnav.t)
				headnav.t = setInterval(function(){
					if(headnav.offsetTop<0)
					{
						console.log(headnav.offsetTop);
						headnav.style.top=headnav.offsetTop+9+'px';
					}
					else
					{
						clearInterval(headnav.t)
					}
				},20);
			}
			if(oldtop<scrot&&headnav.offsetTop>-81)  //xia
			{
				console.log('xia');
				clearInterval(headnav.t)
				headnav.t = setInterval(function(){
					console.log(headnav.offsetTop);
					if(headnav.offsetTop>-81)
					{
						headnav.style.top=headnav.offsetTop-9+'px';
					}
					else
					{
						clearInterval(headnav.t)
					}
				},20);
			}			
		}
		
		else if(scrot<481)
		{
			console.log('hui');
			clearInterval(headnav.t)
			headnav.style.position='relative';
			headnav.style.background='';
			headnav.style.top='0px';
			isfix=false;
		}
		oldtop = scrot;
	}	
	var gotop = document.getElementById('gotop');
	gotop.onclick = function()
	{
		document.documentElement.scrollTop=0;
		document.body.scrollTop=0;
	}	
}
