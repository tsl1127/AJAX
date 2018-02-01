// window.jQuery = function(nodeOrSelector){
//     let nodes={}
//     nodes.addClass = function(){}
//     nodes.html = function(){}
//     return nodes
// }

// window.jQuery.ajax=function({url,method,body,successFn,failFn,headers}){   //本来是options
//     // let url
//     // if(arguments.length===1){
//     //     url = options.url   
//     // }else if(arguments.length===2){
//     //     url = arguments[0]
//     //     options = arguments[1]
//     // }

//     // let method = options.method
//     // let body = options.body
//     // let successFn = options.successFn
//     // let failFn = options.failFn
//     // let headers = options.headers
//  //ES6来写   解构赋值
// //  let {url,method,body,successFn,failFn,headers} =options   //与上面的参数等价替换



//     let request = new XMLHttpRequest()    
//     request.open(
//         method,   //也可以改成POST/PUT/DELETE等
//         url
// ) //配置request

//     for (let key in headers){
//         let value = headers[key]
//         request.setRequestHeader(key,value)
//     }

// request.onreadystatechange = ()=>{
//     if(request.readyState===4){
//         if(request.status>=200&&request.status<300){
//             successFn.call(undefined,request.responseText) 
//         }else if(request.status>=400){
//             failFn.call(undefined,request)
//         }
//     }
// }
   
//     request.send(body)
// }

// window.$=window.jQuery

// function success(responseText){
//     console.log(responseText)
// }
// function fail(request){
//     console.log(request)
// }


// myButton.addEventListener('click',(e)=>{
//     $.ajax({
//         url:'/xxx',
//         method:'GET'
//     }).then(success,fail)
// })


myButton.addEventListener('click',(e)=>{
    $.ajax({
        url:'/xxx',
        method:'GET'
    }).then(
    (responseText)=>{console.log(responseText)},
    (request)=>{console.log(request)}
     ).then(
        (responseText)=>{console.log(responseText)},
        (request)=>{console.log(request)}  
     )
})  //好处：不用起成功或失败的名字;可以then多次
