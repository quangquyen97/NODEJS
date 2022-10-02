//let, const
//var


//cơ chế hosting
//phạm vi hoạt động 
//khai báo lại



function test(){
    var title = 'abc';
    if(true) {
        var title = 'cybersoft'
    } 
    console.log(title)
}
test()