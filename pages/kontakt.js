import Submit from "../components/Submit";

export default function Kontakt() {
  return (
    <div className="w-screen h-screen bg-hero bg-slate-400 bg-no-repeat bg-center bg-scroll bg-auto -mb-12">
      <div className="bg-slate-200">
        <h6 className="uppercase text-center antialiased font-bold text-pink-900 p-5 text-center text-2xl">
          Kontaktirajte nas ako ste i vi prosijede pederčine
        </h6>
      </div>
      <Submit />
    </div>
  );
}
