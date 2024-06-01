function validateNumber(input) {
    const value = input.value;
    if (!/^\d*$/.test(value)) {
      input.value = value.slice(0, -1);
    }
}

const conditions = [
  {min: 0, max: 2000, subtract: 500},
  {min: 1000, max: 6000, subtract: 500},
  {min:5000, max: 11000, subtract: 1000},
  {min: 10000, max: 16000, subtract: 1000},
  {min: 15000, max: 21000, subtract: 2000},
  {min: 20000, max: 31000, subtract: 2000},
  {min: 30000, max: 51000, subtract: 3000},
  {min: 50000, max: 61000, subtract: 4000},
  {min: 60000, max: 101000, subtract: 5000},
  {min: 100000, max: 121000, subtract: 5000},
  {min: 120000, max: 201000, subtract: 10000},


        // Boshqa shartlarni ham qo'shishingiz mumkin
    ];

const serviceFee = (number) => {
  for (let i = 0; i < conditions.length; i++) {
    if (number >= conditions[i].min && number < conditions[i].max) {
      number -= conditions[i].subtract;
      break;
    }
  }

  return number;
}

document.getElementById('button').addEventListener('click', function() {
    const sum = document.querySelector('.sum-number');
    const input = document.getElementById('input').value;
    if(input.length > 0 && input != null) {
        console.log();
        const result = serviceFee(input);
        sum.innerHTML = result + " so'm";
    }
});