const facts = [
  { label: "Capitale", value: "Lomé" },
  { label: "Superficie", value: "56 785 km²" },
  { label: "Population", value: "~9 millions d'habitants" },
  { label: "Langue officielle", value: "Français" },
  { label: "Monnaie", value: "Franc CFA (XOF)" },
  { label: "Fuseau horaire", value: "GMT+0" },
  { label: "Climat", value: "Tropical (2 saisons des pluies)" },
  { label: "Indicatif téléphonique", value: "+228" },
];

const regions = [
  {
    name: "Lomé",
    desc: "La capitale et la plus grande ville du pays, située sur la côte du Golfe de Guinée. Centre économique, culturel et administratif du Togo.",
  },
  {
    name: "Kpalimé",
    desc: "Ville connue pour ses paysages montagneux, ses cascades et son artisanat local. Idéale pour les randonnées et la découverte de la nature.",
  },
  {
    name: "Sokodé",
    desc: "Deuxième ville du Togo, à majorité musulmane, animée lors des fêtes religieuses et des marchés traditionnels.",
  },
  {
    name: "Kara",
    desc: "Ville du nord, point de départ pour explorer les châteaux de terre des Tata-Somba et les populations Batammariba.",
  },
];

export default function InformationsTogo() {
  return (
    <>
      <section className="bg-gradient-to-r from-green-800 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Destination</span>
          <h1 className="mt-2 text-4xl font-black">Informations sur le Togo</h1>
          <p className="mt-4 text-green-100 max-w-2xl">
            Tout ce que vous devez savoir sur le Togo avant de nous rejoindre.
          </p>
        </div>
      </section>

      {/* Flag strip */}
      <div className="flex h-3">
        <div className="flex-1 bg-green-600" />
        <div className="flex-1 bg-yellow-400" />
        <div className="flex-1 bg-red-600" />
        <div className="flex-1 bg-green-600" />
        <div className="flex-1 bg-yellow-400" />
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-6">Le Togo en bref</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Le Togo est un pays d&apos;Afrique de l&apos;Ouest bordé par le Ghana à l&apos;ouest, le Bénin à l&apos;est,
                le Burkina Faso au nord et l&apos;océan Atlantique au sud. Malgré sa petite taille, le Togo
                est un pays d&apos;une grande diversité culturelle, avec plus de 40 groupes ethniques.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Lomé, sa capitale, est une ville dynamique et en pleine expansion, offrant un mélange
                fascinant de modernité et de traditions africaines. C&apos;est là que notre association
                ASB-TOGO est basée et déploie la majorité de ses actions.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {facts.map((f) => (
                  <div key={f.label} className="bg-gray-50 rounded-xl p-3">
                    <div className="text-xs text-gray-500 font-medium uppercase tracking-wide">{f.label}</div>
                    <div className="font-bold text-gray-900 mt-1">{f.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-6">Villes à découvrir</h2>
              <div className="space-y-4">
                {regions.map((r) => (
                  <div key={r.name} className="border-l-4 border-green-500 pl-5 py-2">
                    <h3 className="font-bold text-gray-900 mb-1">{r.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Conseils pratiques</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { title: "Santé", items: ["Vaccin fièvre jaune obligatoire", "Antipaludéen recommandé", "Eau en bouteille uniquement"] },
              { title: "Sécurité", items: ["Pays globalement sûr", "Vigilance dans les marchés", "Respecter les coutumes locales"] },
              { title: "Transport", items: ["Taxi-moto (zémidjan)", "Taxi collectifs", "Location de véhicule disponible"] },
            ].map((c) => (
              <div key={c.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3">{c.title}</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  {c.items.map((i) => <li key={i}>• {i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
