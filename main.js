const results = document.querySelector('.result');
const number = document.querySelectorAll('.btn.number');
const btn2 = document.querySelector('.btn2');
const eventN = document.querySelectorAll('.btn2.event');
const del = document.querySelector('.btn1.reset');
const end = document.querySelector('.btn1.done');
const lastDel = document.querySelector('.btn2.del');

//numbers

function click(event) {

    if (results.textContent === "You can't divide by zero" || results.textContent === 'Inifinity') {

    if (/\d/.test(event.target.textContent)) { 
        results.textContent = event.target.textContent;
    }
    
}
  else {
    results.textContent += event.target.textContent;
    }

}

number.forEach(key => key.addEventListener('click', click));

//reset

function reset(){
    results.textContent = '';
}

del.addEventListener('click', reset);

//events

function e(event) { 

let search = /[+\-\*/]/;

let numberCheck = results.textContent.slice(-1);

    if(search.test(results.textContent) && isNaN(numberCheck)){
        return;
    }

    results.textContent += event.target.textContent;

}

eventN.forEach(key => key.addEventListener('click', e));

//end

function calculate() {

    let text = results.textContent;
    let text2 = text.match(/[+\-\*/]/g);
    console.log(text2);
    let split1 = text.split(/[+\-\*/]/g).map(array => {
        let n1 = parseFloat(array);
        return n1;
    });

    console.log(split1);

    if (!text2 || text2.length === 0) {
        return;
    }

    let n1 = parseFloat(split1[0]);
    let n2 = parseFloat(split1[1]);

    let firstCh = split1[0];

    for(let i = 0; i < text2.length; i++) {

        switch(text2[i]) {
            case '+':
                firstCh += split1[i + 1];
            break;
            
            case '-':
                firstCh -= split1[i + 1];
            break;

            case '*':
                firstCh *= split1[i + 1];
            break;

            case '/':
                if(n1 === 0 || n2 === 0) {
                    firstCh = "You can't divide by zero";
                }
                else {
                    firstCh /= split1[i + 1];
                }
            break;

            default:
                return;
            
        }

    }

    results.textContent = firstCh;

}

end.addEventListener('click', calculate);

// number.forEach(key => key.addEventListener('click', () => {
//     if (results.textContent === firstCh) {
//         reset();
//         click();
//     }
// }));

