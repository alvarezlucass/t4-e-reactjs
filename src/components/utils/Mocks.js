const destinations = [
    {"id":1,"img":"https://robohash.org/repudiandaeexpeditaquasi.png?size=50x50&set=set1","title":"Therapeutic Exercise Treatment of Musculoskeletal System - Lower Back / Lower Extremity using Prosthesis","date":"30/05/2021","description":"Incision of mediastinum","location":20.6262629,"price":73},
{"id":2,
"img":"https://robohash.org/quisestquis.png?size=50x50&set=set1",
"title":"Removal of Synthetic Substitute from Heart, Open Approach",
"date":"08/05/2021",
"description":"Microscopic examination of specimen from lymph node and of lymph, other microscopic examination",
"location":130.02554,
"price":43},
{"id":3,"img":"https://robohash.org/nesciuntreprehenderitsit.png?size=50x50&set=set1","title":"Drainage of Right Middle Lung Lobe, Open Approach, Diagnostic","date":"27/12/2020","description":"Peritoneal lavage","location":21.8107747,"price":68},
{"id":4,"img":"https://robohash.org/autetea.png?size=50x50&set=set1","title":"Ultrasonography of Left Ovary using Other Contrast","date":"16/08/2021","description":"Thoracoplasty","location":-90.6703399,"price":86},
{"id":5,"img":"https://robohash.org/ducimusvoluptatesprovident.png?size=50x50&set=set1","title":"Extirpation of Matter from Left Lung, Via Natural or Artificial Opening Endoscopic","date":"11/06/2021","description":"Anoscopy","location":28.8028968,"price":9},
{"id":6,"img":"https://robohash.org/quaequiaquidem.png?size=50x50&set=set1","title":"Drainage of Left Patella, Open Approach, Diagnostic","date":"04/07/2021","description":"Resection of vessel with anastomosis, aorta","location":-118.2548551,"price":11},
{"id":7,"img":"https://robohash.org/rerumomnisinventore.png?size=50x50&set=set1","title":"Change Splint on Left Toe","date":"26/11/2020","description":"Other operations on penis","location":12.0512149,"price":59},
{"id":8,"img":"https://robohash.org/dictautid.png?size=50x50&set=set1","title":"Revision of Infusion Device in Bladder, Percutaneous Endoscopic Approach","date":"22/10/2020","description":"Excision of perirectal tissue","location":23.5826177,"price":76},
{"id":9,"img":"https://robohash.org/dolorsaeperepudiandae.png?size=50x50&set=set1","title":"Removal of Autologous Tissue Substitute from Left Wrist Joint, Open Approach","date":"25/12/2020","description":"Exploration of pituitary fossa","location":123.9023,"price":54},
{"id":10,"img":"https://robohash.org/aspernaturquiadeserunt.png?size=50x50&set=set1","title":"Supplement Left Brachial Vein with Nonautologous Tissue Substitute, Open Approach","date":"05/07/2021","description":"Other excision of joint, shoulder","location":-122.8020059,"price":67}
];

export const getFetch = new Promise (( resolve)=>{

    setTimeout(()=> {
        resolve(destinations)
    }, 5000)
})
console.log(destinations);