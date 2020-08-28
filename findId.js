function testFunc(){
    alert("Test");
    var button = document.getElementById('article');
    button.addEventListener('click', function(event){
        alert("Test Code");
    });
}