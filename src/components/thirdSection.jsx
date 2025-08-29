"use client";
import { useState, useEffect, useRef } from "react";
import { FaLinkedin } from "react-icons/fa";

const TestimonialCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    const testimonialsData = [
      {
        id: 1,
        name: "Ira Bhatnagar",
        role: "IT Student",
        text: "Being here has truly changed the way I learn. I am learning Full Stack Development, and the mentors make each concept simple and practical. The environment is positive and friendly, which makes learning enjoyable.",
        image: "/ira.jpg",
        linkedin: "https://www.linkedin.com/in/ira-bhatnagar-b61790345/",
      },
      {
        id: 2,
        name: "Anchal Dubey",
        role: "IT Student",
        text: "Joining here has been one of the best decisions for my learning journey. I am building strong skills in Full Stack Development, and the teaching style makes even complex topics very easy to understand.",
        image: "/aanchal.png",
        linkedin: "https://www.linkedin.com/in/anchal-dubey-3a75a7373/",
      },
      {
        id: 3,
        name: "Purva Taywade",
        role: "IT Student",
        text: "Learning here has been an amazing experience. The mentors explain every concept with real-world examples, which makes Full Stack Development much easier to grasp. What I like the most is the personal attention and constant support.",
        image: "/placeholder.svg?height=60&width=60",
        linkedin: "https://www.linkedin.com/in/purva-taywade-06303b2b5/",
      },
      {
        id: 4,
        name: "Rupesh Mewada",
        role: "Software Developer",
        text: "Becoming a part of this place has really boosted my learning experience. I'm gaining solid knowledge in Full Stack Development, and the way concepts are explained makes everything clear and practical to apply.",
        image: "/rupesh.jpeg",
        linkedin: "https://www.linkedin.com/in/rupesh-mewada/",
      },
      {
        id: 5,
        name: "Rishi Choubey",
        role: "Frontend Developer",
        text: "Learning here has been an amazing experience. Full Stack Development feels much more approachable, and the step-by-step guidance makes complex concepts simple and easy to apply in real projects.",
        image: "/rishi.jpeg",
        linkedin: "https://www.linkedin.com/in/rishi-choubey-15874a166/",
      },
    ];

    setTestimonials(testimonialsData);
  }, []);

  useEffect(() => {
    if (testimonials.length === 0 || isAutoScrollPaused) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials.length, isAutoScrollPaused]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    // Pause auto-scroll for 8 seconds when user manually navigates
    setIsAutoScrollPaused(true);
    setTimeout(() => {
      setIsAutoScrollPaused(false);
    }, 8000);
  };

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsAutoScrollPaused(true);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
    setIsAutoScrollPaused(false);
  };

  const handleMouseEnter = () => {
    setIsAutoScrollPaused(true);
  };

  const handleMouseLeave = () => {
    if (!selectedTestimonial) {
      setIsAutoScrollPaused(false);
    }
  };

  if (testimonials.length === 0) {
    return (
      <div className="text-center py-16 text-lg text-gray-500">
        Loading testimonials...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-16 text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-3">
        Our Happy Students
      </h2>
      <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
        Words of praise by our valued students
      </p>

      {/* Carousel container */}
      <div
        className="relative flex items-center justify-center mb-10 h-[400px]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
          {testimonials.map((testimonial, index) => {
            const baseClasses =
              "absolute bg-white rounded-2xl p-6 shadow-lg transition-all duration-500 ease-in-out opacity-0 transform scale-75 w-72 h-[280px] flex flex-col justify-between";
            const activeClasses =
              "opacity-100 scale-110 z-30 w-[350px] h-[320px] shadow-2xl";
            const prevClasses = "opacity-70 -translate-x-52 scale-90 z-20";
            const nextClasses = "opacity-70 translate-x-52 scale-90 z-20";
            const hiddenClasses = "opacity-0 scale-50 z-10";

            let appliedClasses = baseClasses;
            if (index === currentIndex) {
              appliedClasses += " " + activeClasses;
            } else if (
              index ===
              (currentIndex - 1 + testimonials.length) % testimonials.length
            ) {
              appliedClasses += " " + prevClasses;
            } else if (index === (currentIndex + 1) % testimonials.length) {
              appliedClasses += " " + nextClasses;
            } else {
              appliedClasses += " " + hiddenClasses;
            }

            return (
              <div key={testimonial.id} className={appliedClasses}>
                <div className="flex-grow overflow-hidden">
                  <div className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                    <p className="line-clamp-4">{testimonial.text}</p>
                    {testimonial.text.length > 150 && (
                      <button
                        onClick={() => openModal(testimonial)}
                        className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 underline"
                      >
                        Read more
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className={`rounded-full object-cover border-4 border-gray-100 ${
                      index === currentIndex ? "w-16 h-16" : "w-12 h-12"
                    }`}
                  />
                  <div className="text-left">
                    <h4
                      className={`font-semibold text-gray-900 ${
                        index === currentIndex ? "text-lg" : "text-base"
                      }`}
                    >
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                    {testimonial.linkedin && (
                      <a
                        href={testimonial.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-1 mt-1 text-sm"
                      >
                        <FaLinkedin /> LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`relative w-3 h-3 rounded-full border-2 transition-all ${
              currentIndex === index
                ? "border-blue-500 bg-blue-500"
                : "border-gray-300 bg-transparent"
            }`}
          >
            {currentIndex === index && (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-white"></span>
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Modal for full testimonial display */}
      {selectedTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Full Testimonial
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                aria-label="Close modal"
              >
                ×
              </button>
            </div>

            <div className="text-center">
              <img
                src={selectedTestimonial.image || "/placeholder.svg"}
                alt={selectedTestimonial.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-gray-100 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-900 mb-1">
                {selectedTestimonial.name}
              </h4>
              <p className="text-gray-500 mb-2">{selectedTestimonial.role}</p>
              {selectedTestimonial.linkedin && (
                <a
                  href={selectedTestimonial.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 inline-flex items-center gap-2 mb-6"
                >
                  <FaLinkedin /> View LinkedIn Profile
                </a>
              )}
            </div>

            <div className="border-t pt-6">
              <p className="text-gray-700 text-lg leading-relaxed italic text-left">
                "{selectedTestimonial.text}"
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;
