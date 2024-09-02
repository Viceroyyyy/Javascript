function getData(){
    alert("About to get data");
    
    const xhr = new XMLHttpRequest();
    const url = "http://127.0.0.1:5500/data.json";
    xhr.open('GET', url);
    xhr.send();
    xhr.onload = () => {
        console.log("Loaded with data");
        console.log(xhr.responseText);
        
        let dataObj = JSON.parse(xhr.responseText);
        console.log(dataObj)
        for(let key in dataObj){
            let dl=document.createElement("dl");
            let dt=document.createElement("td");
            dt.innerHTML=`${key}`;
            
            let dd = document.createElement("dd");
            dd.innerHTML=`${dataObj[key]}`;
            dl.appendChild(dt);
            dl.appendChild(dd);
            document.getElementById("data").appendChild(dl);
        }

    };
    
}