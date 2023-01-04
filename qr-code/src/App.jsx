function App() {
  return (
    <div className="grid place-items-center h-screen m-4 font-outfit">
      <section className="bg-white max-w-sm p-4 rounded-lg">
        <img className="rounded-lg" src="/qr-code.png" alt="" />

        <div className="p-4 text-center">
          <h2 className="font-bold text-xl text-darkblue tracking-wide">
            Improve your front-endskills by building projects
          </h2>
          <p className="text-darkblue pt-2">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
