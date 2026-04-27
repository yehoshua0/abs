import Link from "next/link";
import { GraduationCap, Globe, Clock, CheckCircle } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "Stage académique",
    duration: "1 à 6 mois",
    desc: "Idéal pour les étudiants souhaitant valider un stage dans le cadre de leur cursus. Vous travaillerez directement sur nos projets de terrain.",
    tasks: [
      "Gestion de projets humanitaires",
      "Animation d'ateliers de sensibilisation",
      "Suivi des bénéficiaires",
      "Rédaction de rapports d'activité",
    ],
  },
  {
    icon: Globe,
    title: "Bénévolat international",
    duration: "2 semaines à 3 mois",
    desc: "Venez apporter votre soutien bénévole à nos équipes locales. Une expérience humaine et professionnelle unique au cœur de l'Afrique de l'Ouest.",
    tasks: [
      "Soutien scolaire aux enfants",
      "Appui aux campagnes de santé",
      "Participation aux actions environnementales",
      "Échanges culturels avec les communautés",
    ],
  },
];

const requirements = [
  "Être âgé(e) d'au moins 18 ans",
  "Parler français (niveau intermédiaire minimum)",
  "Faire preuve d'ouverture d'esprit et d'adaptabilité",
  "Être motivé(e) par les enjeux du développement international",
  "Être en bonne santé et à jour des vaccinations recommandées",
];

export default function StagesBenevoles() {
  return (
    <>
      <section className="bg-gradient-to-r from-green-800 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Rejoindre l'équipe</span>
          <h1 className="mt-2 text-4xl font-black">Stages & Bénévolat</h1>
          <p className="mt-4 text-green-100 max-w-2xl">
            Rejoignez ASB-TOGO pour une expérience humaine et professionnelle inoubliable au service des communautés togolaises.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-gray-900">Nos programmes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="border border-gray-200 rounded-2xl p-8 hover:border-green-300 hover:shadow-md transition-all">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Icon className="text-green-700" size={24} />
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900">{p.title}</h3>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock size={14} />
                        <span>{p.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-5 leading-relaxed">{p.desc}</p>
                  <ul className="space-y-2">
                    {p.tasks.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Conditions requises</h2>
          <div className="space-y-3">
            {requirements.map((r) => (
              <div key={r} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                <CheckCircle size={18} className="text-green-600 mt-0.5 shrink-0" />
                <p className="text-gray-700">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">Prêt(e) à vous engager ?</h2>
          <p className="text-green-100 mb-8">
            Contactez-nous pour discuter de votre projet et entamer les démarches d&apos;inscription.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-yellow-400 text-yellow-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
