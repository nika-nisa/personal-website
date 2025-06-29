export default function HomePage() {
  return (
    <main className="bg-grid min-h-screen flex flex-col items-center justify-center p-4 font-mono">
      <h1 className="hover:text-4xl transition-all duration-300 text-3xl mb-2 text-black">
        anika nina
      </h1>

      <div className="flex w-72 gap-4 items-center">
      <p className="max-w-xl text-center text-lg text-neutral-500">
        I'm a 
        <span className="bg-[#c2191f] mx-1 px-2 py-0.5 rounded-lg opacity-70 text-neutral-200 font-mono text-xs">
          ????

        </span>
        
        working at the intersection of design, biology, and computational thinking
      </p>
      </div>

    </main>
  );
}
