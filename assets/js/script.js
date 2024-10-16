let count = document.getElementById('countdown');
let s = 59;
let m = 59;
let h = 23;
let d = 2;

let counter = setInterval(() => {
    
    if(s > 0){

        s--;
    }else{

        s = 59;
        if(m > 0){

            m--;
        }else{

            m = 59;
            if(h > 0){

                h--;
            }else{

                h = 23;
                if(d > 0){

                    d--;
                }else{

                    clearInterval(counter);
                    count.innerHTML = `Sorry! Sale Time Is Expired.`;
                }
            }
        }
    }

    count.innerHTML = `
        <span id="seconds">${d}</span> days
        <span id="minutes">${h}</span> hours
        <span id="hours">${m}</span> minutes
        <span id="days">${s}</span> seconds
    `;

}, 1000);

const quotes = [
    { quote: "If you are not taking care of your customer, your competitor will.", author: "Bob Hooey" },
    { quote: "Chase the vision, not the money; the money will end up following you.", author: "Tony Hsieh" },
    { quote: "Don’t find customers for your products, find products for your customers.", author: "Seth Godin" },
    { quote: "Make a customer, not a sale.", author: "Katherine Barchetti" },
    { quote: "In sales, a referral is the key to the door of resistance.", author: "Bo Bennett" },
    { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" }
    ];

    const displayRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        document.getElementById("quote").innerText = `"${randomQuote.quote}"`;
        document.getElementById("author").innerText = `- ${randomQuote.author}`;
    }
    displayRandomQuote();