(function(){/*


 Copyright 2011 Google Inc.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
function d(a){this.set("fontFamily","sans-serif");this.set("fontSize",12);this.set("fontColor","#000000");this.set("strokeWeight",4);this.set("strokeColor","#ffffff");this.set("align","center");this.set("zIndex",1E3);this.setValues(a)}d.prototype=new google.maps.OverlayView;window.MapLabel=d;d.prototype.changed=function(a){switch(a){case "fontFamily":case "fontSize":case "fontColor":case "strokeWeight":case "strokeColor":case "align":case "text":return this.drawCanvas_();case "maxZoom":case "minZoom":case "position":return this.draw()}};
d.prototype.drawCanvas_=function(){var a=this.canvas_;if(a){var b=a.style;b.zIndex=this.get("zIndex");var c=a.getContext("2d");c.clearRect(0,0,a.width,a.height);c.strokeStyle=this.get("strokeColor");c.fillStyle=this.get("fontColor");c.font=this.get("fontSize")+"px "+this.get("fontFamily");a=Number(this.get("strokeWeight"));var e=this.get("text");e&&(a&&(c.lineWidth=a,c.strokeText(e,a,a)),c.fillText(e,a,a),c=c.measureText(e).width+a,b.marginLeft=this.getMarginLeft_(c)+"px",b.marginTop="-0.4em")}};
d.prototype.onAdd=function(){var a=this.canvas_=document.createElement("canvas");a.width=500;a.height=500;a.style.width="250px";a.style.height="250px";a.style.position="absolute";var b=a.getContext("2d");b.lineJoin="round";b.textBaseline="top";this.drawCanvas_();(b=this.getPanes())&&b.mapPane.appendChild(a)};d.prototype.onAdd=d.prototype.onAdd;d.prototype.getMarginLeft_=function(a){switch(this.get("align")){case "left":return 0;case "right":return-a}return a/-4};
d.prototype.draw=function(){var a=this.getProjection();if(a&&this.canvas_){var b=this.get("position");b&&(a=a.fromLatLngToDivPixel(b),b=this.canvas_.style,b.top=a.y+"px",b.left=a.x+"px",b.visibility=this.getVisible_())}};d.prototype.draw=d.prototype.draw;d.prototype.getVisible_=function(){var a=this.get("minZoom"),b=this.get("maxZoom");if(void 0===a&&void 0===b)return"";var c=this.getMap();if(!c)return"";c=c.getZoom();return c<a||c>b?"hidden":""};
d.prototype.onRemove=function(){var a=this.canvas_;a&&a.parentNode&&a.parentNode.removeChild(a)};d.prototype.onRemove=d.prototype.onRemove;}).call(this);
