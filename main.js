window.jQuery = function(nodeOrSelector){
    let nodes={}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}

window.jQuery.ajax=function({url,method,body,successFn,failFn,headers}){   //本来是options
    // let url
    // if(arguments.length===1){
    //     url = options.url   
    // }else if(arguments.length===2){
    //     url = arguments[0]
    //     options = arguments[1]
    // }

    // let method = options.method
    // let body = options.body
    // let successFn = options.successFn
    // let failFn = options.failFn
    // let headers = options.headers
 //ES6来写   解构赋值
//  let {url,method,body,successFn,failFn,headers} =options   //与上面的参数等价替换



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
            successFn.call(undefined,request.responseText) 
        }else if(request.status>=400){
            failFn.call(undefined,request)
        }
    }
}
   
    request.send(body)
}

window.$=window.jQuery

function f1(responseText){}
function f2(responseText){}


myButton.addEventListener('click',(e)=>{
    // let obj ={
    //     url:'/xxx',
    //     method:'GET',
    //     successFn:()=>{},
    //     failFn:()=>{}
    // }
    // window.jQuery.ajax(obj)

    window.jQuery.ajax({
        url:'/ff',
        method:'GET',
        headers: {
            'content-type':'application/x-www-form-urlencoded',
            'ff':'18'
        },
        successFn:(x)=>{
            console.log(x)    //x其实是callback回来的request.responseText
            f1.call(undefined,x)   //x其实是callback回来的responseText（上面的f1里面的）
            f2.call(undefined,x)   //x其实是callback回来的responseText（上面的f2里面的）
        },
        failFn:(x)=>{
            console.log(x)  //x其实是callback回来的request
            console.log(x.status)
            console.log(x.responseText)
        }
    })
})