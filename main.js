window.jQuery = function(nodeOrSelector){
    let nodes={}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}

window.jQuery.ajax=function(url,method,body,successFn,failFn){    //要加路径、方法、第四部分内容
    let request = new XMLHttpRequest()    
    request.open(
        method,   //也可以改成POST/PUT/DELETE等
        url
) //配置request

request.onreadystatechange = ()=>{
    if(request.readyState===4){
        if(request.status>=200&&request.status<300){
            successFn.call(undefined,request.responseText) 
        }else if(request.status>=400){
            failFn.call(undefined,request)
        }
    }
}
   
    request.send(body)
}

window.$=window.jQuery




myButton.addEventListener('click',(e)=>{
    window.jQuery.ajax(
        '/xxx',
        'POST',
        'a=1&b=2',
        (responseText)=>{console.log(1)},
        (request)=>{console.log(2)})
})