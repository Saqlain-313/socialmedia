import React from "react";
import {
  MdManageAccounts,
  MdCampaign,
  MdBusinessCenter,
  MdPsychology,
  MdGroup,
  MdSmartToy,
} from "react-icons/md";

const CourseModules = () => {
  return (
    <section className="py-8 md:py-12 bg-[#FFFFFF]">
      <div className="responsive-container mx-auto">

        {/* Course Modules */}
        <div
          className="bg-white rounded-3xl p-6 md:p-8 card-shadow mobile-padding"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3 className="responsive-heading-2 font-bold text-center mb-6 md:mb-8 text-[#111827]">
            What Will You Learn?
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mobile-grid-gap">

            {/* Social Media Handling */}
            <div className="bg-white rounded-2xl p-4 md:p-6 text-center card-shadow hover:scale-105 transition duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-xl bg-[#0092B9] flex items-center justify-center">
                <MdManageAccounts className="text-white text-xl md:text-2xl" />
              </div>
              <h4 className="font-bold text-sm md:text-base text-[#111827]">
                Social Media Handling
              </h4>
            </div>

            {/* Social Media Marketing */}
            <div className="bg-white rounded-2xl p-4 md:p-6 text-center card-shadow hover:scale-105 transition duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-xl bg-[#0092B9] flex items-center justify-center">
                <MdCampaign className="text-white text-xl md:text-2xl" />
              </div>
              <h4 className="font-bold text-sm md:text-base text-[#111827]">
                Social Media Marketing
              </h4>
            </div>

            {/* Business Building */}
            <div className="bg-white rounded-2xl p-4 md:p-6 text-center card-shadow hover:scale-105 transition duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-xl bg-[#0092B9] flex items-center justify-center">
                <MdBusinessCenter className="text-white text-xl md:text-2xl" />
              </div>
              <h4 className="font-bold text-sm md:text-base text-[#111827]">
                Business Building with Zero Investment
              </h4>
            </div>

            {/* Small Business Mindset */}
            <div className="bg-white rounded-2xl p-4 md:p-6 text-center card-shadow hover:scale-105 transition duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-xl bg-[#0092B9] flex items-center justify-center">
                <MdPsychology className="text-white text-xl md:text-2xl" />
              </div>
              <h4 className="font-bold text-sm md:text-base text-[#111827]">
                Small Business Mindset
              </h4>
            </div>

            {/* Client Approach */}
            <div className="bg-white rounded-2xl p-4 md:p-6 text-center card-shadow hover:scale-105 transition duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-xl bg-[#0092B9] flex items-center justify-center">
                <MdGroup className="text-white text-xl md:text-2xl" />
              </div>
              <h4 className="font-bold text-sm md:text-base text-[#111827]">
                Client Approach
              </h4>
            </div>

            {/* AI Tools */}
            <div className="bg-white rounded-2xl p-4 md:p-6 text-center card-shadow hover:scale-105 transition duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-xl bg-[#0092B9] flex items-center justify-center">
                <MdSmartToy className="text-white text-xl md:text-2xl" />
              </div>
              <h4 className="font-bold text-sm md:text-base text-[#111827]">
                AI Tools: ChatGPT, Gemini, Canva
              </h4>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CourseModules;