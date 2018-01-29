myButton.addEventListener('click',(e)=>{
    let request = new XMLHttpRequest()
    // request.onreadystatechange = ()=>{
    //     console.log(request.readyState)
    // }  //只要变了，就打印出来
    
    request.onreadystatechange = ()=>{
        if(request.readyState===4){
            console.log('请求响应都完毕了')
            if(request.status>=200&&request.status<300){
                console.log('请求成功')
                console.log(request.responseText)
                let string = request.responseText
                let object = window.JSON.parse(string)  //把符合JSON语法的字符串转换成JS对应的值
                console.log(typeof object)
                console.log(object)
                console.log(object.note.to)
                console.log(object.note.from)


                // let parser = new DOMParser();
                // let xmlDoc = parser.parseFromString(request.responseText,"text/xml")
                // let c=xmlDoc.getElementsByTagName('to')[0].textContent
                // let title = xmlDoc.getElementsByTagName('heading')[0].textContent  //获取标题
                // console.log(c)
                // console.log(title)
            }else if(request.status>=400){
                console.log('请求失败')
            }
        }
    } 

    request.open(
        'GET',   //也可以改成POST/PUT/DELETE等
        '/xxx'
) //配置request
    
    request.send()
    // setInterval(()=>{
    //  console.log(request.readyState)   
    // },1) //每1ms问一次
})