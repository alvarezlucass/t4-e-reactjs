const destinations = [
    {"id":1,
    "img":"https://robohash.org/suntsuntfacilis.png?size=50x50&set=set1",
    "title":"Aluminum Zirconium Trichlorohydrex Gly",
    "description":"Dilation of fallopian tube",
    "level":"Legal",
    "location":121.370441,
    "date":"5/8/2021",
    "price":37},
{"id":2,"img":"https://robohash.org/quasetanimi.png?size=50x50&set=set1","title":"Dyphylline and Guaifenesin","description":"Biopsy of skull","level":"Business Development","location":11.4865869,"date":"11/2/2020","price":59},
{"id":3,"img":"https://robohash.org/fugiatetconsequuntur.png?size=50x50&set=set1","title":"lisinopril","description":"Diagnostic interview and evaluation, not otherwise specified","level":"Accounting","location":20.2899237,"date":"9/2/2021","price":67},
{"id":4,"img":"https://robohash.org/voluptatemculpaut.png?size=50x50&set=set1","title":"Amlodipine","description":"Transjugular liver biopsy","level":"Product Management","location":23.8218079,"date":"10/20/2020","price":71},
{"id":5,"img":"https://robohash.org/minimacorruptinisi.png?size=50x50&set=set1","title":"Air","description":"Other psychiatric somatotherapy","level":"Business Development","location":105.6745247,"date":"12/7/2020","price":77},
{"id":6,"img":"https://robohash.org/excepturisolutadeleniti.png?size=50x50&set=set1","title":"Lidocaine","description":"Osteoclasis, femur","level":"Support","location":5.6463088,"date":"7/16/2021","price":84},
{"id":7,"img":"https://robohash.org/omnisrepellatnisi.png?size=50x50&set=set1","title":"ZINC OXIDE","description":"Open biopsy of rectum","level":"Support","location":105.2677562,"date":"9/7/2021","price":85},
{"id":8,"img":"https://robohash.org/quiexplicaboest.png?size=50x50&set=set1","title":"OCTINOXATE","description":"Stapes mobilization","level":"Accounting","location":19.191129,"date":"9/14/2020","price":38},
{"id":9,"img":"https://robohash.org/velitautemsit.png?size=50x50&set=set1","title":"BENZTROPINE MESYLATE","description":"Contrast epididymogram","level":"Engineering","location":6.9643749,"date":"9/24/2020","price":54},
{"id":10,"img":"https://robohash.org/errorcorporisnihil.png?size=50x50&set=set1","title":"AVOBENZONE HOMOSALATE OCTISALATE OCTOCRYLENE OXYBENZONE","description":"Flexible sigmoidoscopy","level":"Services","location":2.8862985,"date":"1/26/2021","price":43}
];

export const getFetch = new Promise (( resolve)=>{

    setTimeout(()=> {
        resolve(destinations)
    }, 5000)
})
console.log(destinations);