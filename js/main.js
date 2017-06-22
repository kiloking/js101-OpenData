var xhr = new XMLHttpRequest();
var url ="http://163.29.157.32:8080/dataset/6a3e862a-e1cb-4e44-b989-d35609559463/resource/f4a75ba9-7721-4363-884d-c3820b0b917c/download/7d74378519854941a8f0b09bb3d053e9.json"

xhr.open('GET' , url)
xhr.onreadystatechange = function() {
    if(xhr.readyState === 4) {
        document.getElementById('loading').style.display = 'none';
        var data = JSON.parse(xhr.responseText)
        data.forEach(function(value,index) {
            var image = document.createElement('img')
            image.src = data[index].ImageName
            document.querySelector('#result').appendChild(image)
        });
    }
}
xhr.send()
