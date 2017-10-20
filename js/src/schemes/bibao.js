<script type="text/javascript">
	function f1(){
		var subtr = document.getElementsByClassName("subtr");
		function f2(){
			var arr = new Array;
			for(var i=0; i<subtr.length; i++){
				if(subtr[i].children[0].innerHTML > 123){
					arr.push(subtr[i].children[0].innerHTML);
				}
			}

		}
		return f2;
		console.log(arr);
	}
	var result = f1();
	result();//执行的是f2函数
</script>