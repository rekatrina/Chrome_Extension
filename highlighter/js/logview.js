function ClickSearch(){
	//alert("searchClick")
//	alert(document.readyState)
	var log_win_content = document.getElementById("log_win_content")
	
//	alert(log_win_content.innerHTML)
}

function parseEveryLine(trEl){
	var str = trEl.getElementsByTagName("td")[1].innerHTML
	var fields = str.split("|")
	var newStr = ""
	
	var field_color = {0:"#e5d5a6",10:"#FF0000", 11:"#FF0000", 14:"#FF0000", 18:"#FF0000", 20:"#FF0000"}
	var field_prefix = {10:"动作"}
	
	for(var i=0; i<fields.length; i++){
		if(field_prefix.hasOwnProperty(i)){
			fields[i] = field_prefix[i] + fields[i]
		}
		
		if(field_color.hasOwnProperty(i))
			newStr = newStr + '<font color='+ field_color[i] +'>' + fields[i] + "</font>" + "|"
		else
			newStr = newStr + fields[i] + "|"
	}
	trEl.getElementsByTagName("td")[1].innerHTML = newStr
}

function parseLog(){
	var log_selected = document.getElementsByClassName("combo_value")[0]
	alert(log_selected.value)
	if(log_selected.value.indexOf("adstainlog")!=-1){
		alert("目前不支持此类型日志解析")
		return
	}
	// locate code log
	var log_win_content = document.getElementById("log_win_content")
	var table = log_win_content.getElementsByClassName("code_table")[0].getElementsByTagName("tbody")[0]
	var trList = table.getElementsByTagName("tr")
	var flag_text = "parse by Log HighLight"
	
	// unsearch
	if(trList[0].childElementCount == 1){ 
		alert("请先提交查询")
	}
	else{
		// 检测到已经解析过，不处理
		if(trList[0].getElementsByTagName("td")[1].innerHTML==flag_text)
			return
		for(var i=1; i<trList.length; i++)
		parseEveryLine(trList[i])
		table.innerHTML = '<tr><td class="line_td" data-line-num="0"></td><td>' + flag_text + '</td></tr>' + table.innerHTML
	}

	//var firstLine = trList[1].getElementsByTagName("td")[1]
}

function addButton(el){
	var o = document.createElement('button')
	o.id = 'color_btn'
	o.class = 'cloudjs_btn'
	o.innerHTML = 'log上色'
	o.addEventListener('click', parseLog)
	el.appendChild(o)
}

var btn_tijiao = document.getElementById("search_btn")
btn_tijiao.addEventListener('click', ClickSearch)

var btn_row = document.getElementsByClassName("row ta_c")[0]



addButton(btn_row)
