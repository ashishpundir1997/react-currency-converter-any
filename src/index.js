import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const CurrencyConverter = ({ amount, fromCurrency, toCurrency, apiKey }) => {
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExchangeRate = async () => {
      if (!amount || !fromCurrency || !toCurrency) {
        setError('Missing required parameters');
        return;
      }

      try {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        );
        const data = await response.json();
        
        if (!data.rates || !data.rates[toCurrency]) {
          throw new Error('Invalid currency code');
        }

        const rate = data.rates[toCurrency];
        const converted = (parseFloat(amount) * rate).toFixed(2);
        
        setConvertedAmount(converted);
        setError(null);
      } catch (err) {
        setError('Error fetching exchange rate');
        console.error('Currency conversion error:', err);
      }
    };

    fetchExchangeRate();
  }, [amount, fromCurrency, toCurrency, apiKey]);

  const getCurrencySymbol = (currency) => {
    const symbols = {
      USD: '$',
      EUR: '€',
      GBP: '£',
      JPY: '¥',
      // Add more currency symbols as needed
    };
    return symbols[currency] || currency;
  };

  if (error) {
    return <span className="currency-error">{error}</span>;
  }

  if (!convertedAmount) {
    return <span className="currency-loading">Converting...</span>;
  }

  return (
    <span className="currency-converted">
      {getCurrencySymbol(toCurrency)} {convertedAmount}
    </span>
  );
};

CurrencyConverter.propTypes = {
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  fromCurrency: PropTypes.string.isRequired,
  toCurrency: PropTypes.string.isRequired,
  apiKey: PropTypes.string
};

export default CurrencyConverter;