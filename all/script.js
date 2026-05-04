
function calc(){
let a1=+a.value||0, b1=+b.value||1;
res.innerText="Delta:"+(a1/b1).toFixed(2)+" | Theta:"+(-(a1/b1)).toFixed(2)+" | Gamma:"+(a1/(b1*b1)).toFixed(2);
}
