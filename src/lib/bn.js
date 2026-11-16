const digits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

export function toBn(n) {
  return String(n).replace(/\d/g, (d) => digits[d]);
}

export function bnPrice(n) {
  return toBn(Number(n).toLocaleString("en-US"));
}

export const unitBn = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

export function changeInfo(change) {
  const pct = toBn(Math.abs(change.pct));
  if (change.dir === "up") return { text: `▲ ${pct}%`, cls: "text-green-600" };
  if (change.dir === "down") return { text: `▼ ${pct}%`, cls: "text-red-600" };
  return { text: "— ০.০%", cls: "text-gray-500" };
}