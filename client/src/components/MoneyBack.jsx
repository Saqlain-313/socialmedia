import React from "react";

const GuaranteeSection = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-green-600 to-emerald-700 text-white">
      <div className="responsive-container mx-auto">
        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-block bg-white text-green-700 p-3 md:p-4 rounded-full mb-6 md:mb-8">
            <i className="material-icons text-4xl md:text-5xl">
              verified_user
            </i>
          </div>

          <h2 className="responsive-heading-1 font-bold mb-6 md:mb-8">
            30-Day 100% Money Back Guarantee
          </h2>

          <p className="text-lg md:text-xl mb-8 md:mb-10 max-w-3xl mx-auto mobile-text-center">
            Risk-free investment. Agar 30 days me aapko course se value nahi milti,
            to hum aapka paisa wapas kar denge. No questions asked.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mobile-grid-gap">

            <div className="bg-white bg-opacity-20 p-6 md:p-8 rounded-3xl backdrop-blur-sm mobile-padding">
              <i className="material-icons text-4xl md:text-5xl mb-4 md:mb-6">
                thumb_up
              </i>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                No Risk
              </h3>
              <p className="text-sm md:text-base">
                Try karein risk-free, paisa vasool guarantee ke saath
              </p>
            </div>

            <div className="bg-white bg-opacity-20 p-6 md:p-8 rounded-3xl backdrop-blur-sm mobile-padding">
              <i className="material-icons text-4xl md:text-5xl mb-4 md:mb-6">
                assignment_return
              </i>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Easy Refund
              </h3>
              <p className="text-sm md:text-base">
                Simple process, 24 hours me refund
              </p>
            </div>

            <div className="bg-white bg-opacity-20 p-6 md:p-8 rounded-3xl backdrop-blur-sm mobile-padding">
              <i className="material-icons text-4xl md:text-5xl mb-4 md:mb-6">
                sentiment_satisfied
              </i>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
                Satisfaction Guaranteed
              </h3>
              <p className="text-sm md:text-base">
                15,00+ students satisfied, 98% positive reviews
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;