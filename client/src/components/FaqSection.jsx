import React, { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Kya beginners ke liye hai?",
      answer:
        "Haan, bilkul beginner friendly hai. Zero experience wale bhi start kar sakte hain. Course shuru se sikhaata hai basic se advanced tak.",
      icon: "check_circle",
    },
    {
      question: "Laptop zaroori hai?",
      answer:
        "Nahi. Sirf smartphone aur internet kaafi hai. Pure course me hum smartphone se hi kaam karna sikhaate hain.",
      icon: "cancel",
    },
    {
      question: "Kitne din me result milega?",
      answer:
        "1 month me result mil sakta hai, agar aap seriously kaam karte ho. Kuch students ne 2 weeks me bhi first client le liya tha.",
      icon: "check_circle",
    },
    {
      question: "Kya English aani zaroori hai?",
      answer:
        "Nahi. Simple Hindi me kaam ho jayega. Course bhi Hindi me hai aur aap local businesses se Hindi me hi baat karenge.",
      icon: "cancel",
    },
    {
      question: "Kya mujhe investment karna padega?",
      answer:
        "Nahi. Is method me 1 rupya bhi invest karna zaroori nahi. Sab tools free hain aur aap zero investment se start kar sakte hain.",
      icon: "cancel",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 md:py-16 bg-white">
      <div className="responsive-container mx-auto">

        {/* Heading */}
        <div
          className="text-center mb-10 md:mb-12"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2 className="responsive-heading-1 font-bold mb-3 md:mb-4 text-[#111827]">
            Aksar Puche Jane Wale Sawal (FAQ)
          </h2>
          <div className="section-divider"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 md:space-y-6">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="faq-question w-full p-4 md:p-6 text-left flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition tap-target"
                >
                  <span className="text-base md:text-xl font-medium text-overflow-fix text-[#111827]">
                    {faq.question}
                  </span>
                  <i className="material-icons text-[#0092B9]">
                    expand_more
                  </i>
                </button>

                <div
                  className={`faq-answer p-4 md:p-6 ${
                    openIndex === index ? "block" : "hidden"
                  }`}
                >
                  <div className="flex items-start">
                    <i className="material-icons text-[#0092B9] mr-3 mt-1">
                      {faq.icon}
                    </i>
                    <p className="text-[#111827] text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;