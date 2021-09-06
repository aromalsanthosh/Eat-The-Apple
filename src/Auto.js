import {move} from './NavigationButtons'


function Auto(){
     return(
         <span>
             <button type="button" class="btn btn-outline-warning"  id="btn_Auto" onClick={()=> AutoManuel()} >Go Auto</button>
         </span>
        
     );
 }

function AutoManuel(){
    
    let el=document.getElementById("btn_Auto");
    let btn_status=el.innerHTML;
    
    if (btn_status==='Go Auto'){
        GoAuto(el);
    }
    if (btn_status==='Go Manuel'){
        GoManuel(el);
    }
}
function GoAuto(el){
    if(window.auto!=="on"){
        el.innerHTML="Go Manuel";
        window.auto="on";
        
        window.var_Auto =setInterval(function(){  move(window.cur_dirc,"auto") }, window.snake_speed);
    }
}
function GoManuel(el){
    el.innerHTML="Go Auto";
    clearInterval(window.var_Auto);
    window.auto="off";
}

 export default Auto;
 export {GoManuel,GoAuto};