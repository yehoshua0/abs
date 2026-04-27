import { CheckCircle } from "lucide-react";

const values = [
  "Solidarité internationale et coopération entre les peuples",
  "Respect de la dignité humaine et des droits fondamentaux",
  "Transparence dans la gestion des projets et des fonds",
  "Proximité avec les communautés locales",
  "Innovation sociale au service du développement durable",
];

export default function APropos() {
  return (
    <>
      {/* Page header */}
      <section className="bg-gradient-to-r from-green-800 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">À propos</span>
          <h1 className="mt-2 text-4xl font-black">Qui sommes-nous ?</h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-6">Notre association</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">ASB-TOGO</strong> (Association de Solidarité
                  Internationale) est une ONG internationale à but non lucratif, régie par la loi
                  française du 1er juillet 1901 (Loi n° 40-484) et officiellement enregistrée auprès
                  du Ministère de l&apos;Administration Territoriale du Togo.
                </p>
                <p>
                  Fondée sur des valeurs de solidarité et d&apos;engagement, notre association œuvre
                  pour l&apos;amélioration des conditions socio-économiques, culturelles et
                  environnementales des populations les plus vulnérables au Togo.
                </p>
                <p>
                  Notre force réside dans notre taille humaine : elle nous permet de mettre en œuvre
                  nos actions et d&apos;en assurer le suivi au plus près des réalités de terrain.
                  Cette proximité est la clé de notre efficacité et de notre impact.
                </p>
                <p>
                  Nous croyons fermement qu&apos;<strong className="text-green-700">ensemble, nous
                  pouvons accomplir de belles choses</strong>. C&apos;est ce qui anime chacun de nos
                  membres, bénévoles et partenaires au quotidien.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-lg mb-3">Notre mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  Permettre aux enfants défavorisés d&apos;accéder à des opportunités éducatives et
                  culturelles, tout en développant des projets humanitaires dans les domaines de
                  l&apos;environnement, de la santé, de l&apos;éducation et du développement économique.
                </p>
              </div>

              <div className="bg-yellow-50 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-lg mb-3">Notre vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Un Togo où chaque individu, quelle que soit son origine, bénéficie des droits
                  fondamentaux, d&apos;un accès à l&apos;éducation, à la santé, et à des opportunités
                  économiques pour construire un avenir digne.
                </p>
              </div>

              <div className="bg-red-50 rounded-2xl p-6">
                <h3 className="font-black text-gray-900 text-lg mb-3">Statut juridique</h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• ONG internationale à but non lucratif</li>
                  <li>• Loi française du 1er juillet 1901 (n° 40-484)</li>
                  <li>• Enregistrée au Ministère de l&apos;Administration Territoriale du Togo</li>
                  <li>• Siège social : Adidogomé (Klémé), Lomé, Togo</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">Nos valeurs</span>
            <h2 className="mt-2 text-3xl font-black text-gray-900">Ce qui nous guide</h2>
          </div>
          <div className="space-y-4">
            {values.map((v) => (
              <div key={v} className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm">
                <CheckCircle className="text-green-600 mt-0.5 shrink-0" size={20} />
                <p className="text-gray-700">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
