# React Currency Converter

A simple and lightweight React component for currency conversion.

## Installation

```bash
npm install react-currency-converter-any
# or
yarn add react-currency-converter-any
```

## Usage

```jsx
import CurrencyConverter from "react-currency-converter-any";

function App() {
  return <CurrencyConverter amount="100" fromCurrency="USD" toCurrency="EUR" />;
}
```

## Props

| Prop         | Type             | Description                                  |
| ------------ | ---------------- | -------------------------------------------- |
| amount       | string \| number | The amount to convert                        |
| fromCurrency | string           | Source currency code (e.g., "USD")           |
| toCurrency   | string           | Target currency code (e.g., "EUR")           |
| apiKey       | string           | (Optional) API key for exchange rate service |

## Supported Currencies

Includes symbols for 40+ currencies including USD, EUR, GBP, JPY, CNY, INR, and many more.

## License

MIT
