import { CheckCircle, AlertTriangle, Info } from "lucide-react";

const checklist = [
  {
    category: "Documents obligatoires",
    icon: CheckCircle,
    color: "text-green-600",
    bg: "bg-green-50",
    items: [
      "Passeport valide (6 mois minimum après la date de retour)",
      "Visa Togo (à obtenir à l'ambassade ou à l'arrivée)",
      "Certificat de vaccination contre la fièvre jaune (OBLIGATOIRE)",
      "Assurance voyage avec rapatriement médical",
      "Photocopies de tous vos documents importants",
    ],
  },
  {
    category: "Santé & Médicaments",
    icon: AlertTriangle,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    items: [
      "Traitement antipaludéen (Malarone, Doxycycline…)",
      "Vaccins recommandés : hépatites A et B, typhoïde, méningite",
      "Trousse de premiers secours complète",
      "Crème solaire haute protection",
      "Répulsif anti-moustiques (DEET 30% minimum)",
      "Médicaments contre les diarrhées / maux d'estomac",
    ],
  },
  {
    category: "Équipement & Vêtements",
    icon: Info,
    color: "text-blue-600",
    bg: "bg-blue-50",
    items: [
      "Vêtements légers et respirants (coton de préférence)",
      "Vêtements couvrants pour les soirées (moustiques)",
      "Chaussures fermées solides et sandales",
      "Imperméable ou poncho (saison des pluies)",
      "Lampe frontale avec piles de rechange",
      "Adaptateur électrique (prises rondes type E/F)",
    ],
  },
];

const budget = [
  { poste: "Hébergement (par nuit)", estimation: "5 000 – 25 000 XOF" },
  { poste: "Repas (par jour)", estimation: "2 000 – 8 000 XOF" },
  { poste: "Transport local (par jour)", estimation: "1 000 – 3 000 XOF" },
  { poste: "Eau potable (par semaine)", estimation: "1 000 – 2 000 XOF" },
];

export default function PreparationVoyage() {
  return (
    <>
      <section className="bg-gradient-to-r from-green-800 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Avant de partir</span>
          <h1 className="mt-2 text-4xl font-black">Préparation au Voyage</h1>
          <p className="mt-4 text-green-100 max-w-2xl">
            Tout ce qu&apos;il faut savoir et préparer avant de rejoindre nos équipes au Togo.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {checklist.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.category} className={`rounded-2xl p-8 ${c.bg}`}>
                  <div className="flex items-center gap-3 mb-5">
                    <Icon className={c.color} size={24} />
                    <h2 className="text-xl font-black text-gray-900">{c.category}</h2>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${c.color} bg-current`} />
                        {item}
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">Budget indicatif</h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            1 EUR ≈ 655 XOF (Franc CFA)
          </p>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-green-700 text-white text-sm">
                <tr>
                  <th className="text-left px-6 py-3 font-semibold">Poste de dépense</th>
                  <th className="text-right px-6 py-3 font-semibold">Estimation (XOF)</th>
                </tr>
              </thead>
              <tbody>
                {budget.map((b, i) => (
                  <tr key={b.poste} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 text-gray-700 text-sm">{b.poste}</td>
                    <td className="px-6 py-4 text-right font-semibold text-green-700 text-sm">{b.estimation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 bg-yellow-50 border-t border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-4">
          <AlertTriangle className="text-yellow-600 shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Important</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Cette liste n&apos;est pas exhaustive. Consultez votre médecin ou un centre de vaccination
              international avant votre départ. Pour toute question spécifique sur votre mission,
              n&apos;hésitez pas à contacter notre équipe qui se fera un plaisir de vous conseiller.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
