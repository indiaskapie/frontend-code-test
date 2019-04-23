import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nasa-imgs',
  templateUrl: './nasa-imgs.component.html',
  styleUrls: ['./nasa-imgs.component.scss']
})
export class NasaImgsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    
    var url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=idmU1dMa1dfPvScmqqY8MVeFZLYfckxdi0b9pw1z";

    var request = new XMLHttpRequest();
    

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        //var resp = request.responseText;


        var resultArray = JSON.parse(request.response);
        let images : NodeListOf<HTMLImageElement> = document.querySelectorAll("#pImage");
        let captions : NodeListOf<HTMLElement> = document.querySelectorAll("#pCaption");
        let dates : NodeListOf<HTMLElement> = document.querySelectorAll("#pDate");
        let links : NodeListOf<HTMLLinkElement> = document.querySelectorAll(".photoMiddle a");
        
        for (var i = 0; i < 10; i++) {
          var element = resultArray["photos"][i];
          
          images[i].src = element.img_src;
          captions[i].innerHTML = element.camera.full_name;
          dates[i].innerHTML = element.earth_date;
          links[i].href = element.img_src;
        }

        document.querySelector("div.mainContent").classList.remove('hidden');

      } else {
        // We reached our target server, but it returned an error
        var resp = request.responseText;
        var errorElem : HTMLElement = document.querySelector("div.error");

        errorElem.innerHTML = resp;
        errorElem.classList.remove('hidden');        
        document.querySelector("div.mainContent").classList.add('hidden');
      }
    };

    request.onerror = function() {
      // There was a connection error of some sort
      var resp = request.responseText;
      var errorElem : HTMLElement = document.querySelector("div.error");

      errorElem.innerHTML = resp;
      errorElem.classList.remove('hidden');     
      document.querySelector("div.mainContent").classList.add('hidden');
    };

    request.open('GET', url);
    request.send();
    
  }

}
