const text =
"Data Analyst | Power BI | SQL | Python";

let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,100);

}
}

typing();