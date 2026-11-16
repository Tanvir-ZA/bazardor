const digits = ["০","১","২","৩","৪","৫","৬","৭","৮","৯"];

export const unitBn = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
};

// বাড়া/কমা/একই: লেখা আর রং ঠিক করে দেয়
export function changeInfo(change) {
  const pct = toBn(Math.abs(change.pct));
  if (change.dir === "up") return { text: `▲ ${pct}%`, cls: "text-green-600" };
  if (change.dir === "down") return { text: `▼ ${pct}%`, cls: "text-red-600" };
  return { text: `— ০.০%`, cls: "text-gray-500" };
}