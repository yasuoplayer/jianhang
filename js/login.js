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
	var gotop = document.getElementById('gotop');
	gotop.onclick = function()
	{
		document.documentElement.scrollTop=0;
		document.body.scrollTop=0;
	}
	
	var gg = document.getElementById('gg');
	var t1;
	function marqueemove(){
		if(gg.offsetLeft>-gg.offsetWidth)
		{
			gg.style.left=gg.offsetLeft-3+'px';
		}
		if(gg.offsetLeft==(-gg.offsetWidth))
		{
			gg.style.left=760+'px';
		}
	}
	t1 = setInterval(marqueemove,70);
	gg.onmouseover = function()
	{
		clearInterval(t1);
	}
	gg.onmouseleave = function()
	{
		clearInterval(t1);
		t1 = setInterval(marqueemove,70);
	}
	
	var json = [
	{phone:'13414851441','id':'440232199604220018',psw:'a123456789'},
	{phone:'18718308791','id':'450302198105016447',psw:'b123456789'},
	];
	var user = document.getElementById('user');
	var psw = document.getElementById('psw');
	var msg = document.getElementById('msg');
	var sub = document.getElementById('sub');
	var ischeck=false;
	function check1()
	{
		var flg = true;
		var uvalue = user.value.trim();
		var pvalue = psw.value.trim();
		var reg1 =  new RegExp(/(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}/) ; //手机
		var reg2 = new RegExp(/([0-9]){7,18}(x|X)?/); //身份证
		var reg3 = new RegExp(/^[a-zA-Z]/); //密码
		if(!uvalue)
		{
			msg.innerHTML='帐号不能为空！';
			return false;
		}
		else
		{
			msg.innerHTML='';
		}
		
		if(!pvalue)
		{
			msg.innerHTML='密码不能为空！';
			return false;
		}
		else
		{
			msg.innerHTML='';
		}
		if(!reg3.test(pvalue))
		{
			msg.innerHTML='密码为单字母开头！';
			return false;			
		}
		else
		{
			msg.innerHTML='';
		}		
		if(pvalue.length<6)
		{
			msg.innerHTML='密码长度最短6位！';
			return false;			
		}
		else
		{
			msg.innerHTML='';
		}
		if(pvalue.length>12)
		{
			msg.innerHTML='密码长度最长12位！';
			return false;			
		}
		else
		{
			msg.innerHTML='';
		}
		
		if(!(reg1.test(uvalue)||reg2.test(uvalue)))
		{
			msg.innerHTML='帐号是身份证或者手机号！';
			return false;			
		}
		else
		{
			msg.innerHTML='';
		}					
		return flg;

	}
	
	function check2()
	{
		var flg = false;
		var uvalue = user.value.trim();
		var pvalue = psw.value.trim();
		for(var key in json)
		{
			if(json[key].phone==uvalue||json[key].id==uvalue)
			{
				msg.innerHTML = '';
				if(json[key].psw==pvalue)
				{
					flg = true;
					break;
				}
				else
				{
					flg = false;
					msg.innerHTML = '密码错误';
					break;
				}
			}
			else
			{
				msg.innerHTML = '帐号不存在';
			}
		}	
		return flg;
	}
	
	user.onkeyup = function()
	{
		ischeck=check1()&&check2();
	}
	
	psw.onkeyup = function()
	{
		ischeck=check1()&&check2();
	}
	sub.onclick = function()
	{
		if(ischeck)
		{
			alert('登录成功');
		}
		else
		{
			alert('帐号密码填写有误');
		}
	}
	

}
