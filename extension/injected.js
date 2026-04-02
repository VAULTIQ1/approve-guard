(() => {
  const original = window.ethereum?.request?.bind(window.ethereum);
  if (!original) return;

  const MAX_UINT =
    "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";

  window.ethereum.request = async (args) => {
    if (args.method === "eth_sendTransaction") {
      const tx = args.params?.[0] || {};
      const data = tx.data || "";

      const isApprove = data.startsWith("0x095ea7b3");

      const isUnlimited =
        data.slice(-64).toLowerCase() === MAX_UINT;

      if (isApprove && isUnlimited) {
        console.warn("Approve Guard: BLOCKED unlimited approval");
        throw new Error("Blocked: unlimited approval");
      }
    }

    return original(args);
  };
})();
