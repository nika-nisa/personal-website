
export default function AboutPage() {
    return (
        <main className="bg-grid min-h-screen flex flex-col items-center justify-center p-4 font-mono">
            <h1 className="hover:text-4xl transition-all duration-300 text-3xl mb-6">about</h1>
            <p className="max-w-xl text-center text-lg mb-35 text-gray-500"> Hi! I'm Anika, a hobbyist UX designer that's into computational biology. </p>

          
            <h2 className="text-2xl mb-6">Skills & Expertise</h2>

            <ul className="list-disc list-inside mb-6 text-gray-500">
                <li>UX & UI Design (Figma)</li>
                <li>Frontend Development (React, Next.js, TypeScript)</li>
                <li>Computational Biology & Data Analysis</li>
                <li>Python & Bioinformatics Tools</li>
            </ul>

            <h2 className="text-2xl mb-6 mx-auto px-6">My Vision</h2>
            <p className="mb-2 mx-auto px-25 text-gray-500">
                I'm driven by my love for elegant design systems and technological solutions that bridge biology and computation!
            </p>

            <p className="mx-auto mb-6 px-50 text-gray-500">
                Contact me via instagram DM (the way you found this page!) or reach out via <a href="anika.mabano@gmail.com"> email @anika.mabano@gmail.com</a>
            </p>
   


            

        </main>
    );
}