document.getElementById('check-btn').addEventListener('click', function() {
    const input = document.getElementById('text-input').value.trim();
    const result = document.getElementById('result');
    
    if (!input) {
      alert('Please input a value');
      return;
    }
  
    const cleanText = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedText = cleanText.split('').reverse().join('');
  
    if (cleanText === reversedText) {
      result.textContent = `${input} is a palindrome`;
    } else {
      result.textContent = `${input} is not a palindrome`;
    }
  });