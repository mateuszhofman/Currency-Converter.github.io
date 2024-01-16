const currencyOne = document.querySelector('#currency-one');
const currencyTwo = document.querySelector('#currency-two');
const swapBtn = document.querySelector('.swap');
const amountOne = document.querySelector('.amount-one');
const amountTwo = document.querySelector('.amount-two');
const currentExchange = document.querySelector('.current-exchange');
const swapIcon = document.querySelector('.fa-retweet');
const currentDate = document.querySelector('.date');

const calculate = () => {
	fetch(
		`https://v6.exchangerate-api.com/v6/67c676aea9f1350661db8d2d/latest/${currencyOne.value}`
	)
		.then((res) => res.json())
		.then((data) => {

			const currency1 = currencyOne.value;
			const currency2 = currencyTwo.value;

	
            const rate = data.conversion_rates[currency2]
            
            currentExchange.textContent = `1 ${currency1} = ${rate.toFixed(4)} ${currency2}`
            amountTwo.value = (amountOne.value * rate).toFixed(2)
		
		});
        swapIcon.classList.remove('swap-animation')
    };
    
    const swap = () => {
        const currencyTemp = currencyOne.value
        currencyOne.value = currencyTwo.value
        currencyTwo.value = currencyTemp
        
        calculate()

    
}

const handleDate = () => {
	const date = new Date();
    const options = {
        weekday:'long',
        year:'numeric',
        month:'long',
        day:'numeric',
    };

	currentDate.innerText = date.toLocaleString('en-IN', options);
};

currencyOne.addEventListener('change',calculate)
currencyTwo.addEventListener('change',calculate)
amountOne.addEventListener('input',calculate)
swapBtn.addEventListener('click',swap)

calculate()
handleDate();

