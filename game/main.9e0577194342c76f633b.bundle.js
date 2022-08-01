/*! For license information please see main.9e0577194342c76f633b.bundle.js.LICENSE.txt */
(()=>{var t,e={18:(t,e,i)=>{"use strict";i(260);class r{constructor(t){this.scene=t,this.imageGame=new Phaser.GameObjects.Image(this.scene,0,0,"game6").setScale(1).setOrigin(0,0),this.createArrayColor()}createArrayColor(){let t=Math.round(this.imageGame.width/30),e=Math.round(this.imageGame.height/29);this.arrayColor=new Array,this.totalTileOfColor=new Array;for(let i=0;i<t;i++)for(let t=0;t<e;t++){let e=this.scene.textures.getPixel(30*i,29*t,this.imageGame.texture.key);if(-1==this.arrayColor.indexOf(e.color))this.arrayColor.push(e.color),this.totalTileOfColor[this.totalTileOfColor.length]=1;else{let t=this.arrayColor.indexOf(e.color);this.totalTileOfColor[t]+=1}}}getArrayColor(){return this.arrayColor}getColorAfterGrayScale(t){let e=this.numberToColour(this.arrayColor[t]),i=this.rgb2grayscale(e[0],e[1],e[2]);return(i<<16)+(i<<8)+i}numberToColour(t){return[(16711680&t)>>16,(65280&t)>>8,255&t]}LightenDarkenColor(t,e){return(255&t)+e|(t>>8&255)+e<<8|(t>>16)+e<<16}rgb2grayscale(t,e,i){return.3*t+.59*e+.11*i}getImageGame(){return this.imageGame}getTotalTileOfColor(){return this.totalTileOfColor}}var s=i(439);class o extends Phaser.GameObjects.Rectangle{constructor(t,e,i,r,s,o,a,l){super(t,e,i,s,o,a,l),this.numberOfColor=r,this.setOrigin(0,0)}getTextOfTile(){return this.textOfTile}getNumberOfColor(){return this.numberOfColor}setTextOfTile(t){this.textOfTile=t}setNumberOfColor(t){this.numberOfColor=t}}class a extends o{constructor(t,e,i,r,s,o,a,l){super(t,e,i,r,s,o,a,l),this.totalTile=0,this.totalTileMatch=0,this.setOrigin(0,0),this.createLoadingGrapic(),this.createProgressGrapic(),this.createImageSuccess()}createImageSuccess(){this.imageSuccess=new Phaser.GameObjects.Image(this.scene,this.x+this.width/2,this.y+this.height/2,"success").setDepth(4).setScale(.25),this.scene.add.existing(this.imageSuccess),this.imageSuccess.visible=!1}createProgressGrapic(){this.progressGrapic=this.scene.add.graphics(),this.progressGrapic.clear(),this.fillColor>12303291?this.progressGrapic.fillStyle(0,1):this.progressGrapic.fillStyle(16777215,1),this.progressGrapic.fillRoundedRect(this.x+19,this.y+110,108,14,6).setDepth(3),this.progressGrapic.visible=!1}createLoadingGrapic(){this.loadingGrapic=this.scene.add.graphics()}updateLoadingGrapic(){}createTextOfTile(){this.setTextOfTile(new Phaser.GameObjects.BitmapText(this.scene,this.x+this.width/2,this.y+this.height/2+25,"gothic",this.getNumberOfColor().toString(),50).setDepth(2).setOrigin(.5,1)),this.editColorText(),this.scene.add.existing(this.getTextOfTile())}editColorText(){this.fillColor>12303291?this.getTextOfTile().tint=0:this.getTextOfTile().tint=16777215}scrollX(t){this.imageSuccess.x+=t,this.getTextOfTile().x+=t,this.loadingGrapic.x+=t,this.progressGrapic.x+=t,this.x+=t}getProgressGraphic(){return this.progressGrapic}getLoadingGraphic(){return this.loadingGrapic}setTotalTile(t){this.totalTile=t}handleLoading(t){this.totalTileMatch+=1,this.loadingGrapic.clear(),this.fillColor<12303291?this.loadingGrapic.fillStyle(0,1):this.loadingGrapic.fillStyle(16777215,1);let e=this.totalTileMatch/this.totalTile,i=725*Math.ceil((t+1)/10);this.loadingGrapic.fillRoundedRect(this.x+25+i,this.y+113,95*e,7.5,4).setDepth(4),this.totalTileMatch==this.totalTile&&this.addEffect()}addEffect(){this.scene.tweens.add({targets:this,duration:300,scale:{from:1,to:.7},onStart:()=>{this.x+=this.width/2,this.y+=this.height/2,this.setOrigin(.5,.5),this.loadingGrapic.clear(),this.progressGrapic.clear()},onComplete:(t,e)=>{this.getTextOfTile().destroy(),this.scene.add.tween({targets:this,duration:100,yoyo:!0,angle:{from:-15,to:15},repeat:3,onComplete:()=>{this.angle=0}}),this.scene.tweens.add({targets:this,delay:800,duration:250,scale:{from:.7,to:1},onComplete:()=>{this.imageSuccess.visible=!0,this.active=!1,this.removeInteractive()}})}})}}class l extends Phaser.GameObjects.Rectangle{constructor(t,e,i,r,s,o,a,l,h){super(t,r,s,o+725,a,16777215,h),this.isScroll=!1,this.arrayColor=e,this.totalTileOfColor=i,this.setOrigin(0,0),this.setInteractive(),this.createTile(),this.createLineOfTable(),this.createScroller(),this.setFirstCurrentTile(),this.inputHandler(),this.createStateOfPage(),t.add.existing(this)}createStateOfPage(){let t=Math.ceil(this.arrayTile.length/10)+1;this.stateOfpage=new Array(t),this.stateOfpage[0]=this.scene.add.image(this.scene.sys.canvas.width/2-12*t,this.scene.sys.canvas.height-60,"star").setScale(.04).setDepth(2);for(let t=1;t<this.stateOfpage.length;t++)this.stateOfpage[t]=this.scene.add.image(this.stateOfpage[t-1].x+30,this.scene.sys.canvas.height-58,"cricle").setScale(.015).setDepth(2);this.currentStateOfpage=this.stateOfpage[1],this.currentStateOfpage.setTint(4473924)}createLineOfTable(){this.scene.add.line(this.x,this.y-1,0,0,1e5,0,0),this.lineBetweenTool=this.scene.add.line(this.x+724,this.y+143,this.x,0,this.x,290,0).setDepth(1)}setFirstCurrentTile(){this.currentTile=this.arrayTile[3],this.currentTile.getTextOfTile().setFontSize(65),this.currentTile.getProgressGraphic().visible=!0,this.currentTile.getLoadingGraphic().visible=!0,this.scene.registry.set("currentTile",this.currentTile)}createTile(){this.arrayTile=new Array;let t=0,e=0;for(let i=0;i<this.arrayColor.length;i++)i%5==0&&0!=i&&(i%10!=0&&(e-=5),t=0==t?1:0),this.arrayTile[i]=new a(this.scene,145*e+this.x+725,145*t+this.y,i,145,145,this.arrayColor[i]).setDepth(1),this.arrayTile[i].setTotalTile(this.totalTileOfColor[i]),this.arrayTile[i].setInteractive().createTextOfTile(),this.scene.add.existing(this.arrayTile[i]),e++}createScroller(){this.lastScroller=0;let t=Math.floor(this.arrayColor.length/10)+1;this.scroller=new s.Z(this,{bounds:[725*-t,0],value:-725,slidingDeceleration:1e9,backDeceleration:1e4,orientation:"horizontal",valuechangeCallback:t=>{if(t>0)return;let e=t-this.x;this.x=t,this.lineBetweenTool.x+=e;for(let t=0;t<this.getArrayTile().length;t++)this.getArrayTile()[t].scrollX(e)}}),this.dragstartScroller(),this.dragendScroller()}dragstartScroller(){this.scroller.on("dragstart",(()=>{this.isScroll=!0}))}dragendScroller(){let t=Math.floor(this.arrayColor.length/10)+1;this.scroller.on("dragend",(()=>{this.isScroll=!1;let e=this.scroller.value,i=0;e<725&&e>0||e<725*-t||(i=e>this.lastScroller?725*Math.ceil(e/725):725*-Math.ceil(-e/725),this.scrollOnePage(e,i))}))}scrollOnePage(t,e){this.scene.tweens.addCounter({duration:150,from:t,to:e,onUpdate:t=>{let e=t.getValue()-this.x;this.lineBetweenTool.x+=e,this.x=t.getValue();for(let t=0;t<this.getArrayTile().length;t++)this.getArrayTile()[t].scrollX(e)},onComplete:(t,i)=>{this.lastScroller=e,this.scroller.value=this.lastScroller}}),this.editStateOfPage(e)}editStateOfPage(t){let e=-1*t/725;this.currentStateOfpage.clearTint(),this.currentStateOfpage=this.stateOfpage[e].setTint(4473924)}getArrayTile(){return this.arrayTile}getCurrentTile(){return this.currentTile}inputHandler(){this.arrayTile.forEach(((t,e,i)=>{t.on("pointerup",((e,i,r,s)=>{this.isScroll||(this.currentTile.getTextOfTile().setFontSize(50),this.currentTile.getProgressGraphic().visible=!1,this.currentTile.getLoadingGraphic().visible=!1,t.getTextOfTile().setFontSize(60),t.getProgressGraphic().visible=!0,t.getLoadingGraphic().visible=!0,this.currentTile=t,this.scene.registry.set("currentTile",this.currentTile))}))}))}handleAfterMatch(){let t=this.currentTile.getNumberOfColor();this.arrayTile[t].handleLoading(t)}}class h extends Phaser.Scene{constructor(){super({key:"ColorTableScene"}),this.currentMatchTile=0}preload(){}create(){this.colorManager=new r(this),this.registry.set("colorManager",this.colorManager);let t=Math.floor(this.colorManager.getArrayColor().length/10);this.colorTable=new l(this,this.colorManager.getArrayColor(),this.colorManager.getTotalTileOfColor(),0,1e3,725*(t+3),400),this.createZoomButton(),this.inputHandler(),this.input.topOnly=!1}createZoomButton(){this.registry.set("zoom",1);let t=this.add.zone(0,0,this.sys.canvas.width,this.sys.canvas.height).setOrigin(0,0);this.zoomButtonOut=new Phaser.GameObjects.Image(this,0,0,"zoomout").setScale(.12).setOrigin(1,0),Phaser.Display.Align.In.TopRight(this.zoomButtonOut,t,-50,-50),this.add.existing(this.zoomButtonOut),this.zoomButtonOut.setInteractive(),this.zoomButtonIn=new Phaser.GameObjects.Image(this,0,0,"zoomin").setScale(.45).setOrigin(1,0),Phaser.Display.Align.In.TopRight(this.zoomButtonIn,t,-35,-35),this.add.existing(this.zoomButtonIn),this.zoomButtonIn.setInteractive(),this.zoomButtonIn.active=!1,this.zoomButtonIn.visible=!1}inputHandler(){this.zoomButtonOut.on("pointerup",(()=>{this.zoomButtonOut.active=!1,this.zoomButtonOut.visible=!1,this.zoomButtonIn.active=!0,this.zoomButtonIn.visible=!0,this.registry.set("zoom",3)})),this.zoomButtonIn.on("pointerup",(()=>{this.zoomButtonIn.active=!1,this.zoomButtonIn.visible=!1,this.zoomButtonOut.active=!0,this.zoomButtonOut.visible=!0,this.registry.set("zoom",1)}))}update(){this.registry.get("counterMatchTile")>this.currentMatchTile&&(this.currentMatchTile+=1,this.colorTable.handleAfterMatch())}}class n extends Phaser.Scene{constructor(){super({key:"BootScene"})}preload(){this.cameras.main.setBackgroundColor(0),this.createLoadingGraphics(),this.load.on("progress",(t=>{this.progressBar.clear(),this.progressBar.fillStyle(8971347,1),this.progressBar.fillRect(this.cameras.main.width/4,this.cameras.main.height/2-16,this.cameras.main.width/2*t,16)}),this),this.load.on("complete",(()=>{this.progressBar.destroy(),this.loadingBar.destroy()}),this),this.load.pack("preload","./assets/pack.json","preload"),this.load.bitmapFont("gothic","https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/fonts/gothic.png","https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/assets/fonts/gothic.xml")}update(){this.scene.start("ColorTableScene"),this.scene.start("GamePlayScene")}create(){}createLoadingGraphics(){this.loadingBar=this.add.graphics(),this.loadingBar.fillStyle(16777215,1),this.loadingBar.fillRect(this.cameras.main.width/4-2,this.cameras.main.height/2-18,this.cameras.main.width/2+4,20),this.progressBar=this.add.graphics()}}var c=i(244);class g extends o{constructor(t,e,i,r,s,o,a,l){super(t,e,i,r,s,o,a,l),this.matchedColor=!1,this.iswrongColor=!1,this.wrongColor=0,this.setOrigin(0,0)}addNumberColor(t){if(t)return this.scene.add.existing(t),void this.setTextOfTile(t);this.setTextOfTile(new Phaser.GameObjects.BitmapText(this.scene,this.x+this.width/2,this.y+this.height/2,"gothic",this.getNumberOfColor().toString(),15).setDepth(1).setOrigin(.5,.5)),this.getTextOfTile().tint=0,this.scene.add.existing(this.getTextOfTile())}editProperties(t=1){if(this.matchedColor)return this.isStroked=!1,void(this.fillAlpha=1);t<=1.5?(t<=1&&(this.isStroked=!1),this.getTextOfTile().alpha=0):(this.isStroked=!0,this.getTextOfTile().alpha=t/3),1==this.isWrongColor()?this.fillAlpha=1/t:this.fillAlpha=t>=3?0:1/(3*t)}afterMatchedColor(t){this.isStroked=!1,this.matchedColor=!0,this.fillAlpha=1,this.getTextOfTile().alpha=0,this.fillColor=t}editWrongColor(t,e){this.matchedColor||(this.iswrongColor=!0,this.fillColor=t,this.wrongColor=t,this.fillAlpha=1/e)}isWrongColor(){return this.iswrongColor}getWrongColor(){return this.wrongColor}isMatchedColor(){return this.matchedColor}setMatchedColor(){this.matchedColor=!0}}class u{constructor(t,e,i){this.scene=t,this.imageGame=e.getImageGame(),this.colorManager=e,this.currentTile=i,this.createData(),this.showTile(1,this.currentTile)}createData(){this.row=Math.round(this.imageGame.width/30),this.column=Math.round(this.imageGame.height/29),this.createArrayTile(this.row,this.column)}createArrayTile(t,e){this.arrayTile=new Array(t);for(let i=0;i<t;i++)this.arrayTile[i]=new Array(e);for(let i=0;i<t;i++)for(let t=0;t<e;t++){let e=this.scene.textures.getPixel(30*i,29*t,"game6");this.arrayTile[i][t]=new g(this.scene,30*i,29*t+200,this.colorManager.getArrayColor().indexOf(e.color),30,29,16777215),this.arrayTile[i][t].setInteractive(),this.arrayTile[i][t].addNumberColor(),this.arrayTile[i][t].setStrokeStyle(1,0)}}showTile(t=1,e){for(let i=0;i<this.arrayTile.length;i++)for(let r=0;r<this.arrayTile[0].length;r++){let s=this.colorManager.getColorAfterGrayScale(this.arrayTile[i][r].getNumberOfColor());this.scene.add.existing(this.arrayTile[i][r]).setOrigin(0,0),this.arrayTile[i][r].editProperties(t),this.arrayTile[i][r].getNumberOfColor()==e.getNumberOfColor()?this.arrayTile[i][r].fillColor=0:this.arrayTile[i][r].fillColor=s}}editAfterZoom(t=1,e){for(let i=0;i<this.arrayTile.length;i++)for(let r=0;r<this.arrayTile[0].length;r++)if(this.arrayTile[i][r].editProperties(t),!this.arrayTile[i][r].isMatchedColor()&&(1==this.arrayTile[i][r].isWrongColor()&&(this.arrayTile[i][r].fillColor=this.arrayTile[i][r].getWrongColor()),this.arrayTile[i][r].getNumberOfColor()==e.getNumberOfColor())){if(1==this.arrayTile[i][r].isWrongColor())continue;this.arrayTile[i][r].fillColor=0,this.arrayTile[i][r].fillAlpha=.3}}editAfterChooseColor(t,e){for(let i=0;i<this.arrayTile.length;i++)for(let r=0;r<this.arrayTile[0].length;r++){let s=this.colorManager.getColorAfterGrayScale(this.arrayTile[i][r].getNumberOfColor());this.arrayTile[i][r].editProperties(t),this.arrayTile[i][r].isMatchedColor()||(this.arrayTile[i][r].getNumberOfColor()==e.getNumberOfColor()?1==this.arrayTile[i][r].isWrongColor()?this.arrayTile[i][r].fillColor=this.colorManager.LightenDarkenColor(this.arrayTile[i][r].getWrongColor(),12):(this.arrayTile[i][r].fillColor=0,this.arrayTile[i][r].fillAlpha=.3):1==this.arrayTile[i][r].isWrongColor()?this.arrayTile[i][r].fillColor=this.arrayTile[i][r].getWrongColor():this.arrayTile[i][r].fillColor=s)}}getArrayTile(){return this.arrayTile}getCurrentTile(){return this.currentTile}setCurrentTile(t){this.currentTile=t}}var d=i(839);class m extends Phaser.Scene{constructor(){super({key:"GamePlayScene"}),this.counterMatchTile=0,this.stateZoom=1,this.isMoveCamera=!1,this.numberOfMove=!1,this.isColoringUp=!1,this.isColoringMove=!1,this.nearestPointerUp=!1,this.counterPointerDown=0}preload(){}create(){this.scene.bringToTop("ColorTableScene"),this.colorManager=this.registry.get("colorManager"),this.currentTile=this.registry.get("currentTile"),this.tileGameManager=new u(this,this.colorManager,this.currentTile),this.cameras.main.setOrigin(.5,.5),this.cameras.main.setZoom(1),this.cameras.main.setBounds(-200,-100,1200,1500),this.createDragScale(),this.inputHandler()}createDragScale(){let t=this.cameras.main.setZoom(1),e=new d.aj(this,{enable:!0});e.on("drag1",(e=>{if(!this.isColoringUp&&!this.isColoringMove){this.numberOfMove=!0;var i=e.drag1Vector;t.scrollX-=i.x/t.zoom,t.scrollY-=i.y/t.zoom,this.isMoveCamera=!0}})),e.on("drag1end",(()=>{this.isMoveCamera=!1}),this),e.on("pinch",(e=>{if(this.isColoringUp)return;this.numberOfMove=!0,this.isMoveCamera=!0;let i=e.scaleFactor;t.zoom*=i,this.tileGameManager.editAfterZoom(t.zoom,this.currentTile)}),this),e.on("pinchend",(t=>{this.isColoringMove=!1,this.isMoveCamera=!1}),this)}inputHandler(){this.tileGameManager.getArrayTile().forEach((t=>{t.forEach((t=>{this.handlePointerUpTile(t),this.handlePointerDownTile(t)}))})),this.input.on("pointerdown",(()=>{if(this.counterPointerDown+=1,this.nearestPointerUp=!1,this.isColoringMove)return this.isColoringMove=!1,void(this.isColoringUp=!1);this.time.addEvent({delay:50,callback:()=>{this.isMoveCamera||1!=this.counterPointerDown||(this.isColoringUp=!0),this.counterPointerDown=0}}),this.time.addEvent({delay:400,callback:()=>{this.nearestPointerUp?this.nearestPointerUp=!1:(this.isColoringUp&&(this.isColoringMove=!0),this.counterPointerDown=0)}})}))}handlePointerDownTile(t){t.on("pointermove",(e=>{if(e.isDown&&this.isColoringMove&&!this.isMoveCamera)if(this.numberOfMove)this.numberOfMove=!1;else if(t.getNumberOfColor()==this.currentTile.getNumberOfColor()&&0==t.isMatchedColor())t.afterMatchedColor(this.currentTile.fillColor),this.counterMatchTile+=1,this.registry.set("counterMatchTile",this.counterMatchTile);else{let e=this.cameras.main.zoom;t.editWrongColor(this.currentTile.fillColor,e)}}))}handlePointerUpTile(t){t.on("pointerup",(e=>{if(this.nearestPointerUp=!0,this.isColoringMove=!1,this.numberOfMove)return this.numberOfMove=!1,void(this.isColoringUp=!1);if(this.isColoringUp)if(this.isColoringUp=!1,t.getNumberOfColor()==this.currentTile.getNumberOfColor()&&0==t.isMatchedColor())t.afterMatchedColor(this.currentTile.fillColor),this.counterMatchTile+=1,this.registry.set("counterMatchTile",this.counterMatchTile);else{let e=this.cameras.main.zoom;t.editWrongColor(this.currentTile.fillColor,e)}}))}update(){if(this.currentTile=this.registry.get("currentTile"),this.currentTile!=this.tileGameManager.getCurrentTile()){let t=this.cameras.main.zoom;this.tileGameManager.editAfterChooseColor(t,this.currentTile),this.tileGameManager.setCurrentTile(this.currentTile)}this.stateZoom!=this.registry.get("zoom")&&(this.add.tween({targets:this,duration:400,zoom:{from:this.stateZoom,to:this.registry.get("zoom")},onUpdate:(t,e)=>{console.log(e.zoom),this.cameras.main.zoom=e.zoom}}),this.stateZoom=this.registry.get("zoom"),this.tileGameManager.editAfterChooseColor(this.stateZoom,this.currentTile))}}const T={title:"Pixel Art - Color By Number:",version:"1.0.0",width:725,height:1394,zoom:1,type:Phaser.AUTO,backgroundColor:"#EEEEEE",plugins:{global:[{key:"rexScroller",plugin:c.Z,start:!0}]},scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH},parent:"game",input:{keyboard:!0,mouse:!0,touch:{capture:!0}},disableContextMenu:!0,physics:{default:"arcade",arcade:{debug:!1}},render:{antialias:!0},scene:[n,h,m]};class f extends Phaser.Game{constructor(t){super(t)}}window.addEventListener("load",(()=>{new f(T)}))},204:()=>{console.log("%c %c %c %c %c Built using phaser-project-template %c https://github.com/yandeu/phaser-project-template","background: #ff0000","background: #ffff00","background: #00ff00","background: #00ffff","color: #fff; background: #000000;","background: none")}},i={};function r(t){var s=i[t];if(void 0!==s)return s.exports;var o=i[t]={exports:{}};return e[t].call(o.exports,o,o.exports,r),o.exports}r.m=e,t=[],r.O=(e,i,s,o)=>{if(!i){var a=1/0;for(c=0;c<t.length;c++){for(var[i,s,o]=t[c],l=!0,h=0;h<i.length;h++)(!1&o||a>=o)&&Object.keys(r.O).every((t=>r.O[t](i[h])))?i.splice(h--,1):(l=!1,o<a&&(a=o));if(l){t.splice(c--,1);var n=s();void 0!==n&&(e=n)}}return e}o=o||0;for(var c=t.length;c>0&&t[c-1][2]>o;c--)t[c]=t[c-1];t[c]=[i,s,o]},r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={179:0};r.O.j=e=>0===t[e];var e=(e,i)=>{var s,o,[a,l,h]=i,n=0;if(a.some((e=>0!==t[e]))){for(s in l)r.o(l,s)&&(r.m[s]=l[s]);if(h)var c=h(r)}for(e&&e(i);n<a.length;n++)o=a[n],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(c)},i=self.webpackChunkphaser_project_template=self.webpackChunkphaser_project_template||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})(),r.O(void 0,[216],(()=>r(18)));var s=r.O(void 0,[216],(()=>r(204)));s=r.O(s)})();