class CatGame {
  constructor (width, height) {
    let this.gameWindow = new gameWindow(width, height);

    this.masterPath = "https://raw.githubusercontent.com/pensivepixel/\
Cat-Video-Game/master/";

    fetch(this.masterPath + "assets/sprites/animate/index.JSON")
    .then(response => response.json())
    .then(index => {
      //create new AnimateSprite for each folder in index
      for (let i = 0; i < index.length; i++) {
        let path = this.masterPath+"assets/sprites/animate/"+index[i];
        this.animateSprites.push(new AnimateSprite(path));
      }
      return Promise.all(this.animateSprites);
    })
    .then(fetch(this.masterPath + "assets/sprites/inanimate/index.JSON"))
    .then(response => response.json())
    .then(index => {
      //create new InanimateSprite for each folder in index
      for (let i = 0; i < index.length; i++) {
        let path = this.masterPath+"assets/sprites/inanimate/"+index[i];
        this.inanimateSprites.push(new InanimateSprite(path));
      }
      return Promise.all(this.inanimateSprites);
    })
    .then(fetch(this.masterPath + "levels/index.JSON"))
    .then(response => response.json())
    .then(index => {
      this.levelsIndex = index;
      this.main()
    })
  }

  main(){
    let level1 = new Level();
    level1.load()
    .then(level1.play(this.gameWindow))

  }
  loadLevel(levelNum) {
    //return promise
    //load all files
    //build the level
  }
  levelLoop(){
    console.log("levelLoop!");
  }
}
class Window {
  constructor (width, height) {
    //create all game layers
    this.animateLayer = new Layer("animateLayer", 999, this.width, this.height);
    this.inanimateLayer = new Layer("inanimateLayer", 0, this.width, this.height);
  }
}
class Layer {
  constructor (name, zIndex, width, height) {
    //create an HTML canvas element for this layer.
    let canvas = document.createElement("canvas");
    canvas.setAttribute("id", name);
    canvas.setAttribute("class", "layer");
    canvas.style.zIndex = zIndex;
    canvas.style.position = "absolute";
    canvas.width = width;
    canvas.height = height;

    //add to the html document and store in this object
    this._canvas = document.body.appendChild(canvas);

    //store the context to draw on
    this._ctx = canvas.getContext("2d");
  }
  draw(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {
    this._ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  }
}
class Level {
  constructor (levelNum) {
    this.levelNum = levelNum;
  }
  load() {
    //return promise
    //load up all the assets, build the level
  }
  play(gameWindow) {
    //display level to the gameWindow
    //requestAnimationFrame
  }
}
class AnimateSprite {
  constructor(path) {
    //fetch neccessary files
    //returns Promise.
  }
}
class InanimateSprite {
  constructor(path){
    //fetch neccessary files
    //returns Promise.
  }
}

let catGame = new CatGame(1024, 1858);

{
  /*
  { //download all images
    this.imageMaps = imageMaps;
    let promises = [];
    for (let i=0; i<imageMaps.length; i++){
      let filename = imageMaps[i].filename;
      promises[i] = new Promise((resolve) => {
        let img = new Image();
        img.onload = () => resolve(img);
        img.src = this.imagesPath+filename;
      });
    }
    return Promise.all(promises);
  }
  */

  // processSpriteSheets(spriteSheets) {
  //   //iterate over all spriteSheets in imageMaps
  //   for (let i=0; i<this.imageMaps.length; i++){
  //     switch (this.imageMaps[i].layout) {
  //       case "misc":
  //         this.processSpriteSheetAsMisc(spriteSheets[i], this.imageMaps[i]);
  //         break;
  //       case "animation":
  //         this.processSpriteSheetAsAnimation(spriteSheets[i], this.imageMaps[i]);
  //         break;
  //       case "grid":
  //         this.processSpriteSheetAsGrid(spriteSheets[i], this.imageMaps[i]);
  //         break;
  //       default:
  //         console.log("Error processing spriteSheet: invalid layout type: "
  //         + this.imageMaps[i]);
  //     }
  //   }
  // }
  //
  // processSpriteSheetAsMisc(sprite, map){
  //   //iterate over all sprites in sheet
  //   let result = new Map();
  //   for (let i=0; i<map.images.length; i++) {
  //     let currentSprite = map.images[i];
  //     let osc = new OffscreenCanvas(currentSprite.width, currentSprite.height);
  //     let ctx = osc.getContext("2d");
  //     let sx = currentSprite.x;
  //     let sy = currentSprite.y;
  //     let dWidth, sWidth = dWidth = currentSprite.width;
  //     let dHeight, sHeight = dHeight = currentSprite.height;
  //     let dy, dx = dy = 0;
  //
  //     ctx.drawImage(sprite, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  //     result.set(currentSprite.name, osc);
  //     this.sprites.set(currentSprite.name, osc);
  //   }
  //   return result;
  // }
  //
  // processSpriteSheetAsAnimation(sprite, map){
  //   //convert animation to misc map
  //   //create animation array of sprites and save to animations map
  //   map.images = [];
  //   let animations = new Map();
  //   let unitWidth = map.unitWidth;
  //   let unitHeight = map.unitHeight;
  //   for (let i=0; i<map.animations.length; i++) {
  //     let animation = [];
  //     for (let j=0; j<map.animations[i].n; j++) {
  //       //create and push an image object for this frame
  //       let spriteName = map.animations[i].name+""+j;
  //       animation.push(spriteName);
  //       map.images.push({
  //         "name": spriteName,
  //         "width": unitWidth,
  //         "height": unitHeight,
  //         "x": unitWidth*j,
  //         "y": unitHeight*i
  //       });
  //     }
  //     animations.set(map.animations[i].name, animation);
  //   }
  //   this.animations = animations;
  //   return this.processSpriteSheetAsMisc(sprite, map);
  // }
  // allSpriteAnimation(){
    //   let allSprites = this.sprites.values();
    //   let count = this.sprites.size-1;
    //   let interval = setInterval(()=>{
      //     this.dynamicLayer.ctx.clearRect(0,0,this.dynamicLayer.canvas.width, this.dynamicLayer.canvas.height);
      //     this.dynamicLayer.ctx.drawImage(allSprites.next().value, 0, 0);
      //     count--;
      //     if(count < 0) {
        //       count = this.sprites.size-1;
        //       allSprites = this.sprites.values();
        //     }
        //   }, 100);
        // }

  // drawSpritesToCanvas(spriteMap, ctx){
  //   let spriteMap = spriteMap.staticSprites;
  //   for (let i=0; i<spriteMap.length; i++) {
  //     let sprite = this.sprites.get(spriteMap[i].name);
  //     let instances = spriteMap[i].instances;
  //     for (let j=0; j<instances.length; j++) {
  //       let x = instances[j].x;
  //       let y = instances[j].y;
  //       ctx.drawImage(sprite, x, y);
  //     }
  //   }
  // }

  // infiniteMoveBackground() {
  //   this.backgroundOffsetX += 0.5;
  //   if (this.backgroundOffsetX > 1000) {
  //     this.backgroundOffsetX -= 1000;
  //   }
  //   this.drawBackground(this.backgroundOffsetX, this.backgroundOffsetY);
  //   requestAnimationFrame(() => this.infiniteMoveBackground());
  // }
  //
  // drawBackground(offsetX, offsetY) {
  //   let background = this.offscreenCanvases["Background"],
  //       sx = offsetX,
  //       sy = offsetY,
  //       sWidth = 1000,
  //       sHeight = 625,
  //       dx = 0,
  //       dy = 0,
  //       dWidth = 1000,
  //       dHeight = 625;
  //   this.staticLayer.ctx.drawImage(background, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
  // }
}
