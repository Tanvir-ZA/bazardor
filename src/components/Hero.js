import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-6 items-center bg-green-100 rounded-2xl p-6 md:p-10">
      <div>
        <p className="text-sm text-green-700 font-semibold mb-2">
          প্রতিদিনের বাজার দর
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-green-900 mb-3">
          আজকের বাজার দর, এক নজরে
        </h1>
        <p className="text-gray-600 mb-5">
          চাল, ডাল, সবজি, মাছ-মাংস সহ প্রয়োজনীয় সব পণ্যের আজকের দাম দেখুন এক জায়গায়।
        </p>
        <a href="#সব-পণ্য" className="btn btn-success text-white">
          সব পণ্য দেখুন
        </a>
      </div>

      <div className="flex justify-center">
        <Image
          src="/banner.png"
          alt="banner"
          width={500}
          height={420}
          className="w-full max-w-sm h-auto"
          priority
        />
      </div>
    </section>
  );
}