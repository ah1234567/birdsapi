function signForm() {
    
       
    let f = document.forms["contactform"]["name1"].value;
    let g = document.forms["contactform"]["name2"].value;
    let h = document.forms["contactform"]["name3"].value;
    if(this.state.value1 ==""){
alert("Fill out your name");
// return false;
}else if( g ==""){
alert("Fill out your email");
// return false;
}else if(h == "" ){
alert("Fill out your message");
// return false;
}else if(f =="" && g ==""){
alert("Fill out your name and email");

} 

}