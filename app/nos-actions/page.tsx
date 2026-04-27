import { Leaf, Heart, BookOpen, TrendingUp } from "lucide-react";

const domains = [
  {
    icon: Leaf,
    title: "Environnement",
    color: "green",
    bg: "bg-green-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    badge: "bg-green-100 text-green-700",
    actions: [
      "Sensibilisation des communautés aux enjeux environnementaux",
      "Campagnes de reboisement et de plantation d'arbres",
      "Gestion des déchets et promotion du recyclage",
      "Éducation environnementale dans les écoles",
    ],
  },
  {
    icon: Heart,
    title: "Santé",
    color: "red",
    bg: "bg-red-50",
    iconBg: "bg-red-100",
    iconColor: "text-red-700",
    badge: "bg-red-100 text-red-700",
    actions: [
      "Campagnes de prévention contre le cancer",
      "Sensibilisation à la planification familiale",
      "Lutte contre la mortalité infantile",
      "Accès aux soins pour les populations rurales",
    ],
  },
  {
    icon: BookOpen,
    title: "Éducation",
    color: "yellow",
    bg: "bg-yellow-50",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-700",
    badge: "bg-yellow-100 text-yellow-700",
    actions: [
      "Distribution de fournitures scolaires",
      "Programmes de soutien scolaire",
      "Construction et réhabilitation d'infrastructures éducatives",
      "Bourses et soutien aux enfants défavorisés",
    ],
  },
  {
    icon: TrendingUp,
    title: "Développement économique",
    color: "blue",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    badge: "bg-blue-100 text-blue-700",
    actions: [
      "Formation professionnelle des jeunes",
      "Accompagnement à la création d'entreprise",
      "Microfinance et accès au crédit",
      "Insertion socio-professionnelle des femmes",
    ],
  },
];

export default function NosActions() {
  return (
    <>
      <section className="bg-gradient-to-r from-green-800 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Nos activités</span>
          <h1 className="mt-2 text-4xl font-black">Nos Actions</h1>
          <p className="mt-4 text-green-100 max-w-2xl">
            ASB-TOGO intervient dans quatre domaines clés pour améliorer les conditions de vie des populations
            vulnérables au Togo.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {domains.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className={`rounded-2xl p-8 ${d.bg}`}>
                  <div className={`w-14 h-14 ${d.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                    <Icon className={d.iconColor} size={28} />
                  </div>
                  <h2 className="text-xl font-black text-gray-900 mb-4">{d.title}</h2>
                  <ul className="space-y-3">
                    {d.actions.map((a) => (
                      <li key={a} className="flex items-start gap-3">
                        <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${d.iconBg} ${d.iconColor} border-2 border-current`} />
                        <span className="text-gray-700 text-sm leading-relaxed">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Vous souhaitez participer ?</h2>
          <p className="text-gray-600 mb-6">
            Rejoignez-nous en tant que bénévole, stagiaire ou partenaire et contribuez à nos actions sur le terrain.
          </p>
          <a
            href="/stages-benevoles"
            className="inline-block px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors"
          >
            Stages & Bénévolat
          </a>
        </div>
      </section>
    </>
  );
}
