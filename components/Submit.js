export default function Submit() {
  return (
    <div className="flex place-content-center">
      <div className="max-w-xs my-2 overflow-hidden rounded shadow-lg">
        <div className="px-6 py-4">
          <div className="mb-2 text-xl font-bold text-center">Ispuni me</div>
          <form className="flex flex-col">
            <label htmlFor="name" className="mb-2 italic">
              Ime
            </label>
            <input
              className="mb-4 border-b-2"
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
            />

            <label htmlFor="name" className="mb-2 italic">
              Prezime
            </label>
            <input
              className="mb-4 border-b-2"
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
            />
            <label htmlFor="email" className="mb-2 italic">
              E-mail
            </label>
            <input
              className="mb-4 border-b-2"
              id="name"
              name="name"
              type="text"
              autoComplete="email"
              required
            />

            <button
              type="submit"
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
