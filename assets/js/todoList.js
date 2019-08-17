//check off specific Todos by clicking
// method 1:
// $("li").click(function(){
// 	// if li is gray
// 	if ($(this).css("color")==="rgb(128, 128, 128)")
// 	{
// 		// turn it black
// 		$(this).css({
// 			color:"black",
// 			textDecoration:"none"
// 					})
// 	}		
// 	// if li is black
// 	else
// 	{   // turn it gray
// 		$(this).css({
// 		color:"gray",
// 		textDecoration:"line-through"
// 				})
// 	}
// }) 
// method 2:
$("ul").on("click","li",(function(){
	$(this).toggleClass("completed");// 其中completed这个class在css文件中定义的
}))



//Click on X to delete todo
//注意： 这个例子span镶嵌在li中，所以要防止bubble up的问题产生 
$("ul").on("click","span",(function(event){
	event.stopPropagation();//stopPropagation()is a jQuery method that will stop the event from bubbling up.
	$(this).parent().fadeOut("10000",function(){
		let delText=$(this).text();
		//remove local storage:
		for(let i=0;i<localStorage.length;i++){
			let key = localStorage.key(i);
			let val = localStorage[key];
			console.log(val);
			if(` ${val}`==delText){
				localStorage.removeItem(key);
			}
		}
		$(this).remove();
	})
}))

//click()only adds listeners for existing elements
//on() will add listeners for all potential future elements
$("input[type='text']").keypress(function(event){
	if(event.which===13)
	{	// grabbing new todo text from input
		var todoText=$(this).val();
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText + "</li>");


		//存入local storage:
		let date = new Date().toLocaleString();
		localStorage.setItem(date,todoText);
	}
})
//.append()    it can take a string of html and it will then append those elements to whatever we selected

//$("ul").on("click","span",(function(event){...
//$("ul").on("click","li",(function(){.....
// above two's scenod argument : span   li     that means when i click any span and li inside the ul. the function will be executed.

//读取本地存储的localhost
for(let i=0; i<localStorage.length;i++){
    let key = localStorage.key(i);
	let val = localStorage[key];
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ val + "</li>");
}

