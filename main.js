window.jQuery = function(nodeOrSelector){
    let nodes={}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}

window.jQuery.ajax=function({url,method,body,headers}){   //本来是options    目前ajax返回的结果是个Promise对象
    return new Promise(function(resolve,reject){ 
        let request = new XMLHttpRequest()    
        request.open(
            method,   //也可以改成POST/PUT/DELETE等
            url
          ) //配置request
    
        for (let key in headers){
            let value = headers[key]
            request.setRequestHeader(key,value)
        }
    
    request.onreadystatechange = ()=>{
        if(request.readyState===4){
            if(request.status>=200&&request.status<300){
                resolve.call(undefined,request.responseText) 
            }else if(request.status>=400){
                reject.call(undefined,request)
            }
        }
    }
       
        request.send(body)
    })   //全局window下面的属性 Promise
}


// myButton.addEventListener('click',(e)=>{
//     window.jQuery.ajax({
//         url:'/xxx',
//         method:'GET',
//         headers: {
//             'content-type':'application/x-www-form-urlencoded',
//             'ff':'18'
//         }
//     }).then(
//         (text)=>{console.log(text)},
//         (request)=>{console.log(request)}
//     )
// })


myButton.addEventListener('click',(e)=>{
    let promise =window.jQuery.ajax({
        url:'/xxx',
        method:'GET',
        headers: {
            'content-type':'application/x-www-form-urlencoded',
            'ff':'18'
        }
    })
    promise.then(
        (text)=>{console.log(text)},
        (request)=>{console.log(request)}
    )
})