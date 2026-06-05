# Cashier checkout prototype

A static cashier page that lets customers choose between fiat and crypto payment
methods, complete payment details, and view a payment result state.

## Features

- Fiat and crypto payment method categories.
- Billing country filter for fiat payment options.
- Country-specific payment methods, including:
  - United States: credit cards, PayPal, Affirm.
  - China: Alipay, WeChat Pay.
  - Other supported regions: United Kingdom, European Union, Canada, Australia,
    India, Brazil, Mexico, Japan, South Korea, Singapore, United Arab Emirates,
    and a global fallback.
- Method-specific detail fields for cards, wallets, bank transfers, UPI, and
  crypto transfers displayed in a Step 3 pop-up after selecting a payment
  method.
- Successful payment result page after submitting payment details.
- Automatic transaction ID generation for every submitted payment attempt.
- Browser-local transaction records table with search for future queries. Demo
  payment details are summarized and masked where appropriate.

## Preview

Open `index.html` directly in a browser, or serve the directory with any static
file server.
