const fiatMethodsByCountry = {
  US: {
    label: "United States",
    methods: [
      {
        id: "credit-card",
        name: "Credit cards",
        icon: "CC",
        description: "Pay instantly with Visa, Mastercard, American Express, or Discover.",
        tags: ["Instant", "3-D Secure"],
        fields: "card"
      },
      {
        id: "paypal",
        name: "PayPal",
        icon: "PP",
        description: "Authorize payment from your PayPal wallet or linked bank account.",
        tags: ["Wallet", "Authorization"],
        fields: "authorize"
      },
      {
        id: "affirm",
        name: "Affirm",
        icon: "AF",
        description: "Split the purchase into eligible pay-over-time installments.",
        tags: ["Pay later", "US only"],
        fields: "identity"
      }
    ]
  },
  CN: {
    label: "China",
    methods: [
      {
        id: "alipay",
        name: "Alipay",
        icon: "AL",
        description: "Scan or authorize with Alipay for a local wallet checkout.",
        tags: ["Wallet", "QR authorization"],
        fields: "authorize"
      },
      {
        id: "wechat-pay",
        name: "WeChat Pay",
        icon: "WC",
        description: "Complete payment through WeChat Pay authorization.",
        tags: ["Wallet", "Mobile pay"],
        fields: "authorize"
      }
    ]
  },
  GB: {
    label: "United Kingdom",
    methods: [
      {
        id: "credit-card",
        name: "Credit and debit cards",
        icon: "CC",
        description: "Pay with Visa, Mastercard, Maestro, or American Express.",
        tags: ["Instant", "SCA"],
        fields: "card"
      },
      {
        id: "paypal",
        name: "PayPal",
        icon: "PP",
        description: "Use a PayPal wallet, card, or linked bank account.",
        tags: ["Wallet", "Authorization"],
        fields: "authorize"
      },
      {
        id: "bank-transfer",
        name: "Faster Payments",
        icon: "FP",
        description: "Pay directly from a UK bank account using Faster Payments.",
        tags: ["Bank transfer", "Local"],
        fields: "bank"
      },
      {
        id: "klarna",
        name: "Klarna",
        icon: "KL",
        description: "Pay now or choose eligible installment options.",
        tags: ["Pay later", "SCA"],
        fields: "identity"
      }
    ]
  },
  EU: {
    label: "European Union",
    methods: [
      {
        id: "credit-card",
        name: "Credit and debit cards",
        icon: "CC",
        description: "Pay with major cards using Strong Customer Authentication.",
        tags: ["Instant", "SCA"],
        fields: "card"
      },
      {
        id: "sepa",
        name: "SEPA bank transfer",
        icon: "SE",
        description: "Transfer funds from a euro-denominated bank account.",
        tags: ["Bank transfer", "EUR"],
        fields: "bank"
      },
      {
        id: "paypal",
        name: "PayPal",
        icon: "PP",
        description: "Authorize payment through PayPal.",
        tags: ["Wallet", "Authorization"],
        fields: "authorize"
      },
      {
        id: "klarna",
        name: "Klarna",
        icon: "KL",
        description: "Use pay now, pay later, or installments where available.",
        tags: ["Pay later", "Regional"],
        fields: "identity"
      },
      {
        id: "ideal",
        name: "iDEAL",
        icon: "iD",
        description: "Pay from participating Dutch banks.",
        tags: ["Netherlands", "Bank redirect"],
        fields: "bank"
      },
      {
        id: "bancontact",
        name: "Bancontact",
        icon: "BC",
        description: "Use Bancontact for Belgian card and app payments.",
        tags: ["Belgium", "Local card"],
        fields: "authorize"
      }
    ]
  },
  CA: {
    label: "Canada",
    methods: [
      {
        id: "credit-card",
        name: "Credit cards",
        icon: "CC",
        description: "Pay with Visa, Mastercard, or American Express.",
        tags: ["Instant", "3-D Secure"],
        fields: "card"
      },
      {
        id: "interac",
        name: "Interac e-Transfer",
        icon: "IN",
        description: "Send payment directly from a Canadian bank account.",
        tags: ["Bank transfer", "Local"],
        fields: "bank"
      },
      {
        id: "paypal",
        name: "PayPal",
        icon: "PP",
        description: "Authorize with PayPal wallet or linked funding source.",
        tags: ["Wallet", "Authorization"],
        fields: "authorize"
      }
    ]
  },
  AU: {
    label: "Australia",
    methods: [
      {
        id: "credit-card",
        name: "Credit and debit cards",
        icon: "CC",
        description: "Pay with Visa, Mastercard, or American Express.",
        tags: ["Instant", "3-D Secure"],
        fields: "card"
      },
      {
        id: "paypal",
        name: "PayPal",
        icon: "PP",
        description: "Use PayPal wallet checkout.",
        tags: ["Wallet", "Authorization"],
        fields: "authorize"
      },
      {
        id: "afterpay",
        name: "Afterpay",
        icon: "AP",
        description: "Pay in eligible installments with Afterpay.",
        tags: ["Pay later", "Local"],
        fields: "identity"
      },
      {
        id: "payid",
        name: "PayID bank transfer",
        icon: "PI",
        description: "Transfer funds from an Australian bank using PayID.",
        tags: ["Bank transfer", "Local"],
        fields: "bank"
      }
    ]
  },
  IN: {
    label: "India",
    methods: [
      {
        id: "upi",
        name: "UPI",
        icon: "UP",
        description: "Approve payment from any UPI app using your UPI ID.",
        tags: ["Instant", "Mobile pay"],
        fields: "upi"
      },
      {
        id: "credit-card",
        name: "Credit and debit cards",
        icon: "CC",
        description: "Pay with RuPay, Visa, Mastercard, or American Express.",
        tags: ["Cards", "3-D Secure"],
        fields: "card"
      },
      {
        id: "netbanking",
        name: "Net banking",
        icon: "NB",
        description: "Redirect to a supported Indian bank to authorize payment.",
        tags: ["Bank redirect", "Local"],
        fields: "bank"
      },
      {
        id: "wallet",
        name: "Mobile wallets",
        icon: "MW",
        description: "Use supported local wallets such as Paytm or PhonePe.",
        tags: ["Wallet", "Mobile pay"],
        fields: "authorize"
      }
    ]
  },
  BR: {
    label: "Brazil",
    methods: [
      {
        id: "pix",
        name: "Pix",
        icon: "PX",
        description: "Pay instantly from a Brazilian bank or wallet app.",
        tags: ["Instant", "QR code"],
        fields: "identity"
      },
      {
        id: "credit-card",
        name: "Credit cards",
        icon: "CC",
        description: "Pay with local or international cards.",
        tags: ["Cards", "Installments"],
        fields: "card"
      },
      {
        id: "boleto",
        name: "Boleto Bancario",
        icon: "BO",
        description: "Generate a boleto voucher for offline bank payment.",
        tags: ["Voucher", "Processing"],
        fields: "identity"
      }
    ]
  },
  MX: {
    label: "Mexico",
    methods: [
      {
        id: "credit-card",
        name: "Credit and debit cards",
        icon: "CC",
        description: "Pay with Visa, Mastercard, or American Express.",
        tags: ["Instant", "3-D Secure"],
        fields: "card"
      },
      {
        id: "oxxo",
        name: "OXXO Pay",
        icon: "OX",
        description: "Generate an OXXO voucher and pay with cash in store.",
        tags: ["Cash voucher", "Processing"],
        fields: "identity"
      },
      {
        id: "spei",
        name: "SPEI transfer",
        icon: "SP",
        description: "Pay from a Mexican bank account through SPEI.",
        tags: ["Bank transfer", "Local"],
        fields: "bank"
      }
    ]
  },
  JP: {
    label: "Japan",
    methods: [
      {
        id: "credit-card",
        name: "Credit cards",
        icon: "CC",
        description: "Pay with JCB, Visa, Mastercard, or American Express.",
        tags: ["Cards", "3-D Secure"],
        fields: "card"
      },
      {
        id: "konbini",
        name: "Konbini",
        icon: "KB",
        description: "Receive a convenience store payment code.",
        tags: ["Cash voucher", "Processing"],
        fields: "identity"
      },
      {
        id: "paypay",
        name: "PayPay",
        icon: "PY",
        description: "Authorize with PayPay wallet checkout.",
        tags: ["Wallet", "Mobile pay"],
        fields: "authorize"
      }
    ]
  },
  KR: {
    label: "South Korea",
    methods: [
      {
        id: "credit-card",
        name: "Local credit cards",
        icon: "CC",
        description: "Pay with supported Korean and international cards.",
        tags: ["Cards", "Authentication"],
        fields: "card"
      },
      {
        id: "kakao-pay",
        name: "KakaoPay",
        icon: "KP",
        description: "Approve payment through KakaoPay.",
        tags: ["Wallet", "Mobile pay"],
        fields: "authorize"
      },
      {
        id: "naver-pay",
        name: "Naver Pay",
        icon: "NP",
        description: "Use Naver Pay wallet authorization.",
        tags: ["Wallet", "Local"],
        fields: "authorize"
      }
    ]
  },
  SG: {
    label: "Singapore",
    methods: [
      {
        id: "credit-card",
        name: "Credit and debit cards",
        icon: "CC",
        description: "Pay with major cards.",
        tags: ["Instant", "3-D Secure"],
        fields: "card"
      },
      {
        id: "paynow",
        name: "PayNow",
        icon: "PN",
        description: "Pay instantly from a Singapore bank or wallet app.",
        tags: ["Instant", "QR code"],
        fields: "bank"
      },
      {
        id: "grabpay",
        name: "GrabPay",
        icon: "GP",
        description: "Authorize through GrabPay wallet.",
        tags: ["Wallet", "Mobile pay"],
        fields: "authorize"
      }
    ]
  },
  AE: {
    label: "United Arab Emirates",
    methods: [
      {
        id: "credit-card",
        name: "Credit and debit cards",
        icon: "CC",
        description: "Pay with Visa, Mastercard, or American Express.",
        tags: ["Instant", "3-D Secure"],
        fields: "card"
      },
      {
        id: "apple-pay",
        name: "Apple Pay",
        icon: "AP",
        description: "Authorize with Apple Pay on a supported device.",
        tags: ["Wallet", "Biometric"],
        fields: "authorize"
      },
      {
        id: "bank-transfer",
        name: "Bank transfer",
        icon: "BT",
        description: "Pay from a supported UAE bank account.",
        tags: ["Bank transfer", "Local"],
        fields: "bank"
      }
    ]
  },
  OTHER: {
    label: "Other countries",
    methods: [
      {
        id: "credit-card",
        name: "International credit cards",
        icon: "CC",
        description: "Pay with globally supported Visa, Mastercard, or American Express cards.",
        tags: ["Global", "3-D Secure"],
        fields: "card"
      },
      {
        id: "paypal",
        name: "PayPal",
        icon: "PP",
        description: "Use PayPal where merchant and buyer coverage is available.",
        tags: ["Wallet", "Regional"],
        fields: "authorize"
      },
      {
        id: "bank-transfer",
        name: "International bank transfer",
        icon: "BT",
        description: "Send funds from supported banks where local rails are unavailable.",
        tags: ["Bank transfer", "Processing"],
        fields: "bank"
      },
      {
        id: "local-wallet",
        name: "Local wallets",
        icon: "LW",
        description: "Display locally supported wallets based on provider coverage.",
        tags: ["Wallet", "Coverage based"],
        fields: "authorize"
      }
    ]
  }
};

const cryptoMethods = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    icon: "BTC",
    description: "Pay from a Bitcoin wallet after confirming the generated address.",
    tags: ["On-chain", "Network fee"],
    fields: "crypto"
  },
  {
    id: "ethereum",
    name: "Ethereum",
    icon: "ETH",
    description: "Use an Ethereum wallet to send ETH or supported ERC-20 tokens.",
    tags: ["On-chain", "Gas fee"],
    fields: "crypto"
  },
  {
    id: "usdt",
    name: "Tether USDT",
    icon: "USDT",
    description: "Pay with USDT on supported networks such as Ethereum or Tron.",
    tags: ["Stablecoin", "Multi-network"],
    fields: "crypto"
  },
  {
    id: "usdc",
    name: "USD Coin",
    icon: "USDC",
    description: "Settle with USDC on Ethereum, Polygon, Solana, or other supported rails.",
    tags: ["Stablecoin", "Multi-network"],
    fields: "crypto"
  },
  {
    id: "solana",
    name: "Solana",
    icon: "SOL",
    description: "Pay with SOL or supported SPL tokens using a Solana wallet.",
    tags: ["Fast settlement", "Wallet"],
    fields: "crypto"
  }
];

const resultCopy = {
  success: {
    className: "success",
    icon: "OK",
    title: "Payment successful",
    description: "Your payment was approved and the receipt has been sent to your email."
  },
  failed: {
    className: "failed",
    icon: "!",
    title: "Payment failed",
    description: "The payment could not be completed. Please review the details or try another payment method."
  },
  processing: {
    className: "processing",
    icon: "...",
    title: "Payment under processing",
    description: "We received your request and are waiting for confirmation from the payment network or provider."
  }
};

const state = {
  category: "fiat",
  country: "US",
  selectedMethod: null
};

const categoryTabs = document.querySelectorAll(".category-tab");
const countryFilter = document.querySelector("#countryFilter");
const billingCountry = document.querySelector("#billingCountry");
const countryHint = document.querySelector("#countryHint");
const methodGrid = document.querySelector("#methodGrid");
const selectedMethodHint = document.querySelector("#selectedMethodHint");
const dynamicFields = document.querySelector("#dynamicFields");
const paymentForm = document.querySelector("#paymentForm");
const submitButton = document.querySelector("#submitButton");
const checkoutView = document.querySelector("#checkoutView");
const resultView = document.querySelector("#resultView");
const resultIcon = document.querySelector("#resultIcon");
const resultTitle = document.querySelector("#resultTitle");
const resultDescription = document.querySelector("#resultDescription");
const summaryMethod = document.querySelector("#summaryMethod");
const summaryTransaction = document.querySelector("#summaryTransaction");
const newPaymentButton = document.querySelector("#newPaymentButton");

function getVisibleMethods() {
  if (state.category === "crypto") {
    return cryptoMethods;
  }

  return fiatMethodsByCountry[state.country].methods;
}

function renderMethods() {
  const methods = getVisibleMethods();

  if (!methods.some((method) => state.selectedMethod?.id === method.id)) {
    state.selectedMethod = methods[0] ?? null;
  }

  methodGrid.innerHTML = methods
    .map(
      (method) => `
        <button class="method-card ${state.selectedMethod?.id === method.id ? "active" : ""}" type="button" data-method-id="${method.id}">
          <span class="method-icon">${method.icon}</span>
          <span>
            <h3>${method.name}</h3>
            <p>${method.description}</p>
          </span>
          <span class="method-meta">
            ${method.tags.map((tag) => `<span class="chip">${tag}</span>`).join("")}
          </span>
        </button>
      `
    )
    .join("");

  renderDetailFields();
}

function renderDetailFields() {
  const method = state.selectedMethod;

  if (!method) {
    selectedMethodHint.textContent = "Select a payment method to continue.";
    dynamicFields.innerHTML = "";
    submitButton.disabled = true;
    return;
  }

  selectedMethodHint.textContent =
    state.category === "fiat"
      ? `${method.name} is available for ${fiatMethodsByCountry[state.country].label}.`
      : `${method.name} payments require wallet authorization or a network transfer.`;
  submitButton.disabled = false;

  const templates = {
    card: `
      <div>
        <label for="cardName">Name on card</label>
        <input id="cardName" name="cardName" type="text" placeholder="Alex Morgan" required>
      </div>
      <div>
        <label for="cardNumber">Card number</label>
        <input id="cardNumber" name="cardNumber" inputmode="numeric" placeholder="4242 4242 4242 4242" required>
      </div>
      <div>
        <label for="cardExpiry">Expiry date</label>
        <input id="cardExpiry" name="cardExpiry" type="text" placeholder="MM / YY" required>
      </div>
    `,
    authorize: `
      <div>
        <label for="accountId">Account, phone, or wallet ID</label>
        <input id="accountId" name="accountId" type="text" placeholder="Enter account identifier" required>
      </div>
      <div>
        <label for="authorizationCode">Authorization code</label>
        <input id="authorizationCode" name="authorizationCode" type="text" placeholder="Code from provider app" required>
      </div>
    `,
    identity: `
      <div>
        <label for="fullName">Full name</label>
        <input id="fullName" name="fullName" type="text" placeholder="Alex Morgan" required>
      </div>
      <div>
        <label for="phoneNumber">Phone number</label>
        <input id="phoneNumber" name="phoneNumber" type="tel" placeholder="+1 555 0100" required>
      </div>
    `,
    bank: `
      <div>
        <label for="bankName">Bank name</label>
        <input id="bankName" name="bankName" type="text" placeholder="Select or enter bank name" required>
      </div>
      <div>
        <label for="accountReference">Account or transfer reference</label>
        <input id="accountReference" name="accountReference" type="text" placeholder="Reference shown by your bank" required>
      </div>
    `,
    upi: `
      <div>
        <label for="upiId">UPI ID</label>
        <input id="upiId" name="upiId" type="text" placeholder="name@bank" required>
      </div>
      <div>
        <label for="upiAuthorization">UPI authorization reference</label>
        <input id="upiAuthorization" name="upiAuthorization" type="text" placeholder="Approval reference" required>
      </div>
    `,
    crypto: `
      <div>
        <label for="walletAddress">Sending wallet address</label>
        <input id="walletAddress" name="walletAddress" type="text" placeholder="Wallet address" required>
      </div>
      <div>
        <label for="network">Network</label>
        <select id="network" name="network" required>
          <option>Bitcoin</option>
          <option>Ethereum</option>
          <option>Tron</option>
          <option>Polygon</option>
          <option>Solana</option>
        </select>
      </div>
      <div>
        <label for="transactionHash">Transaction hash or authorization ID</label>
        <input id="transactionHash" name="transactionHash" type="text" placeholder="0x..." required>
      </div>
    `
  };

  dynamicFields.innerHTML = templates[method.fields];
}

function renderCountryHint() {
  const { label, methods } = fiatMethodsByCountry[state.country];
  countryHint.textContent = `${label}: ${methods.map((method) => method.name).join(", ")}.`;
}

function setCategory(category) {
  state.category = category;
  state.selectedMethod = null;

  categoryTabs.forEach((tab) => {
    const isActive = tab.dataset.category === category;
    tab.classList.toggle("active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  countryFilter.classList.toggle("hidden", category === "crypto");
  renderMethods();
}

function selectMethod(methodId) {
  const method = getVisibleMethods().find((candidate) => candidate.id === methodId);
  if (!method) {
    return;
  }

  state.selectedMethod = method;
  renderMethods();
}

function showResult(resultMode) {
  const copy = resultCopy[resultMode];
  const transactionId = `TX-${Date.now().toString(36).toUpperCase()}`;

  resultView.className = `result-panel ${copy.className}`;
  resultIcon.textContent = copy.icon;
  resultTitle.textContent = copy.title;
  resultDescription.textContent = copy.description;
  summaryMethod.textContent = state.selectedMethod.name;
  summaryTransaction.textContent = transactionId;
  checkoutView.classList.add("hidden");
  resultView.classList.remove("hidden");
  resultView.scrollIntoView({ behavior: "smooth", block: "start" });
}

categoryTabs.forEach((tab) => {
  tab.addEventListener("click", () => setCategory(tab.dataset.category));
});

billingCountry.addEventListener("change", (event) => {
  state.country = event.target.value;
  state.selectedMethod = null;
  renderCountryHint();
  renderMethods();
});

methodGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".method-card");
  if (!card) {
    return;
  }

  selectMethod(card.dataset.methodId);
});

paymentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!paymentForm.reportValidity() || !state.selectedMethod) {
    return;
  }

  const resultMode = new FormData(paymentForm).get("resultMode");
  showResult(resultMode);
});

newPaymentButton.addEventListener("click", () => {
  paymentForm.reset();
  billingCountry.value = "US";
  state.country = "US";
  checkoutView.classList.remove("hidden");
  resultView.className = "result-panel hidden";
  setCategory("fiat");
  renderCountryHint();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

renderCountryHint();
renderMethods();
