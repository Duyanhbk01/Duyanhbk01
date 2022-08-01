/*! For license information please see main.61581b2e087fdc8a3aeb.bundle.js.LICENSE.txt */
(()=>{var e,t={555:(e,t,r)=>{"use strict";r(260);class i{constructor(e){this.scene=e,this.imageGame=new Phaser.GameObjects.Image(this.scene,0,0,"game1").setScale(1).setOrigin(0,0),this.createArrayColor()}createArrayColor(){let e=Math.round(this.imageGame.width/29),t=Math.round(this.imageGame.height/29);this.arrayColor=new Array;for(let r=0;r<e;r++)for(let e=0;e<t;e++){let t=this.scene.textures.getPixel(29*r,29*e,this.imageGame.texture.key);-1==this.arrayColor.indexOf(t.color)&&this.arrayColor.push(t.color)}}getArrayColor(){return this.arrayColor}getColorAfterGrayScale(e){let t=this.numberToColour(this.arrayColor[e]),r=this.rgb2grayscale(t[0],t[1],t[2]);return(r<<16)+(r<<8)+r}numberToColour(e){return[(16711680&e)>>16,(65280&e)>>8,255&e]}rgb2grayscale(e,t,r){return.3*e+.59*t+.11*r}getImageGame(){return this.imageGame}}var s=r(439);class a extends Phaser.GameObjects.Rectangle{constructor(e,t,r,i,s,a,o,l){super(e,t,r,s,a,o,l),this.numberOfColor=i,this.setOrigin(0,0)}getTextOfTile(){return this.textOfTile}getNumberOfColor(){return this.numberOfColor}setTextOfTile(e){this.textOfTile=e}setNumberOfColor(e){this.numberOfColor=e}addNumberColor(e){e||this.setTextOfTile(new Phaser.GameObjects.Text(this.scene,this.x+this.width/2,this.y+this.height/2,this.getNumberOfColor().toString(),{fontFamily:'Arial, "Times New Roman", Tahoma, serif',color:"#000000",fontSize:"15px"}).setDepth(1).setOrigin(.5,.5)),this.scene.add.existing(this.getTextOfTile())}editProperties(e=1){this.isStroked=!0,e<=1.5?(1==e&&(this.isStroked=!1),this.getTextOfTile().alpha=0):this.getTextOfTile().alpha=e/4,this.getTextOfTile().setResolution(e)}}class o extends Phaser.GameObjects.Rectangle{constructor(e,t,r,i,s,a,o,l){super(e,r,i,s,a,o,l),this.arrayColor=t,this.arrayTile=new Array,this.setOrigin(0,0),this.setStrokeStyle(1,0),this.setInteractive(),this.createTile(),this.createScroller(),this.dragendScroller(),this.setFirstCurrentTile(),this.inputManager(),e.add.existing(this)}setFirstCurrentTile(){this.currentTile=this.arrayTile[11],this.currentTile.getTextOfTile().setStyle({fontFamily:'Arial, "Times New Roman", Tahoma, serif',color:"#000000",fontSize:"65px"}),this.scene.registry.set("currentTile",this.currentTile)}createTextOfTile(e){e.setTextOfTile(new Phaser.GameObjects.Text(this.scene,e.x+72.5,e.y+72.5,e.getNumberOfColor().toString(),{fontFamily:'Arial, "Times New Roman", Tahoma, serif',color:"#000000",fontSize:"50px"}).setDepth(1).setOrigin(.5,.5)),this.scene.add.existing(e.getTextOfTile())}editProperties(e){e.getTextOfTile().setResolution(2)}createTile(){let e=0,t=0;for(let r=0;r<this.arrayColor.length;r++)r%5==0&&0!=r&&(r%10!=0&&(t-=5),e=0==e?1:0),this.arrayTile[r]=new a(this.scene,145*t+this.x,145*e+this.y,r,145,145,this.arrayColor[r]),this.arrayTile[r].setInteractive(),this.createTextOfTile(this.arrayTile[r]),this.editProperties(this.arrayTile[r]),this.scene.add.existing(this.arrayTile[r]),t++}createScroller(){this.lastScroller=0;let e=Math.floor(this.arrayColor.length/10);this.scroller=new s.Z(this,{bounds:[725*-e,0],value:0,slidingDeceleration:1e9,backDeceleration:1e4,orientation:"horizontal",valuechangeCallback:e=>{let t=e-this.x;this.x=e;let r=this.getArrayTile();for(let e=0;e<r.length;e++)r[e].getTextOfTile().x+=t,r[e].x+=t}})}dragendScroller(){let e=Math.floor(this.arrayColor.length/10);this.scroller.on("dragend",(()=>{let t=this.scroller.value,r=0;t<725&&t>0||t<725*-e||(r=t>this.lastScroller?725*Math.ceil(t/725):725*-Math.ceil(-t/725),this.scrollOnePage(t,r))}))}scrollOnePage(e,t){this.scene.tweens.addCounter({duration:150,from:e,to:t,onUpdate:e=>{let t=e.getValue()-this.x;this.x=e.getValue();let r=this.getArrayTile();for(let e=0;e<r.length;e++)r[e].getTextOfTile().x+=t,r[e].x+=t},onComplete:(e,r)=>{this.lastScroller=t,this.scroller.value=this.lastScroller}})}getArrayTile(){return this.arrayTile}getCurrentTile(){return this.currentTile}inputManager(){this.arrayTile.forEach(((e,t,r)=>{e.on("pointerdown",((t,r,i,s)=>{this.currentTile.getTextOfTile().setStyle({fontFamily:'Arial, "Times New Roman", Tahoma, serif',color:"#000000",fontSize:"50px"}),e.getTextOfTile().setStyle({fontFamily:'Arial, "Times New Roman", Tahoma, serif',color:"#000000",fontSize:"65px"}),this.currentTile=e,this.scene.registry.set("currentTile",this.currentTile)}))}))}}class l extends Phaser.Scene{constructor(){super({key:"ColorTableScene"})}preload(){}create(){this.colorManager=new i(this),this.registry.set("colorManager",this.colorManager);let e=Math.floor(this.colorManager.getArrayColor().length/10);this.colorTable=new o(this,this.colorManager.getArrayColor(),0,1100,725*(e+1),290),this.input.topOnly=!1}}class n extends Phaser.Scene{constructor(){super({key:"BootScene"})}preload(){this.cameras.main.setBackgroundColor(0),this.createLoadingGraphics(),this.load.on("progress",(e=>{this.progressBar.clear(),this.progressBar.fillStyle(8971347,1),this.progressBar.fillRect(this.cameras.main.width/4,this.cameras.main.height/2-16,this.cameras.main.width/2*e,16)}),this),this.load.on("complete",(()=>{this.progressBar.destroy(),this.loadingBar.destroy()}),this),this.load.pack("preload","./assets/pack.json","preload"),this.load.bitmapFont("gothic","https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/fonts/gothic.png","https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/fonts/gothic.xml")}update(){this.scene.start("ColorTableScene"),this.scene.start("GamePlayScene")}create(){}createLoadingGraphics(){this.loadingBar=this.add.graphics(),this.loadingBar.fillStyle(16777215,1),this.loadingBar.fillRect(this.cameras.main.width/4-2,this.cameras.main.height/2-18,this.cameras.main.width/2+4,20),this.progressBar=this.add.graphics()}}var h=r(244);const c=29,g=29;class u{constructor(e,t,r){this.scene=e,this.imageGame=t.getImageGame(),this.colorManager=t,this.currentTile=r,this.createData(),this.showTile(1,this.currentTile)}createData(){this.row=Math.round(this.imageGame.width/c),this.column=Math.round(this.imageGame.height/g),this.createArrayTile(this.row,this.column),this.retangle=new Phaser.Geom.Rectangle(this.scene.sys.canvas.width/2-this.row*c/2,this.scene.sys.canvas.height/2-this.column*g/2-200,this.row*c,this.column*g)}getRetangle(){return this.retangle}createArrayTile(e,t){this.arrayTile=new Array(e);for(let r=0;r<e;r++)this.arrayTile[r]=new Array(t);let r=this.scene.sys.canvas.width/2-e*c/2,i=this.scene.sys.canvas.height/2-t*g/2;for(let s=0;s<e;s++)for(let e=0;e<t;e++){let t=this.scene.textures.getPixel(s*c,e*g,"game1");this.arrayTile[s][e]=new a(this.scene,s*c+r,e*g+i-200,this.colorManager.getArrayColor().indexOf(t.color),c,g,16777215),this.arrayTile[s][e].addNumberColor(),this.arrayTile[s][e].setStrokeStyle(1,0)}}showTile(e=1,t){for(let r=0;r<this.arrayTile.length;r++)for(let i=0;i<this.arrayTile[0].length;i++){let s=this.colorManager.getColorAfterGrayScale(this.arrayTile[r][i].getNumberOfColor()),a=this.scene.add.existing(this.arrayTile[r][i]).setOrigin(0,0);a.editProperties(e),a.fillAlpha=1/(2*e),a.getNumberOfColor()==t.getNumberOfColor()?a.fillColor=0:a.fillColor=s}}getArrayTile(){return this.arrayTile}getCurrentTile(){return this.currentTile}setCurrentTile(e){this.currentTile=e}}var m=r(839);class T extends Phaser.Scene{constructor(){super({key:"GamePlayScene"})}preload(){}create(){this.scene.bringToTop("ColorTableScene"),this.colorManager=this.registry.get("colorManager"),this.currentTile=this.registry.get("currentTile"),this.tileGameManager=new u(this,this.colorManager,this.currentTile),this.cameras.main.setZoom(1),this.tileGameManager.showTile(1,this.currentTile);let e=new m.aj(this,{enable:!0,bounds:this.tileGameManager.getRetangle(),threshold:0}),t=this.cameras.main;t.setBounds(0,0,725,145*this.tileGameManager.column),e.on("drag1",(e=>{let r=e.drag1Vector;t.scrollX-=r.x/t.zoom,t.scrollY-=r.y/t.zoom})).on("pinch",(e=>{let r=e.scaleFactor;t.zoom*r<1||(t.zoom*=r)}),this)}update(){this.currentTile=this.registry.get("currentTile"),this.currentTile!=this.tileGameManager.getCurrentTile()&&(console.log("thay doi"),this.tileGameManager.showTile(1,this.currentTile),this.tileGameManager.setCurrentTile(this.currentTile))}}const d={title:"Pixel Art - Color By Number:",version:"1.0.0",width:725,height:1394,zoom:1,type:Phaser.AUTO,backgroundColor:"#EEEEEE",plugins:{global:[{key:"rexScroller",plugin:h.Z,start:!0}]},scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},parent:"game",input:{keyboard:!0,mouse:!0,touch:{capture:!0}},disableContextMenu:!0,physics:{default:"arcade",arcade:{debug:!1}},render:{antialias:!0},scene:[n,l,T]};class f extends Phaser.Game{constructor(e){super(e)}}window.addEventListener("load",(()=>{new f(d)}))},204:()=>{console.log("%c %c %c %c %c Built using phaser-project-template %c https://github.com/yandeu/phaser-project-template","background: #ff0000","background: #ffff00","background: #00ff00","background: #00ffff","color: #fff; background: #000000;","background: none")}},r={};function i(e){var s=r[e];if(void 0!==s)return s.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,i),a.exports}i.m=t,e=[],i.O=(t,r,s,a)=>{if(!r){var o=1/0;for(c=0;c<e.length;c++){for(var[r,s,a]=e[c],l=!0,n=0;n<r.length;n++)(!1&a||o>=a)&&Object.keys(i.O).every((e=>i.O[e](r[n])))?r.splice(n--,1):(l=!1,a<o&&(o=a));if(l){e.splice(c--,1);var h=s();void 0!==h&&(t=h)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,s,a]},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};i.O.j=t=>0===e[t];var t=(t,r)=>{var s,a,[o,l,n]=r,h=0;if(o.some((t=>0!==e[t]))){for(s in l)i.o(l,s)&&(i.m[s]=l[s]);if(n)var c=n(i)}for(t&&t(r);h<o.length;h++)a=o[h],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(c)},r=self.webpackChunkphaser_project_template=self.webpackChunkphaser_project_template||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),i.O(void 0,[216],(()=>i(555)));var s=i.O(void 0,[216],(()=>i(204)));s=i.O(s)})();