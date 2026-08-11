import Image from "next/image";

export default function FeaturedMovie() {
	  return (
	  	    <section className="relative h-[520px] overflow-hidden">
	  	          <Image
	  	                  src="/posters/poster4.jpeg"
	  	                          alt="The Beekeeper"
	  	                                  fill
	  	                                          priority
	  	                                                  className="object-cover"
	  	                                                        />

	  	                                                              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

	  	                                                                    <div className="absolute inset-x-0 bottom-0 px-6 pb-10 md:px-12">
	  	                                                                            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-yellow-400">
	  	                                                                                      ⭐ Featured Movie
	  	                                                                                              </p>

	  	                                                                                                      <h1 className="text-4xl font-extrabold md:text-6xl">
	  	                                                                                                                The Beekeeper
	  	                                                                                                                        </h1>

	  	                                                                                                                                <p className="mt-3 max-w-xl text-gray-300">
	  	                                                                                                                                          A former operative unleashes a relentless campaign of revenge
	  	                                                                                                                                                    against a powerful organization.
	  	                                                                                                                                                            </p>

	  	                                                                                                                                                                    <div className="mt-5 flex flex-wrap items-center gap-3">
	  	                                                                                                                                                                              <span className="rounded-full bg-gray-800 px-4 py-2 text-sm">
	  	                                                                                                                                                                                          🎬 2024
	  	                                                                                                                                                                                                    </span>

	  	                                                                                                                                                                                                              <span className="rounded-full bg-gray-800 px-4 py-2 text-sm">
	  	                                                                                                                                                                                                                          🎭 Thriller
	  	                                                                                                                                                                                                                                    </span>

	  	                                                                                                                                                                                                                                              <span className="rounded-full bg-yellow-500 px-4 py-2 text-sm font-bold text-black">
	  	                                                                                                                                                                                                                                                          ⭐ 7.2
	  	                                                                                                                                                                                                                                                                    </span>
	  	                                                                                                                                                                                                                                                                            </div>
	  	                                                                                                                                                                                                                                                                                  </div>
	  	                                                                                                                                                                                                                                                                                      </section>
	  	                                                                                                                                                                                                                                                                                        );
	  	                                                                                                                                                                                                                                                                                        }
