import React, { useEffect, useState } from "react";
import { MdShoppingCart, MdVerified } from "react-icons/md";

const OfferSection = () => {
    const [timeLeft, setTimeLeft] = useState(86400); // 24 hours in seconds

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    return (
        <section className="py-12 md:py-16 gradient-bg text-white" id="offer">
            <div className="max-w-5xl mx-auto px-4">

                <div className="relative">

                    <div className="offer-badge text-xs md:text-sm">
                        Limited Time Offer
                    </div>

                    <div className="bg-white text-[#111827] rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl">

                        {/* TOP SECTION */}
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">

                            {/* LEFT */}
                            <div className="text-center md:text-left">
                                <h3 className="text-base md:text-lg text-gray-600">
                                    Actual Price:
                                </h3>
                                <h4 className="text-3xl md:text-4xl font-bold line-through text-red-500">
                                    ₹1,999
                                </h4>
                            </div>

                            {/* TIMER */}
                            <div className="bg-[#0092B9]/10 rounded-2xl p-4 w-full md:w-auto">
                                <h3 className="text-center font-bold mb-3 text-[#111827]">
                                    Offer Ends In:
                                </h3>

                                <div className="flex justify-center gap-3">
                                    {[hours, minutes, seconds].map((val, i) => (
                                        <div
                                            key={i}
                                            className="bg-white text-[#0092B9] rounded-xl px-4 py-2 flex items-center gap-1 font-bold"
                                        >
                                            <span className="text-xl md:text-2xl">
                                                {String(val).padStart(2, "0")}
                                            </span>
                                            <span className="text-sm">
                                                {["H", "M", "S"][i]}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="text-center md:text-right">
                                <h3 className="text-3xl md:text-5xl font-bold text-[#0092B9]">
                                    ₹799
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base">
                                    Today Offer Price
                                </p>
                                <p className="text-gray-600 text-sm">
                                    One-Time Payment
                                </p>
                            </div>

                        </div>

                        {/* FEATURES */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">

                            <div className="bg-[#0092B9]/10 rounded-2xl p-5 text-center">
                                <p className="font-bold text-[#111827]">
                                    Limited Time Offer
                                </p>
                                <p className="text-gray-600 text-sm">
                                    24 Hours Left
                                </p>
                            </div>

                            <div className="bg-[#0092B9]/10 rounded-2xl p-5 text-center">
                                <p className="font-bold text-[#111827]">
                                    Lifetime Access
                                </p>
                                <p className="text-gray-600 text-sm">
                                    Forever Access
                                </p>
                            </div>

                            <div className="bg-[#0092B9]/10 rounded-2xl p-5 text-center">
                                <p className="font-bold text-[#111827]">
                                    Future Updates Free
                                </p>
                                <p className="text-gray-600 text-sm">
                                    All New Content Free
                                </p>
                            </div>

                        </div>

                        {/* CTA */}
                        <a
                            href="#"
                            className="w-full flex items-center justify-center gap-3 bg-[#0092B9] text-white font-bold py-4 rounded-xl hover:scale-105 transition"
                        >
                            <MdShoppingCart size={22} />
                            Abhi Course Join Karein – ₹799
                        </a>

                        {/* FOOT TEXT */}
                        <p className="text-center mt-6 text-gray-600 text-sm flex items-center justify-center gap-2">
                            <MdVerified className="text-[#0092B9]" />
                            Secure payment • 30-day money-back guarantee • Lifetime access
                        </p>

                    </div>
                </div>

                {/* BOTTOM */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 text-center">

                    <div className="bg-white/20 rounded-2xl p-5">
                        <p className="font-bold">100% Secure Payment</p>
                    </div>

                    <div className="bg-white/20 rounded-2xl p-5">
                        <p className="font-bold">24/7 Support Available</p>
                    </div>

                    <div className="bg-white/20 rounded-2xl p-5">
                        <p className="font-bold">30+ Video Lessons</p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default OfferSection;