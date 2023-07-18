//values
const mtxt={
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
    '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
    '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
    '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
    '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
    '--..': 'Z',
    '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4',
    '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9',
    '.-.-.-': '.', '--..--': ',', '..--..': '?', '-.-.--': '!', ' ': ' ',
    '-..-.': '/', '.-...': '&', '---...': ':', '-.-.-.': ';', '-...-': '=',
    '.-.-.': '+', '-....-': '-', '..--.-': '_', '.-..-.': '"', '...-..-': '$',
    '.--.-.': '@', '-.--.': '(', '-.--.-': ')', '.----.': '\''
  };


const txtm = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
    'Z': '--..',
    // Digits
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    // Punctuation
    '.': '.-.-.-', ',': '--..--', '?': '..--..', '!': '-.-.--', ' ': ' ',
    '/': '-..-.', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-',
    '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-',
    '@': '.--.-.', '(': '-.--.', ')': '-.--.-', '\'': '.----.',
    // Spanish
    'Á': '.--.-', 'É': '..-..', 'Ó': '---.', 'Ú': '..--', 'Ñ': '--.--',
    // German
    'Ä': '.-.-', 'Ö': '---.', 'Ü': '..--', 'ẞ': '...--..',
    // French
    'À': '.--.-', 'È': '.-..-', 'Ù': '..--'
  };


//elements
const tm = document.getElementById("tm");
const mt = document.getElementById("mt");
var header=document.getElementById("header");
const submit=document.getElementById("sub");
const input=document.getElementById("inputbox");
const output=document.getElementById("outputbox");

//texts
var text=["Standard Morse Code Translator   ",".-- . .-.. -.-. --- -- .   "];
var displaytext="";

//global variables for typing animation
var i=0;
var j=0;
var textele=0;

//event to select only one checkbox at a time
tm.addEventListener("change",function(){
    if(this.checked){
        mt.checked=false;
    }
});
mt.addEventListener("change",function(){
    if(this.checked){
        tm.checked=false;
    }
});

//limit resizing
document.addEventListener("DOMContentLoaded", function () {
    if (output.style.width ==='350px') {
        output.style.resize = "none";
    }
});

//typing animation function
function type(){
    if(i<text[textele].length && j==0){
        displaytext+=(text[textele])[i];
        header.innerText=displaytext;
        i++;
    }
    else{
        j=1;
    }
    if(i>0 && j==1){
        i--;
        displaytext=displaytext.slice(0, -1);
        header.innerText=displaytext;
    }
    else if(i<=0 && j==1){
        j=0;
        textele++;
        if (textele>text.length-1){
            textele=0;
        }
    }
};
const interval= setInterval(type,80); //interval
    

//convert button

submit.addEventListener("click",function(){
    if((input.value).trim()==''){
        alert("Enter some text");
        input.value='';
    }
    let text1=(input.value).trim();
    if (tm.checked){
        let outputtext='';
        let text2=text1.split(" ");
        for (const ele of text2) {
            for(const txt of ele){
                if(txtm[txt.toUpperCase()]==undefined){
                    outputtext+="# ";
                }
                else{
                outputtext+=txtm[txt.toUpperCase()]+" ";
                }
            }
            outputtext+='/ ';
          }
          outputtext = outputtext.replace(/\/\s$/, '');
        output.innerHTML=`${outputtext.trim("/")}`;
    }
    else if(mt.checked){
        let outputtext='';
        let text2=text1.split("/");
        for (const ele of text2) {
            const text3=(ele.trim(" ")).split(" ");
            for(const txt of text3){
                if(mtxt[txt]==undefined){
                    outputtext+="# ";
                }
                else{
                outputtext+=mtxt[txt];
                }
            }
            outputtext+=" ";
        }
        output.innerHTML=`${outputtext.trim(" ")}`;
    }
});




