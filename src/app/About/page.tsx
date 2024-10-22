import Image from "next/image";
export default function About() {
  return (
    <div className="bg-red-300 min-h-screen">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-4xl font-medium title-font mb-2 text-gray-900 italic">
              It&apos;s My Happiness.
            </h1>
          </div>

          <div className="flex flex-wrap -m-4 border-red-500 shadow-lg">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <Image
                    className="object-cover object-center rounded-full border-4 border-red-500 shadow-lg"
                    alt="hero"
                    src="/redbouquet.webp"
                    width={300}
                    height={300}
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Red Rose
                </h2>
                <p className="leading-relaxed text-base">
                  A red rose symbolizes deep love and passion, its vibrant hue
                  representing devotion.
                </p>
              </div>
            </div>

            {/* Second flower - White Flower */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 border-4 border-red-500 shadow-lg">
                  <Image
                    className="object-cover object-center rounded-full border-4 border-red-500 shadow-lg"
                    alt="hero"
                    src="/flower2.jpg"
                    width={300}
                    height={300}
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  White Flower
                </h2>
                <p className="leading-relaxed text-base">
                  A white flower embodies purity and innocence, symbolizing
                  peace, serenity, and new beginnings.
                </p>
              </div>
            </div>

            {/* Third flower - Simple Flower */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <Image
                    className="object-cover object-center rounded-full border-4 border-red-500 shadow-lg"
                    alt="hero"
                    src="/whitebouquet.jpeg"
                    width={300}
                    height={300}
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Flower
                </h2>
                <p className="leading-relaxed text-base">
                  A simple flower reflects natural beauty and grace, offering
                  quiet elegance in its unadorned form.
                </p>
              </div>
            </div>

            {/* Fourth flower - My Flower */}
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-200 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <Image
                    className="object-cover object-center rounded-full border-4 border-red-500 shadow-lg"
                    alt="hero"
                    src="/myflower.jpg"
                    width={300}
                    height={300}
                  />
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  Flower
                </h2>
                <p className="leading-relaxed text-base">
                  A flower is a timeless symbol of beauty and grace, quietly
                  enriching the world with its vibrant presence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
