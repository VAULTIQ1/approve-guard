# 🔐 Approve Guard

Blocks unlimited ERC20 approvals in MetaMask before transaction signing.

---

## ⚠️ Problem

Many Web3 users unknowingly approve unlimited token access.

This allows smart contracts to drain all funds later.

---

## 🧱 Solution

Approve Guard intercepts MetaMask transactions and blocks:

- ERC20 approve()
- Unlimited approvals (MAX_UINT)

---

## 🚀 How it works

- Hooks into `window.ethereum.request`
- Detects `eth_sendTransaction`
- Checks for approve() + MAX_UINT
- Blocks transaction immediately

---

## 🧪 Install (Local)

1. Open Chrome
2. Go to: `chrome://extensions`
3. Enable Developer Mode
4. Click "Load unpacked"
5. Select `extension/` folder

---

## 🎯 Scope

- MetaMask (Chrome)
- ERC20 approvals only
- Unlimited approval detection

---

## ⚠️ Disclaimer

This is an MVP security tool. It does not guarantee full wallet protection.
