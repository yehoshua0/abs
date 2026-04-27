"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ nom: "", email: "", sujet: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to a backend or email service
    setSent(true);
  };

  return (
    <>
      <section className="bg-gradient-to-r from-green-800 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">Nous joindre</span>
          <h1 className="mt-2 text-4xl font-black">Contact</h1>
          <p className="mt-4 text-green-100 max-w-2xl">
            Une question, un projet, une candidature ? Notre équipe est là pour vous répondre.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-8">Nos coordonnées</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-green-700" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Adresse</div>
                    <p className="text-gray-600 text-sm mt-1">Adidogomé (Klémé)<br />Lomé, Togo</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-green-700" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Téléphone</div>
                    <a href="tel:+22899676266" className="text-green-700 text-sm hover:underline block mt-1">
                      +228 99 67 62 66
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <MessageCircle className="text-green-700" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <a
                      href="https://wa.me/22870161930"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-700 text-sm hover:underline block mt-1"
                    >
                      +228 70 16 19 30
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-green-700" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <a href="mailto:asbtogo@gmail.com" className="text-green-700 text-sm hover:underline block mt-1">
                      asbtogo@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="font-semibold text-gray-900 mb-4">Réseaux sociaux</div>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/asb_togo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    @asb_togo
                  </a>
                  <a
                    href="https://www.facebook.com/ASB-TOGO-associations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    Facebook
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-8 bg-gray-100 rounded-2xl overflow-hidden h-48 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={32} className="mx-auto mb-2 text-gray-400" />
                  <p className="text-sm">Adidogomé (Klémé), Lomé, Togo</p>
                  <a
                    href="https://maps.google.com/?q=Adidogomé+Lomé+Togo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 text-xs font-medium hover:underline mt-1 inline-block"
                  >
                    Ouvrir dans Google Maps
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-8">Envoyez-nous un message</h2>

              {sent ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-green-700" size={28} />
                  </div>
                  <h3 className="font-black text-gray-900 text-xl mb-2">Message envoyé !</h3>
                  <p className="text-gray-600">
                    Merci de nous avoir contactés. Nous reviendrons vers vous dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Nom complet <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="nom"
                        name="nom"
                        type="text"
                        required
                        value={form.nom}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="sujet" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Sujet <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="sujet"
                      name="sujet"
                      required
                      value={form.sujet}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                    >
                      <option value="">Choisir un sujet…</option>
                      <option>Demande de stage</option>
                      <option>Bénévolat</option>
                      <option>Partenariat</option>
                      <option>Don / Soutien financier</option>
                      <option>Renseignements généraux</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      placeholder="Décrivez votre demande…"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-700 text-white font-bold rounded-lg hover:bg-green-800 transition-colors"
                  >
                    <Send size={18} />
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
