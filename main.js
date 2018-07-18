function getfile(file,callback)
{
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200"){
    callback(xhr.responseText);
  }
  };
xhr.send(null);
}
getfile("data.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  details(data.basics);
  career(data.CareerObjective);
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
  var cr1=document.createElement("h3");
  cr1.textContent="CourseObjective:";
  child2.appendChild(cr1);
  var line1=document.createElement("hr");
  child2.appendChild(line1);
  var cr2=document.createElement("p");
  cr2.textContent=careerinfo.info;
  child2.appendChild(cr2);
}
