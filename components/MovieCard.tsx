"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type Movie = {
	  title: string;
	    year: string;
	      genre: string;
	        category?: string;
	          rating: string;
	            image: string;
	              comingSoon?: boolean;
	              };

	              export default function MovieCard({ movie }: { movie: Movie }) {
	              	  const router = useRouter();

	              	    const openDetails = () => {
	              	    	    router.push(`/movie/${encodeURIComponent(movie.title)}`);
	              	    	      };

	              	    	        return (
	              	    	        	    <div className="group overflow-hidden rounded-xl bg-gray-900 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
	              	    	        	          <div className="relative">
	              	    	        	                  <Image
	              	    	        	                            src={movie.image}
	              	    	        	                                      alt={movie.title}
	              	    	        	                                                width={300}
	              	    	        	                                                          height={450}
	              	    	        	                                                                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
	              	    	        	                                                                            />

	              	    	        	                                                                                    <div className="absolute left-2 top-2 rounded-lg bg-black/80 px-2 py-1 text-sm font-bold text-yellow-400">
	              	    	        	                                                                                              ⭐ {movie.rating}
	              	    	        	                                                                                                      </div>

	              	    	        	                                                                                                              {movie.comingSoon && (
	              	    	        	                                                                                                              	          <div className="absolute right-2 top-2 rounded-lg bg-red-600 px-2 py-1 text-xs font-bold text-white">
	              	    	        	                                                                                                              	                      Coming Soon
	              	    	        	                                                                                                              	                                </div>
	              	    	        	                                                                                                              	                                        )}
	              	    	        	                                                                                                              	                                              </div>

	              	    	        	                                                                                                              	                                                    <div className="p-4">
	              	    	        	                                                                                                              	                                                            <h3 className="line-clamp-1 text-lg font-bold text-white">
	              	    	        	                                                                                                              	                                                                      {movie.title}
	              	    	        	                                                                                                              	                                                                              </h3>

	              	    	        	                                                                                                              	                                                                                      <p className="mt-1 text-sm text-gray-400">
	              	    	        	                                                                                                              	                                                                                                {movie.year} • {movie.genre}
	              	    	        	                                                                                                              	                                                                                                        </p>

	              	    	        	                                                                                                              	                                                                                                                {movie.category && (
	              	    	        	                                                                                                              	                                                                                                                	          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gray-500">
	              	    	        	                                                                                                              	                                                                                                                	                      {movie.category}
	              	    	        	                                                                                                              	                                                                                                                	                                </p>
	              	    	        	                                                                                                              	                                                                                                                	                                        )}

	              	    	        	                                                                                                              	                                                                                                                	                                                <button
	              	    	        	                                                                                                              	                                                                                                                	                                                          onClick={openDetails}
	              	    	        	                                                                                                              	                                                                                                                	                                                                    className="mt-4 w-full rounded-lg bg-yellow-500 px-3 py-2 font-semibold text-black transition hover:bg-yellow-400"
	              	    	        	                                                                                                              	                                                                                                                	                                                                            >
	              	    	        	                                                                                                              	                                                                                                                	                                                                                      View Details
	              	    	        	                                                                                                              	                                                                                                                	                                                                                              </button>
	              	    	        	                                                                                                              	                                                                                                                	                                                                                                    </div>
	              	    	        	                                                                                                              	                                                                                                                	                                                                                                        </div>
	              	    	        	                                                                                                              	                                                                                                                	                                                                                                          );
	              	    	        	                                                                                                              	                                                                                                                	                                                                                                          }
