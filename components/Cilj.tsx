import React from 'react'
import { Card, CardTitle, CardHeader, CardContent } from './ui/card'

export default function Cilj() {
  return (
          <section className="py-16 px-4 bg-gradient-to-br from-white to-[#f1f1f1]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
           
            <h2 className="">Naš cilj</h2>
            <p className="text-gray-700 leading-relaxed">
                  Naš cilj je da polaznicima učenje kroz neformalno obrazovanje učinimo posebnim iskustvom,
                  oslobođenim od bilo kakvog opterećenja. Mišljenja smo da samo na taj način rezultati mogu biti
                  konkretni i odgovarajući zahtevima globalnog tržišta rada, kao i lokalnoj zajednici.
                </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Unapređenje svesti o potrebi permanentnog i doživotnog obrazovanja;",
              "Razvoj interkulturalne svesti i dijaloga;",
              "Promovisanje humanih vrednosti neophodnih za zdrav život u zajednici;",
              "Razvoj osetljivosti na pitanja ravnopravnosti i prevazilaženja predrasuda;",
              "Promovisanje etičkih standarda ponašanja kroz svakodnevnu komunikaciju;",
              "Korišćenje Interneta u obrazovne svrhe."
            ].map((cilj, index) => (
                              <div   key={index} className="p-3 rounded-lg text-center bg-white text-primary border border-primary shadow-lg hover:shadow-2xl transition-shadow duration-300">
               
                    <p className="">
                      {cilj}
                    </p>
            
                </div>
            ))}
          </div>
        </div>
      </section>
  )
}