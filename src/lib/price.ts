export function getValue(text: string): number {
    const [, rate] = text.split(" ");
    const buyingRateValue = Number(rate.replace(/\./g, ""));
    return buyingRateValue;
}

export function calculatePrice(
    weight: string,
    buyPrice: number,
    sellPrice: number
) {
    const normalizedWeight = parseFloat(weight);

    let totalBuyPrice = 0;
    let totalSellPrice = 0;

    if (isNaN(normalizedWeight)) {
        alert("Mohon masukkan angka yang valid untuk berat.");
    } else {
        totalBuyPrice = normalizedWeight * buyPrice;
        totalSellPrice = normalizedWeight * sellPrice;
    }

    return { totalBuyPrice, totalSellPrice };
}

export function formatIDR(value: number) {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
        minimumFractionDigits: 0,
    }).format(value);
}
