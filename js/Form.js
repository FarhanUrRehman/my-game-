class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
   this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  setElementsPosition() {
    this.titleImg.position(120, 50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.playButton.position(width / 2 - 90, height / 2 - 20);
    this.greeting.position(width / 2 - 300, height / 2 - 100);
  }

  setElementsStyle() {
    this.titleImg.class("gameTitle");
    this.input.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      playerCount += 1;
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
      player.getDistance();
    });
  }

  display() {
    this.setElementsPosition();
    // this.GameStoryswal();
    this.setElementsStyle();
    this.handleMousePressed();

    function SwalOverlayColor(color){ setTimeout(function(){ $(".swal-overlay").css(
      {"background-color":color}); },200); }

    SwalOverlayColor("blue")
    swal({
      
     title: `The Mysterious Treasure`,
      text: "This is the treasure that no one found this treasure was burried my some mystical creatures from ancient time  but a curse destroy them all but some how the treasure was saved... but no one ever able to find it but a man saved the treasure in the jungle with his magical powers but exactly where no one knows but.....  a riddle was written on the cave at a jungle  I AM THOUSAND YEARS OLD BUT STILL NOT TIRED TO WORK I AM OLD BUT WORKING AS YOUNG STILL STANDING ON MY FOOT...TELL ME WHO AM I",

     
      
       
        
       
     

     
            
      
     // imageUrl:
     //  "https://cdn.shopify.com/s/files/1/1061/1924/products/Thumbs_Down_Sign_Emoji_Icon_ios10_grande.png",
     // imageSize: "200x200",
      confirmButtonText: "CLICK to continue.."
    });
  }

 // GameStoryswal(){
    
 //}

}

