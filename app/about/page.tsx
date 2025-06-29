
export default function AboutPage() {
    return (
        <main className="bg-grid min-h-screen flex flex-col items-center justify-center p-4 font-mono">
            {/*hide, for now
            <h1 className="hover:text-4xl transition-all duration-300 text-3xl mb-6">about</h1>
            <p className="max-w-xl text-center text-lg mb-35 text-neutral-500"> Hi! I'm Anika, a hobbyist UX designer that's into computational biology. </p>

        
            <h2 className="text-2xl mb-6">Skills & Expertise</h2>

            <ul className="list-disc list-inside mb-6 text-neutral-500">
                <li>UX & UI Design (Figma)</li>
                <li>Frontend Development (React, Next.js, TypeScript)</li>
                <li>Computational Biology & Data Analysis</li>
                <li>Python & Bioinformatics Tools</li>
            </ul>
        */}

            <div className="flex flex-col h-screen">

            <div className="flex-1 flex flex-col items-center justify-center">
                <h2 className="hover:text-4xl transition-all duration-300 text-3xl mb-6">about</h2>
                <p className="mb-2 px-6 text-center text-neutral-500">
                    lover of where functionality meets aesthetics. 
                </p>
            </div>

            <div className="mb-6" >
            <p className=" mx-auto px-50 text-neutral-500 text-xs">
                contact me via instagram DM or reach out via email&nbsp;
                <span className="hover:underline"> 
                    <a href="mailto:anika.mabano@gmail.com"></a> 
                @anika.mabano@gmail.com
                </span> 
            </p>
            </div>

            </div>
        
   


            

        </main>
    );
}