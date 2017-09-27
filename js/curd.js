$(function(){
	showData();
	bindHandler();
});
function showData(){
	var trHtml='<tr><td>{1}</td><td>{2}</td><td>{3}</td><td><a href="#" data-id="{1}">delete</a><a href="#" data-id="{1}">update</a></td></tr>';
	data.forEach(function(v){
		var tr=String.format(trHtml,v.name,v.sex,v.city);
		$(tr).appendTo('tbody');
	});
}
function bindHandler(){
	$('table').on('click',function(e){
		if(e.target.tagName!='A') return;
		if($(e.target).text()=='delete'){
			if(!confirm('真删?')) return;
			var key=$(e.target).attr('data-id');
			for(var i=0;i<data.length;i++){
				if(data[i].name==key){
					data.splice(i,1);
					break;
				}
			}
			$(e.target).closest('tr').remove();
		}
	});
}
//自定义工具函数
String.format=function(){
	var result=arguments[0],reg;
	for(var i=1;i<arguments.length;i++){
		reg=new RegExp('\\{'+i+'\\}','g');
		result=result.replace(reg,arguments[i]);
	}
	return result;
};