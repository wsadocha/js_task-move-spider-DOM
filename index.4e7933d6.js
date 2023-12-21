document.addEventListener("click",t=>{// write code here
let e=document.querySelector(".spider"),i=t.target;if("DIV"!==i.tagName)return;let l=i.getBoundingClientRect(),n={x:t.clientX-l.left-i.clientLeft-e.clientWidth/2,y:t.clientY-l.top-i.clientTop-e.clientHeight/2};n.x<0&&(n.x=0),n.y<0&&(n.y=0),n.x+e.clientWidth>i.clientWidth&&(n.x=i.clientWidth-e.clientWidth),n.y+e.clientHeight>i.clientHeight&&(n.y=i.clientHeight-e.clientHeight),e.style.top=n.y+"px",e.style.left=n.x+"px"});//# sourceMappingURL=index.4e7933d6.js.map

//# sourceMappingURL=index.4e7933d6.js.map
