'use client';

export default function ContactForm() {
  return (
    <div className="bg-dk-cream rounded-2xl p-8 sm:p-10">
      <h2 className="font-heading font-bold text-xl text-dk-black mb-6">
        Envoyer un message
      </h2>
      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-xs font-semibold uppercase tracking-widest text-dk-gray-500"
          >
            Nom complet
          </label>
          <input
            id="name"
            type="text"
            placeholder="Votre nom"
            className="w-full px-4 py-3 bg-dk-white border border-dk-gray-200 text-dk-black placeholder:text-dk-gray-500 rounded-xl text-sm focus:outline-none focus:border-dk-gray-500 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-xs font-semibold uppercase tracking-widest text-dk-gray-500"
          >
            Adresse email
          </label>
          <input
            id="email"
            type="email"
            placeholder="ton@email.com"
            className="w-full px-4 py-3 bg-dk-white border border-dk-gray-200 text-dk-black placeholder:text-dk-gray-500 rounded-xl text-sm focus:outline-none focus:border-dk-gray-500 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="subject"
            className="text-xs font-semibold uppercase tracking-widest text-dk-gray-500"
          >
            Sujet
          </label>
          <input
            id="subject"
            type="text"
            placeholder="Votre sujet"
            className="w-full px-4 py-3 bg-dk-white border border-dk-gray-200 text-dk-black placeholder:text-dk-gray-500 rounded-xl text-sm focus:outline-none focus:border-dk-gray-500 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-xs font-semibold uppercase tracking-widest text-dk-gray-500"
          >
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Décrivez votre demande..."
            className="w-full px-4 py-3 bg-dk-white border border-dk-gray-200 text-dk-black placeholder:text-dk-gray-500 rounded-xl text-sm focus:outline-none focus:border-dk-gray-500 transition-colors resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3.5 bg-dk-black text-dk-white text-sm font-semibold rounded-full hover:bg-dk-gray-900 transition-colors mt-1"
        >
          Envoyer le message
        </button>
        <p className="text-dk-gray-500 text-[11px] text-center">
          Formulaire visuel — non fonctionnel pour la V1
        </p>
      </form>
    </div>
  );
}
