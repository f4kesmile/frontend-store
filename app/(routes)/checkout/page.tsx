"use client";

import { useCart } from "@/providers/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();

  const handleCheckout = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ cart }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (data.redirect_url) {
      window.location.href = data.redirect_url;
    } else {
      alert("Gagal memulai pembayaran");
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <p className="mb-2">
        Total Pembayaran: <strong>Rp{total}</strong>
      </p>
      <button
        onClick={handleCheckout}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Bayar Sekarang
      </button>
    </div>
  );
}
