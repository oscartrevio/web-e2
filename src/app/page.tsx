export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        This is a Heading
      </h1>
      <p className="mb-8 leading-relaxed">This is a Subheading</p>
      <button className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
        Useless Button
      </button>
    </main>
  );
}
