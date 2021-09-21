const destination = 
    {"id":1,
    "img":"https://robohash.org/suntsuntfacilis.png?size=50x50&set=set1",
    "title":"Aluminum Zirconium Trichlorohydrex Gly",
    "description":"Dilation of fallopian aklsjdfka alda dlfjaksld aslls dllda a lsalfasda llasdlaea llrer a llslslsls al laslddlada ll ladsftube",
    "level":"Legal",
    "location":"Ayacucho",
    "date":"5/8/2021",
    "price":37}

    export const getFetchDetail = new Promise((res, rej)=>{
       
        let resp = '200'
        if(resp === '200'){
            setTimeout(()=>{
                res(destination)
            }, 2000)
        }else{
            rej('404')
        }
    
    })
    console.log(destination);

