import { bnPrice, unitBn, changeInfo } from "@/lib/bn";

export default function Ticker({ products }) {
  const list = [...products, ...products];

  return (
    <div className="bg-green-700 text-white overflow-hidden py-2">
      <div className="flex w-max gap-8 marquee">
        {list.map((p, i) => {
          const ch = changeInfo(p.change);
          return (
            <span key={i} className="whitespace-nowrap text-sm">
              {p.image} {p.nameBn} {bnPrice(p.today)} টাকা/{unitBn[p.unit]}{" "}
              <b className={p.change.dir === "down" ? "text-red-200" : "text-green-200"}>
                {ch.text}
              </b>
            </span>
          );
        })}
      </div>
    </div>
  );
}