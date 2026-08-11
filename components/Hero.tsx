"use client";

type HeroProps = {
	  search: string;
	    setSearch: (value: string) => void;
	    };

	    export default function Hero({ search, setSearch }: HeroProps) {
	    	  return (
	    	  	    <section className="px-6 py-16 text-center">
	    	  	          <h2 className="text-5xl font-bold">
	    	  	                  Live Every Film
	    	  	                        </h2>

	    	  	                              <p className="mt-4 text-gray-400 text-lg">
	    	  	                                      Discover trending movies, TV series, Nollywood hits and entertainment news.
	    	  	                                            </p>

	    	  	                                                  <input
	    	  	                                                          type="text"
	    	  	                                                                  value={search}
	    	  	                                                                          onChange={(e) => setSearch(e.target.value)}
	    	  	                                                                                  placeholder="🔍 Search movies, actors or series..."
	    	  	                                                                                          className="mt-8 w-full max-w-xl rounded-lg bg-gray-900 border border-gray-700 p-4 outline-none focus:border-yellow-500"
	    	  	                                                                                                />
	    	  	                                                                                                    </section>
	    	  	                                                                                                      );
	    	  	                                                                                                      }
