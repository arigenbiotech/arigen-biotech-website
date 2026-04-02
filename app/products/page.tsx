import { products, type Product } from "@/app/data/products";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <section className="bg-slate-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-semibold">
            Our Products
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">
            Comprehensive Product Portfolio
          </h1>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
            Discover our innovative nanotechnology solutions for agriculture,
            research, and industry. From smart fertilizers to advanced
            nanomaterials.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product: Product, index) => (
            <article
              key={index}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              <div className="h-[40%] max-h-68 bg-slate-100 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={144}
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="h-[60%] flex flex-col justify-between max-h-full p-6">
                <div className="space-y-3 pb-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                    <span className="text-xs text-slate-500">
                      {product.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-slate-500 text-sm">{product.subtitle}</p>

                  {product.benefits && (
                    <ul className="text-slate-600 text-xs list-disc list-inside space-y-1">
                      {product.benefits.slice(0, 3).map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {product.applications && (
                    <div>
                      <p className="text-slate-600 text-xs font-semibold mb-1">
                        Applications:
                      </p>
                      <ul className="text-slate-600 text-xs list-disc list-inside space-y-1">
                        {product.applications.slice(0, 3).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {product.features && (
                    <div>
                      <p className="text-slate-600 text-xs font-semibold mb-1">
                        Key Features:
                      </p>
                      <ul className="text-slate-600 text-xs list-disc list-inside space-y-1">
                        {product.features.slice(0, 3).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {product.available && (
                    <div>
                      <p className="text-slate-600 text-xs font-semibold mb-1">
                        Available:
                      </p>
                      <ul className="text-slate-600 text-xs list-disc list-inside space-y-1">
                        {product.available.slice(0, 3).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {product.variants && (
                    <div>
                      <p className="text-slate-600 text-xs font-semibold mb-1">
                        Variants:
                      </p>
                      {product.variants.map((variant, i) => (
                        <div key={i} className="mb-2">
                          <p className="text-slate-600 text-xs font-medium">
                            {variant.name}
                          </p>
                          <ul className="text-slate-600 text-xs list-disc list-inside ml-4 space-y-1">
                            {variant.features.slice(0, 2).map((feat, j) => (
                              <li key={j}>{feat}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {product.offerings && (
                    <div>
                      <p className="text-slate-600 text-xs font-semibold mb-1">
                        Offerings:
                      </p>
                      <ul className="text-slate-600 text-xs list-disc list-inside space-y-1">
                        {product.offerings.slice(0, 3).map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {product.idealFor && (
                    <p className="text-slate-500 text-xs">
                      <span className="font-semibold">Ideal For:</span>{" "}
                      {product.idealFor}
                    </p>
                  )}

                  {product.bestFor && (
                    <p className="text-slate-500 text-xs">
                      <span className="font-semibold">Best For:</span>{" "}
                      {product.bestFor}
                    </p>
                  )}
                </div>

                <Link href="/contact">
                  <button className="w-full text-xs md:text-sm font-bold text-blue-700 border border-blue-200 rounded-lg py-2 hover:bg-blue-50 transition">
                    Enquiry
                  </button>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
