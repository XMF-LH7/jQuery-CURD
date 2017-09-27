var data=(function(undefined){//自执行函数减少全局变量污染
	function Person(name,sex,city){
		this.name=name||'XXX';
		this.sex=sex||'male';
		this.city=city||'Paris';
	}
	return [
		new Person(),
		new Person('jack','male','London'),
		new Person('mike','female','Beijing'),
		new Person('john','female','Nanchang'),
		new Person('hanmeimei','female','Longgang'),
		new Person('kitty','male','Tokyo'),
		new Person('brown','male','Canada')
	];
})();