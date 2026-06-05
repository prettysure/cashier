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

const STORAGE_KEY = "cashier-demo-transactions";

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
const checkoutView = document.querySelector("#checkoutView");
const resultView = document.querySelector("#resultView");
const resultIcon = document.querySelector("#resultIcon");
const resultTitle = document.querySelector("#resultTitle");
const resultDescription = document.querySelector("#resultDescription");
const summaryMethod = document.querySelector("#summaryMethod");
const summaryTransaction = document.querySelector("#summaryTransaction");
const summaryStatus = document.querySelector("#summaryStatus");
const newPaymentButton = document.querySelector("#newPaymentButton");
const paymentModal = document.querySelector("#paymentModal");
const closeModalButton = document.querySelector("#closeModalButton");
const transactionSearch = document.querySelector("#transactionSearch");
const transactionTableBody = document.querySelector("#transactionTableBody");
const clearHistoryButton = document.querySelector("#clearHistoryButton");

function getVisibleMethods() {
  if (state.category === "crypto") {
    return cryptoMethods;
  }

  return fiatMethodsByCountry[state.country].methods;
}

function renderMethods() {
  const methods = getVisibleMethods();

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
    return;
  }

  selectedMethodHint.textContent =
    state.category === "fiat"
      ? `${method.name} is available for ${fiatMethodsByCountry[state.country].label}.`
      : `${method.name} payments require wallet authorization or a network transfer.`;

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

function openPaymentModal() {
  paymentForm.reset();
  renderDetailFields();
  paymentModal.classList.remove("hidden");
  const firstField = paymentModal.querySelector("input, select");
  firstField?.focus();
}

function closePaymentModal() {
  paymentModal.classList.add("hidden");
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
  openPaymentModal();
}

function generateTransactionId() {
  const timePart = Date.now().toString(36).toUpperCase();
  const randomPart = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `TX-${timePart}-${randomPart}`;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function maskCardNumber(value) {
  const digits = String(value ?? "").replace(/\D/g, "");
  if (digits.length < 4) {
    return "Card details provided";
  }

  return `Card ending ${digits.slice(-4)}`;
}

function maskLongIdentifier(value) {
  const text = String(value ?? "").trim();
  if (text.length <= 10) {
    return text || "Provided";
  }

  return `${text.slice(0, 6)}...${text.slice(-4)}`;
}

function summarizePaymentDetails(formData, method) {
  if (method.fields === "card") {
    return [
      maskCardNumber(formData.get("cardNumber")),
      `Name: ${formData.get("cardName")}`,
      `Expiry: ${formData.get("cardExpiry")}`
    ].join("; ");
  }

  if (method.fields === "authorize") {
    return [
      `Account: ${maskLongIdentifier(formData.get("accountId"))}`,
      `Auth: ${maskLongIdentifier(formData.get("authorizationCode"))}`
    ].join("; ");
  }

  if (method.fields === "identity") {
    return [
      `Name: ${formData.get("fullName")}`,
      `Phone: ${maskLongIdentifier(formData.get("phoneNumber"))}`
    ].join("; ");
  }

  if (method.fields === "bank") {
    return [
      `Bank: ${formData.get("bankName")}`,
      `Reference: ${maskLongIdentifier(formData.get("accountReference"))}`
    ].join("; ");
  }

  if (method.fields === "upi") {
    return [
      `UPI: ${maskLongIdentifier(formData.get("upiId"))}`,
      `Approval: ${maskLongIdentifier(formData.get("upiAuthorization"))}`
    ].join("; ");
  }

  return [
    `Wallet: ${maskLongIdentifier(formData.get("walletAddress"))}`,
    `Network: ${formData.get("network")}`,
    `Hash: ${maskLongIdentifier(formData.get("transactionHash"))}`
  ].join("; ");
}

function getTransactions() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? [];
  } catch {
    return [];
  }
}

function renderTransactions() {
  const query = transactionSearch.value.trim().toLowerCase();
  const filtered = getTransactions().filter((transaction) =>
    [
      transaction.id,
      transaction.status,
      transaction.category,
      transaction.country,
      transaction.method,
      transaction.email,
      transaction.details,
      transaction.createdAt
    ]
      .join(" ")
      .toLowerCase()
      .includes(query)
  );

  if (filtered.length === 0) {
    transactionTableBody.innerHTML = `
      <tr>
        <td class="empty-row" colspan="8">No matching transaction records yet.</td>
      </tr>
    `;
    return;
  }

  transactionTableBody.innerHTML = filtered
    .map(
      (transaction) => `
        <tr>
          <td>${escapeHtml(transaction.id)}</td>
          <td><span class="status-pill status-${escapeHtml(transaction.status)}">${escapeHtml(transaction.status)}</span></td>
          <td>${escapeHtml(transaction.category)}</td>
          <td>${escapeHtml(transaction.country)}</td>
          <td>${escapeHtml(transaction.method)}</td>
          <td>${escapeHtml(transaction.email)}</td>
          <td>${escapeHtml(transaction.details)}</td>
          <td>${escapeHtml(transaction.createdAt)}</td>
        </tr>
      `
    )
    .join("");
}

function saveTransaction(record) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([record, ...getTransactions()]));
  renderTransactions();
}

function buildTransactionRecord(formData) {
  const method = state.selectedMethod;
  const countryLabel =
    state.category === "fiat" ? fiatMethodsByCountry[state.country].label : "Not applicable";

  return {
    id: generateTransactionId(),
    status: "success",
    category: state.category === "fiat" ? "Fiat" : "Crypto",
    country: countryLabel,
    method: method.name,
    email: formData.get("payerEmail"),
    details: summarizePaymentDetails(formData, method),
    createdAt: new Date().toLocaleString()
  };
}

function showResult(record) {
  const copy = resultCopy[record.status];

  resultView.className = `result-panel ${copy.className}`;
  resultIcon.textContent = copy.icon;
  resultTitle.textContent = copy.title;
  resultDescription.textContent = copy.description;
  summaryMethod.textContent = record.method;
  summaryTransaction.textContent = record.id;
  summaryStatus.textContent = record.status;
  checkoutView.classList.add("hidden");
  resultView.classList.remove("hidden");
  closePaymentModal();
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

  const record = buildTransactionRecord(new FormData(paymentForm));
  saveTransaction(record);
  showResult(record);
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

closeModalButton.addEventListener("click", closePaymentModal);

paymentModal.addEventListener("click", (event) => {
  if (event.target === paymentModal) {
    closePaymentModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !paymentModal.classList.contains("hidden")) {
    closePaymentModal();
  }
});

transactionSearch.addEventListener("input", renderTransactions);

clearHistoryButton.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  renderTransactions();
});

renderCountryHint();
renderMethods();
renderTransactions();
