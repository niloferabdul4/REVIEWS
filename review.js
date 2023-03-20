




const person=[
            {person_image:'flower.jpg', person_name:'Nilofer ', person_job:'Web Developer'},              ////  object 1 //
            {person_image:'bee.jpg', person_name:'Mohammed Abdul', person_job:'Solution Architect'},     ////  object 2 //
            {person_image:'penguin.jpg', person_name:'Nazia Beaghum', person_job:'Online Coder'},       ////  object 3 //
            {person_image:'paw.jpg', person_name:'Mohammed Nowfal', person_job:'Software Developer'},   ////  object 4 ///
            {person_image:'dora.jpg', person_name:'Reeha Shareej', person_job:'Charted Accountant'},   ////  object 5 //
            {person_image:'funny-bear.jpg', person_name:'Mohammed Fahim', person_job:'IAS'},
            {person_image:'boss.jpg', person_name:'Farzan Najumudeen ', person_job:'IPS'}
              ////  object 6 // 

];


const back=document.getElementById('back');                ////  back button   /// 
const fwd=document.getElementById('fwd');                  ////  forward button ////
const rand=document.getElementById('random');              ////  random button  ////
const image=document.querySelector('#img');                ////  image tag   ////
const authorName=document.querySelector('#author');        ///   h4  tag (author) ///
const jobName=document.querySelector('#job');              ///   h5 tag (job)   //////


let count=0;


/////    BACK BUTTON EVENT  ////

back.addEventListener('click',()=>{
count--;
image.src=person[count].person_image;
authorName.innerHTML=person[count].person_name;
jobName.innerHTML=person[count].person_job;

});


////  FWD BUTTON EVENT  ////////

fwd.addEventListener('click',()=>{
count++;
image.src=person[count].person_image;
authorName.innerHTML=person[count].person_name;
jobName.innerHTML=person[count].person_job;

    
}


);

/////   RANDOM PERSON REVIEW   ///


 rand.addEventListener('click',()=>{

    current=getRandomPerson();
    image.src = person[current].person_image;
    authorName.innerHTML=person[current].person_name;
    jobName.innerHTML=person[current].person_job;

});
function getRandomPerson() {
    return Math.floor(Math.random()*person.length);
}



