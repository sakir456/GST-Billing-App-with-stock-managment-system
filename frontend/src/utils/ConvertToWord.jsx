export function numberToWords(num) {
    if (num === 0) return 'zero rupees';
  
    const belowTwenty = [
      '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 
      'seventeen', 'eighteen', 'nineteen'
    ];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const thousands = ['', 'thousand', 'million', 'billion'];
  
    function helper(n) {
      if (n === 0) return '';
      else if (n < 20) return belowTwenty[n] + ' ';
      else if (n < 100) return tens[Math.floor(n / 10)] + ' ' + helper(n % 10);
      else return belowTwenty[Math.floor(n / 100)] + ' hundred ' + helper(n % 100);
    }
  
    // Split the number into integer and decimal parts
    const [integerPart, decimalPart] = num.toString().split('.');
  
    let result = '';
    let i = 0;
    let intNum = parseInt(integerPart, 10);
  
    // Convert the integer part
    while (intNum > 0) {
      if (intNum % 1000 !== 0) {
        result = helper(intNum % 1000) + thousands[i] + ' ' + result;
      }
      intNum = Math.floor(intNum / 1000);
      i++;
    }
  
    result = result.trim() + " rupees";
  
    // Convert the decimal part if it exists
    if (decimalPart && parseInt(decimalPart, 10) > 0) {
      const paise = parseInt(decimalPart.slice(0, 2), 10); // Take first two digits of the decimal part
      result += " and " + helper(paise).trim() + " paise";
    }
  
    return result.trim();
  }
  
  // Example usage
  const result = numberToWords(1234.85);
  console.log(result); // Output: "one thousand two hundred thirty four rupees and eighty five paise"
  
  
