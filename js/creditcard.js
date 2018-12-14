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
				clearInterval(headnav.t)
				headnav.t = setInterval(function(){
					if(headnav.offsetTop<0)
					{
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
				clearInterval(headnav.t)
				headnav.t = setInterval(function(){
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
	};
	
	var json =[
	{title:'龙卡信用卡推出“留学慧”专项分期产品',content:'活动时间：2015年12月01日-2025年12月31日'},
	{title:'龙卡信用卡推出“留学慧”专项分期产品',content:'活动时间：2015年12月01日-2025年12月31日'},
	{title:'绑卡惠生活积分连连得',content:'活动时间：2018年05月01日-2019年04月30日'},
	{title:'赠加油卡为龙卡JCB信用卡加油',content:'活动时间：2018年06月05日-2018年12月31日'},	
	{title:'龙卡信用卡推出“留学慧”专项分期产品',content:'活动时间：2015年12月01日-2025年12月31日'},
	{title:'龙卡信用卡推出“留学慧”专项分期产品',content:'活动时间：2015年12月01日-2025年12月31日'},
	{title:'绑卡惠生活积分连连得',content:'活动时间：2018年05月01日-2019年04月30日'},	
	{title:'龙卡信用卡推出“留学慧”专项分期产品',content:'活动时间：2015年12月01日-2025年12月31日'},
	{title:'赠加油卡为龙卡JCB信用卡加油',content:'活动时间：2018年06月05日-2018年12月31日'},
	{title:'龙卡信用卡推出“鑫菁英”教育分期产品',content:'活动时间：2015年12月01日-2025年12月31日'},
	{title:'赠加油卡为龙卡JCB信用卡加油',content:'活动时间：2018年06月05日-2018年12月31日'},
	{title:'龙卡信用卡推出“鑫菁英”教育分期产品',content:'活动时间：2015年12月01日-2025年12月31日'},
	{title:'龙卡信用卡推出“鑫菁英”教育分期产品',content:'活动时间：2015年12月01日-2025年12月31日'},
	{title:'赠加油卡为龙卡JCB信用卡加油',content:'活动时间：2018年06月05日-2018年12月31日'},	
	{title:'龙卡信用卡推出“鑫菁英”教育分期产品',content:'活动时间：2015年12月01日-2025年12月31日'},
	{title:'赠加油卡为龙卡JCB信用卡加油',content:'活动时间：2018年06月05日-2018年12月31日'},
	{title:'龙卡信用卡推出“鑫菁英”教育分期产品',content:'活动时间：2015年12月01日-2025年12月31日'},
	{title:'龙卡信用卡推出“鑫菁英”教育分期产品',content:'活动时间：2015年12月01日-2025年12月31日'},
	{title:'赠加油卡为龙卡JCB信用卡加油',content:'活动时间：2018年06月05日-2018年12月31日'},	
	{title:'龙卡信用卡推出“鑫菁英”教育分期产品',content:'活动时间：2015年12月01日-2025年12月31日'},
	{title:'龙卡信用卡推出“鑫菁英”教育分期产品',content:'活动时间：2015年12月01日-2025年12月31日'},	
	{title:'绑卡惠生活积分连连得',content:'活动时间：2018年05月01日-2019年04月30日'},	
	{title:'绑卡惠生活积分连连得',content:'活动时间：2018年05月01日-2019年04月30日'},
	];
	var acul = document.getElementById('acul');
	var acnav = document.getElementById('acnav');
	var navlis = acnav.children;
	var pageto = document.getElementById('page');
	var pagenumber = document.getElementById('pagenumber');
	var sub1 = document.getElementById('submit');
	var keys = document.getElementById('key');
	console.log(json.length);
	var search = document.getElementById('search');
	var min;  //最小下表
	var max;  //最大下标
	var pagenumber_value; //每页显示数
	var acnav_accout; //导航总数
	var pagetovalue; //页码
	var next = document.getElementById('next');
	var kvalue='.';
	var reg;
	var json1 = [];
	function ini()
	{
		while(json1[0])
		{
			json1.shift();
		}
		reg = new RegExp(kvalue);
		for(var p=0;p<json.length;p++)
		{
			if(reg.test(json[p].title))
			{
//				console.log(json[p].title);
				json1.push(json[p].title);
			}
		}
		document.getElementById('count').innerHTML = json1.length;
		
		pagenumber_value = pagenumber.value;
		min = pageto.value;
		acnav_accout = Math.ceil(json1.length/pagenumber_value);
		while(acnav.hasChildNodes())
		{
			acnav.removeChild(acnav.firstChild);
		}
		for(var k=0;k<acnav_accout;k++)
		{
			var newli1 = document.createElement('li')
			acnav.appendChild(newli1);
			newli1.innerHTML=k+1;
		}
		if(parseInt(min))
		{
			min=parseInt(min)-1;
		}
		else
		{
			min = 0;
		}
		max = min+1;
		if(acnav.children[min])
		{
			acnav.children[min].className='on';
		}
		while(acul.hasChildNodes())
		{
			acul.removeChild(acul.firstChild);
		}
		for(var n in json1)
		{
			if(min*pagenumber_value<=n&&n<=max*pagenumber_value-1)
			{
			var newli = document.createElement('li');
			acul.appendChild(newli);
			newli.innerHTML = '<img src="img/20151231163830435103.jpg" /><div class="main"><span>'+json[n].title+'</span><p>'+json[n].content+'</p></div>'
			}
		}
		
		
		bind();
		
	}
	ini();
	
	function bind()
	{
		for(var n=0;n<navlis.length;n++)
		{
			navlis[n].onclick = (function(n1){
				return function()
				{
					min = n1;
					max=(n1+1);
					for(var k=0;k<navlis.length;k++)
					{
						navlis[k].className='';
					}
					
					navlis[n1].className='on';
					while(acul.hasChildNodes())
					{
						acul.removeChild(acul.firstChild);
					}
					for(var n in json1)
					{
						if(min*pagenumber_value<=n&&n<=max*pagenumber_value-1)
						{
						var newli = document.createElement('li');
						acul.appendChild(newli);
						newli.innerHTML = '<img src="img/20151231163830435103.jpg" /><div class="main"><span>'+json[n].title+'</span><p>'+json[n].content+'</p></div>'
						}
					}					
				}
			})(n);
		}
	}
	
	pageto.onchange = function()
	{
		pagetovalue = pageto.value;
		if(parseInt(pagetovalue))
		{	
			min = pagetovalue-1;
		}
		else
		{
			min=0;
		}
		if(min+1>acnav_accout)
		{
			min=0;
			pageto.value=min+1;
		}
		max=(min+1);
		min = min;
		for(var k=0;k<navlis.length;k++)
		{
			navlis[k].className='';
		}
		navlis[min].className='on';
		while(acul.hasChildNodes())
		{
			acul.removeChild(acul.firstChild);
		}
		for(var n in json1)
			{
				if(min<=n*pagenumber_value&&n<=max*pagenumber_value-1)
					{
					var newli = document.createElement('li');
					acul.appendChild(newli);
					newli.innerHTML = '<img src="img/20151231163830435103.jpg" /><div class="main"><span>'+json[n].title+'</span><p>'+json[n].content+'</p></div>'
					}
			}			
	}
	
	pagenumber.onchange = function()
	{
		min=0;
		ini();
	}
	
	next.onclick = function()
	{
		pageto.value=parseInt(pageto.value)+1>acnav_accout?1:parseInt(pageto.value)+1;
		if(pageto.value=='NaN')
		{
			pageto.value=1
		}
		ini();
	}
	
	keys.onkeyup = function()
	{
		kvalue = keys.value.trim();
		ini();
	}
	
	
	
	
	
}
