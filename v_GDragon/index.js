let displayHistory = document.getElementById("history");
let displayResult = document.getElementById("result");
let buttons = Array.from(document.getElementsByClassName("buttons"))
console.log(displayHistory.innerText.length)

let Res = '';
let textContent = '';
let MathFunQue = '';
let MathFunAns = '';
let ParanthesisCount =0;
let AppRoll = 0;


buttons.map( button => {


    button.addEventListener('click', (e) => {
        // console.log("Clicked on:", e.target.innerText);
        // let StoredData = currentClick
        // switch (currentClick) {
        //     case currentClick.match('sin'):
        //         MathFunAns =currentClick.substring(4,7);
        //         displayResult.innerText = Math.sin(MathFunAns);
        // }

        if ((e.target.innerText >= 0 || e.target.innerText <= 9) && AppRoll === 1) {
            displayResult.innerText = '';
            AppRoll = 0;
        }

        switch(e.target.innerText) {

            case 'AC':
                displayResult.innerText = '';
                ParanthesisCount = 0;
                break;
            
            case '+/-':
                displayResult.innerText = displayResult.innerText*-1;
                break;

            case '=':
                try {
                    console.log('In EQUAL')
                    if(MathFunQue === 'sin') {
                        console.log('In SIN')
                        MathFunAns = textContent.split('(');
                        console.log(MathFunAns);
                        MathFunAns = MathFunAns[1].substring(0,(MathFunAns[1].length-1));
                        console.log('InHere');
                        console.log(MathFunAns);
                        displayResult.innerText = Math.sin(MathFunAns)
                    }
                    if(MathFunQue === 'cos') {
                        console.log('In COS')
                        MathFunAns = textContent.split('(');
                        console.log(MathFunAns);
                        MathFunAns = MathFunAns[1].substring(0,(MathFunAns[1].length-1));
                        console.log('InHere');
                        console.log(MathFunAns);
                        displayResult.innerText = Math.tan(MathFunAns)
                    }
                    if(MathFunQue === 'tan') {
                        console.log('In TAN')
                        MathFunAns = textContent.split('(');
                        console.log(MathFunAns);
                        MathFunAns = MathFunAns[1].substring(0,(MathFunAns[1].length-1));
                        console.log('InHere');
                        console.log(MathFunAns);
                        displayResult.innerText = Math.cos(MathFunAns)
                    }
                    if(MathFunQue === 'log') {
                        console.log('In LOG')
                        MathFunAns = textContent.split('(');
                        console.log(MathFunAns);
                        MathFunAns = MathFunAns[1].substring(0,(MathFunAns[1].length-1));
                        console.log('InHere');
                        console.log(MathFunAns);
                        displayResult.innerText = Math.log(MathFunAns)
                    }
                    if(MathFunQue === 'squ') {
                        console.log('In SQUARE')
                        MathFunAns = textContent.split('(');
                        console.log(MathFunAns);
                        MathFunAns = MathFunAns[1].substring(0,(MathFunAns[1].length-1));
                        console.log('InHere');
                        console.log(MathFunAns);
                        displayResult.innerText = eval(MathFunAns*MathFunAns);
                    }
                    if(MathFunQue === 'roo') {
                        console.log('In ROOT')
                        MathFunAns = textContent.split('(');
                        console.log(MathFunAns);
                        MathFunAns = MathFunAns[1].substring(0,(MathFunAns[1].length-1));
                        console.log('InHere');
                        console.log(MathFunAns);
                        displayResult.innerText = Math.sqrt(MathFunAns)
                    }
                    displayHistory.innerText = displayResult.innerText
                    displayResult.innerText = eval(displayResult.innerText);
                    Res = displayResult.innerText;
                    AppRoll = 1;

                }
                catch (err){
                    displayResult.innerText = 'console.log(err)';
                    console.log(err);
                }                
                break;
            
            case 'RES':
                displayResult.innerText = Res;
                break;


            default:
                if (e.target.innerText === '( )') {
                    if (ParanthesisCount === 0) {
                        displayResult.innerText = displayResult.innerText+'(';
                        textContent = displayResult.textContent;
                        ParanthesisCount = 1;
                    } else {
                        displayResult.innerText = displayResult.innerText+')';
                        textContent = displayResult.textContent;
                        ParanthesisCount = 0;
                    }
                    break
                }
                displayResult.innerText = displayResult.innerText+e.target.innerText;
                textContent = displayResult.textContent;
                MathFunQue = textContent.substring(0,3)
                console.log(MathFunQue);
        }


    })
})
