import Link from "next/link";
import { Heart, BookOpen, Briefcase, Users, Activity, ArrowRight, MapPin, Phone, Mail } from "lucide-react";

const objectives = [
  {
    icon: Heart,
    title: "Droits des personnes vulnérables",
    desc: "Promotion et protection des droits des personnes vulnérables au sein des communautés.",
  },
  {
    icon: BookOpen,
    title: "Éducation & Culture",
    desc: "Accès à l'éducation et aux opportunités culturelles pour les enfants marginalisés.",
  },
  {
    icon: Briefcase,
    title: "Emploi des jeunes",
    desc: "Soutien à l'emploi des jeunes et à l'entrepreneuriat pour un avenir meilleur.",
  },
  {
    icon: Users,
    title: "Insertion socio-économique",
    desc: "Faciliter l'intégration socio-économique et professionnelle des populations défavorisées.",
  },
  {
    icon: Activity,
    title: "Santé publique",
    desc: "Sensibilisation sur la prévention du cancer, la planification familiale et la mortalité infantile.",
  },
];

const actions = [
  {
    title: "Environnement",
    desc: "Projets de sensibilisation et de préservation de l'environnement naturel togolais.",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Santé",
    desc: "Campagnes de prévention et accès aux soins pour les populations éloignées.",
    color: "bg-red-100 text-red-700",
  },
  {
    title: "Éducation",
    desc: "Soutien scolaire, fournitures et infrastructures pour les enfants défavorisés.",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Développement économique",
    desc: "Microfinance, formation professionnelle et insertion des jeunes sur le marché du travail.",
    color: "bg-blue-100 text-blue-700",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-yellow-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-red-400 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest bg-yellow-400 text-yellow-900 rounded-full">
              Association de Solidarité Internationale
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6">
              Ensemble Luttons Pour{" "}
              <span className="text-yellow-400">Le Bien-être</span>
            </h1>
            <p className="text-lg text-green-100 leading-relaxed mb-8 max-w-2xl">
              ASB-TOGO est une ONG à but non lucratif qui œuvre pour l&apos;amélioration des conditions
              socio-économiques, culturelles et environnementales des populations vulnérables au Togo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/nos-actions"
                className="px-6 py-3 bg-yellow-400 text-yellow-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors flex items-center gap-2"
              >
                Nos Actions <ArrowRight size={18} />
              </Link>
              <Link
                href="/a-propos"
                className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-green-800 transition-colors"
              >
                Qui sommes-nous
              </Link>
            </div>
          </div>
        </div>
        <div className="flex h-2">
          <div className="flex-1 bg-green-500" />
          <div className="flex-1 bg-yellow-400" />
          <div className="flex-1 bg-red-600" />
          <div className="flex-1 bg-green-500" />
          <div className="flex-1 bg-yellow-400" />
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">Qui sommes-nous</span>
              <h2 className="mt-2 text-3xl lg:text-4xl font-black text-gray-900 mb-6">
                Une association à taille humaine
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                ASB-TOGO est une ONG internationale à but non lucratif régie par la loi du 1er juillet 1901
                et officiellement enregistrée auprès du Ministère de l&apos;Administration Territoriale du Togo.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Notre taille humaine nous permet de mettre en œuvre et de suivre de près nos actions,
                en restant au plus proche des réalités du terrain. Ensemble, nous pouvons accomplir
                de belles choses.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Nous développons des projets humanitaires dans les domaines de l&apos;environnement,
                de la santé, de l&apos;éducation et du développement économique.
              </p>
              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors"
              >
                En savoir plus <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-700 rounded-2xl p-6 text-white">
                <div className="text-4xl font-black mb-2">+12</div>
                <div className="text-green-200 text-sm">Ans d&apos;expérience</div>
              </div>
              <div className="bg-yellow-400 rounded-2xl p-6 text-yellow-900">
                <div className="text-4xl font-black mb-2">5</div>
                <div className="text-yellow-800 text-sm">Domaines d&apos;action</div>
              </div>
              <div className="bg-red-600 rounded-2xl p-6 text-white">
                <div className="text-4xl font-black mb-2">100%</div>
                <div className="text-red-200 text-sm">À but non lucratif</div>
              </div>
              <div className="bg-gray-900 rounded-2xl p-6 text-white">
                <div className="text-4xl font-black mb-2">Lomé</div>
                <div className="text-gray-400 text-sm">Togo, Afrique de l&apos;Ouest</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">Nos objectifs</span>
            <h2 className="mt-2 text-3xl lg:text-4xl font-black text-gray-900">
              Ce pour quoi nous nous battons
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {objectives.map((obj) => {
              const Icon = obj.icon;
              return (
                <div key={obj.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="text-green-700" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{obj.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{obj.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Actions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-700 font-semibold text-sm uppercase tracking-wider">Nos actions</span>
            <h2 className="mt-2 text-3xl lg:text-4xl font-black text-gray-900">
              Nos domaines d&apos;intervention
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {actions.map((a) => (
              <div key={a.title} className="rounded-2xl p-6 border border-gray-100 hover:border-green-200 transition-colors">
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${a.color}`}>
                  {a.title}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/nos-actions"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-700 text-white font-semibold rounded-lg hover:bg-green-800 transition-colors"
            >
              Voir toutes nos actions <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-green-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black mb-4">Rejoignez le mouvement</h2>
          <p className="text-green-100 mb-8 text-lg">
            Vous souhaitez faire un stage, du bénévolat ou simplement nous soutenir ?
            Nous serions ravis de vous accueillir au sein de notre équipe.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/stages-benevoles"
              className="px-6 py-3 bg-yellow-400 text-yellow-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Stages & Bénévolat
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-green-800 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <MapPin className="text-green-500" size={24} />
              <p className="text-sm text-gray-300">Adidogomé (Klémé), Lomé, Togo</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Phone className="text-green-500" size={24} />
              <a href="tel:+22899676266" className="text-sm text-gray-300 hover:text-white transition-colors">
                +228 99 67 62 66
              </a>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Mail className="text-green-500" size={24} />
              <a href="mailto:asbtogo@gmail.com" className="text-sm text-gray-300 hover:text-white transition-colors">
                asbtogo@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
