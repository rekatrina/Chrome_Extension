function ClickSearch(){
	//alert("searchClick")
//	alert(document.readyState)
	var log_win_content = document.getElementById("log_win_content")
	
//	alert(log_win_content.innerHTML)
}

function parseEveryLine(trEl){
	var str = trEl.getElementsByTagName("td")[1].innerHTML
	var fields = str.split("|");
	alert("#field:"+fields.length)
	var newStr = "";
	
	var field_color = {10:"#FF0000", 11:"#FF0000", 14:"#FF0000", 18:"#FF0000", 20:"#FF0000"}
	
	for(var i=0; i<fields.length; i++){
		if(field_color.hasOwnProperty(i))
			newStr = newStr + '<font color="#FF0000">' + fields[i] + "</font>" + "|"
		else
			newStr = newStr + fields[i] + "|"
	}
	trEl.getElementsByTagName("td")[1].innerHTML = newStr
}

function parseLog(){
	// locate code log
	var log_win_content = document.getElementById("log_win_content")
	var table = log_win_content.getElementsByClassName("code_table")[0].getElementsByTagName("tbody")[0]
	var trList = table.getElementsByTagName("tr")

	// unsearch
	if(trList[0].childElementCount == 1){ 
		alert("请先提交查询")
	}
	else{
		parseEveryLine(trList[1])
	}
	var flag_row = document.createElement("<tr><td class="line_td" data-line-num="1">::before</td><td>done by Log HighLight</td>)
	var flag_row_1 = document.createElement('')
	
	table.insertBefore(, trList[0])
	
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

// 1. add Button for log coloring
//alert("find logview")
var btn_tijiao = document.getElementById("search_btn")
btn_tijiao.addEventListener('click', ClickSearch)
//alert(document.getElementsByClassName("row ta_c").length)
var btn_row = document.getElementsByClassName("row ta_c")[0]
//alert(btn_row.childElementCount)
addButton(btn_row)

//alert("finish")