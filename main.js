// function getfile(file,callback)
// {
//   var xhr=new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange=function(){
//     if(xhr.readyState === 4 && xhr.status=="200"){
//     callback(xhr.responseText);
//   }
//   };
// xhr.send(null);
// }
// getfile("data.json",function(text){
//   var data=JSON.parse(text);
//   console.log(data);
//   details(data.basics);
//   career(data.CareerObjective);
//   education(data.education);
//   technicalskills(data.Skills);
//   achieve(data.Achievements);
// })
function loadjson(file)
{
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }
      else{
        reject(new Error('error'))
      }
    })
    })
  }
  var newfile = loadjson("data.json")
  newfile.then(data=>{
  details(data.basics);
  career(data.CareerObjective);
  education(data.education);
  technicalskills(data.Skills);
  achieve(data.Achievements);
})

var child=document.querySelector(".childone");
function details(det)
{
  var img=document.createElement("img");
  img.src=det.image;
  child.appendChild(img);
  var name=document.createElement("h3");
  name.textContent = det.name;
  child.appendChild(name);
  var phoneno=document.createElement("h3");
  phoneno.textContent=det.phoneno;
  child.appendChild(phoneno);
  var mail=document.createElement("a");
  mail.href="mailto:krishnasri.challa12@gmail.com";
  mail.textContent=det.email;
  child.appendChild(mail);
  var address1=document.createElement("h2");
  address1.textContent="Address:";
  child.appendChild(address1);
  var line=document.createElement("hr");
  child.appendChild(line);
  var Address=document.createElement("h3");
  Address.textContent=det.Address;
  child.appendChild(Address);
}

var child2=document.querySelector(".childtwo");
function career(careerinfo)
{
  var cr1=document.createElement("h2");
  cr1.textContent="CourseObjective:";
  child2.appendChild(cr1);
  var line1=document.createElement("hr");
  child2.appendChild(line1);
  var cr2=document.createElement("p");
  cr2.textContent=careerinfo.info;
  child2.appendChild(cr2);
}
function education(educationinfo){
  var ed1=document.createElement("h2");
  ed1.textContent="Educational Qualification";
  child2.appendChild(ed1);
  var line2=document.createElement("hr");
  child2.appendChild(line2);
  for(i=0;i<educationinfo.length;i++)
  {
    var deg=document.createElement("h4");
    deg.textContent = educationinfo[i].degree;
    child2.appendChild(deg);

    var edu1=document.createElement("ul");
    var edu2=document.createElement("li");
    edu2.textContent=educationinfo[i].institute;
    edu1.appendChild(edu2);
    child2.appendChild(edu1);

    var edu4=document.createElement("ul");
    var edu3=document.createElement("li");
    edu3.textContent=educationinfo[i].data;
    edu4.appendChild(edu3);
    child2.appendChild(edu4);
  }
}
function technicalskills(tech)
{
  var tech1=document.createElement("h2");
  tech1.textContent="Technical Skills";
  child2.appendChild(tech1);
  var line3=document.createElement("hr");
  child2.appendChild(line3);
  var skilldata=document.createElement("table");
  skilldata.border="5";
  child2.appendChild(skilldata);
  tabledata="";
  for(i=0;i<tech.length;i++){
  tabledata+="<tr><td>"+tech[i].title+"</td><td>"+tech[i].data+"</td></tr>"
}
skilldata.innerHTML=tabledata;
  // for(i=0;i<tech.length;i++)
  // {
  //   var degr=document.createElement("h3");
  //   degr.textContent=tech[i].title;
  //   child2.appendChild(degr);
  //   var tech2=document.createElement("ul");
  //   var tech3=document.createElement("li");
  //   tech3.textContent=tech[i].data;
  //   tech2.appendChild(tech3);
  //   child2.appendChild(tech2);
  // }
}
function achieve(ac)
{
  var ac1=document.createElement("h2");
  ac1.textContent="Achievements";
  child2.appendChild(ac1);
  var line4=document.createElement("hr");
  child2.appendChild(line4);
  for(i=0;i<ac.length;i++)
  {
    var edu1=document.createElement("ul");
    var edu2=document.createElement("li");
    edu2.textContent=ac[i].inform;
    edu1.appendChild(edu2);
    child2.appendChild(edu1);
  }

}
