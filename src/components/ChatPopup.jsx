"use client";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import instituteData from "../../Details.json"; // your JSON file

const ChatPopup = ({ onClose }) => {
  const coursesData = instituteData.courses;

  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: `👋 Welcome to ${instituteData.institute.name}!\n${instituteData.institute.tagline}\n\n${instituteData.institute.about}`,
    },
    {
      from: "bot",
      text: "Tell us about yourself:",
      options: [
        "Student",
        "Fresher",
        "Experienced",
        "Career Gap",
        "Non-IT to IT",
      ],
    },
  ]);

  const [userInput, setUserInput] = useState("");
  const [showCourseSearch, setShowCourseSearch] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [awaitingStudentCourse, setAwaitingStudentCourse] = useState(false);
  const [awaitingUserDetails, setAwaitingUserDetails] = useState(false);
  const [awaitingTrackSelection, setAwaitingTrackSelection] = useState(false);
  const [awaitingMeeting, setAwaitingMeeting] = useState(false);

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
  });

  // when user selects type
  const handleUserTypeSelect = (type) => {
    setMessages((prev) => [...prev, { from: "user", text: type }]);
    if (type === "Student") {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Great! Which course/degree are you enrolled in?",
        },
      ]);
      setAwaitingStudentCourse(true);
    } else {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: `✅ Thanks for sharing! We'll note you as a ${type}.`,
        },
      ]);
    }
  };

  // student enrolled course submit
  const handleStudentCourseSubmit = () => {
    if (!userInput.trim()) return;
    setMessages((prev) => [
      ...prev,
      { from: "user", text: userInput },
      {
        from: "bot",
        text: "Awesome! Now tell me, which course are you interested in?",
      },
    ]);
    setUserInput("");
    setAwaitingStudentCourse(false);
    setShowCourseSearch(true);
  };

  // course search
  const handleUserInput = (e) => {
    setUserInput(e.target.value);
    if (showCourseSearch) {
      const filtered = coursesData.filter((course) =>
        course.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredCourses(filtered);
    }
  };

  // course selection
  const handleCourseSelect = (course) => {
    const duration =
      course.duration_months.min && course.duration_months.max
        ? `${course.duration_months.min}-${course.duration_months.max} months`
        : course.duration_months;
    const fee = course.fees.total_inr || course.fees.tuition_inr || "N/A";

    const tracks = Array.isArray(course.tracks)
      ? course.tracks.map((t) => (typeof t === "string" ? t : t.name))
      : [];

    setMessages((prev) => [
      ...prev,
      { from: "user", text: course.name },
      {
        from: "bot",
        text: `📘 Course: ${course.name}\n⏳ Duration: ${duration}\n💰 Fee: ₹${fee}`,
      },
    ]);

    setShowCourseSearch(false);
    setFilteredCourses([]);

    if (tracks.length > 0) {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Which track are you interested in?",
          options: tracks,
        },
      ]);
      setSelectedCourse(course);
      setAwaitingTrackSelection(true);
    } else {
      setAwaitingUserDetails(true);
    }
  };

  // track selection
  const handleTrackSelect = (track) => {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: track },
      {
        from: "bot",
        text: `✅ Great choice! You selected the "${track}" track under ${selectedCourse.name}.`,
      },
      { from: "bot", text: "Now please share your details below 👇" },
    ]);

    setAwaitingTrackSelection(false);
    setAwaitingUserDetails(true);
  };

  // submit full user details form
  const handleUserDetailsSubmit = (e) => {
    e.preventDefault();
    if (
      !userDetails.name ||
      !userDetails.email ||
      !userDetails.mobile ||
      !userDetails.address
    )
      return;

    setMessages((prev) => [
      ...prev,
      { from: "user", text: `Name: ${userDetails.name}` },
      { from: "user", text: `Email: ${userDetails.email}` },
      { from: "user", text: `Mobile: ${userDetails.mobile}` },
      { from: "user", text: `Address: ${userDetails.address}` },
      { from: "bot", text: "✅ Thank you! We've received your details." },
      { from: "bot", text: "📅 Now, please pick a convenient meeting slot:" },
    ]);

    setAwaitingUserDetails(false);
    setAwaitingMeeting(true);
    setUserInput("");
    console.log("Collected user details:", userDetails);
    setUserDetails({ name: "", email: "", mobile: "", address: "" });
  };

  // slot selection
  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
    setMessages((prev) => [
      ...prev,
      { from: "user", text: `Meeting at ${slot}` },
      {
        from: "bot",
        text: `✅ Your meeting is scheduled at ${slot}. You'll receive confirmation shortly.`,
      },
    ]);
    setAwaitingMeeting(false);
  };

  return ReactDOM.createPortal(
    <div className="fixed bottom-20 right-4 w-96 z-50">
      <div className="bg-white rounded-xl shadow-lg flex flex-col h-[500px] relative">
        {/* Header */}
        <div className="bg-cyan-500 text-white p-3 flex items-center rounded-t-xl">
          <div className="bg-cyan-500 text-white p-3 flex items-center gap-3 rounded-t-xl">
            {/* Logo (same as Navbar) */}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-800 text-white">
              <span className="text-[11px] font-black tracking-wide">SCS</span>
              <span className="absolute right-1.5 top-1.5 h-2 w-0.5 rounded-sm bg-green-500"></span>
            </div>

            {/* Title */}
            <div>
              <p className="font-semibold">Shiva Code Solution</p>
              <p className="text-xs opacity-80">Virtual Assistant</p>
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white text-xl font-bold hover:opacity-80"
        >
          ×
        </button>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.map((msg, index) => (
            <div key={index} className="my-3">
              <div
                className={`flex ${
                  msg.from === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                <span
                  className={`px-3 py-2 rounded-2xl inline-block whitespace-pre-wrap ${
                    msg.from === "bot"
                      ? "bg-orange-100 text-black"
                      : "bg-cyan-500 text-white"
                  }`}
                >
                  {msg.text}
                </span>
              </div>

              {msg.options && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {msg.options.map((option, i) => (
                    <button
                      key={i}
                      onClick={() =>
                        awaitingTrackSelection
                          ? handleTrackSelect(option)
                          : handleUserTypeSelect(option)
                      }
                      className="px-4 py-2 border border-orange-400 rounded-full text-gray-700 hover:bg-orange-100 hover:border-orange-500 transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Registration Form */}
          {awaitingUserDetails && (
            <div className="my-3">
              <div className="flex justify-start">
                <div className="p-5 bg-white rounded-2xl shadow-md border border-orange-200 max-w-[95%]">
                  <h3 className="text-base font-semibold text-orange-600 mb-3">
                    Please Enter Your Details
                  </h3>

                  <form
                    className="grid grid-cols-2 gap-3"
                    onSubmit={handleUserDetailsSubmit}
                  >
                    {/* Name */}
                    <div className="flex flex-col">
                      <label className="text-xs text-gray-600 mb-1">Name</label>
                      <input
                        type="text"
                        placeholder="Name"
                        value={userDetails.name}
                        onChange={(e) =>
                          setUserDetails((prev) => ({
                            ...prev,
                            name: e.target.value,
                          }))
                        }
                        required
                        className="px-2 py-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-400"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col">
                      <label className="text-xs text-gray-600 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        value={userDetails.email}
                        onChange={(e) =>
                          setUserDetails((prev) => ({
                            ...prev,
                            email: e.target.value,
                          }))
                        }
                        required
                        className="px-2 py-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-400"
                      />
                    </div>

                    {/* Mobile */}
                    <div className="flex flex-col">
                      <label className="text-xs text-gray-600 mb-1">
                        Mobile
                      </label>
                      <input
                        type="text"
                        placeholder="Mobile"
                        value={userDetails.mobile}
                        onChange={(e) =>
                          setUserDetails((prev) => ({
                            ...prev,
                            mobile: e.target.value,
                          }))
                        }
                        required
                        className="px-2 py-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-400"
                      />
                    </div>

                    {/* Address */}
                    <div className="flex flex-col">
                      <label className="text-xs text-gray-600 mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        placeholder="Address"
                        value={userDetails.address}
                        onChange={(e) =>
                          setUserDetails((prev) => ({
                            ...prev,
                            address: e.target.value,
                          }))
                        }
                        required
                        className="px-2 py-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-orange-400"
                      />
                    </div>

                    {/* Submit spans full width */}
                    <div className="col-span-2">
                      <button
                        type="submit"
                        className="w-full py-2 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          {/* Meeting Scheduler */}
          {awaitingMeeting && (
            <div className="my-3">
              <div className="flex justify-start">
                <div className="p-5 bg-white rounded-2xl shadow-md border border-orange-200 max-w-[95%]">
                  <h3 className="text-base font-semibold text-orange-600 mb-3">
                    Schedule Your Meeting
                  </h3>

                  <div className="grid grid-cols-2 gap-3">
                    {["10:00 AM", "12:00 PM", "3:00 PM", "5:00 PM"].map(
                      (slot) => (
                        <button
                          key={slot}
                          onClick={() => handleSlotSelect(slot)}
                          className={`px-4 py-2 rounded-lg border text-sm font-medium transition ${
                            selectedSlot === slot
                              ? "bg-orange-500 text-white border-orange-500"
                              : "bg-orange-100 hover:bg-orange-200 text-gray-700 border-orange-300"
                          }`}
                        >
                          {slot}
                        </button>
                      )
                    )}
                  </div>

                  <p className="text-xs text-gray-500 mt-3">
                    * All meetings are held at our institute campus.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-3 border-t bg-white">
          {/* Student enrolled course input */}
          {awaitingStudentCourse && (
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter your enrolled course/degree..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="flex-1 px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button
                onClick={handleStudentCourseSubmit}
                className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
              >
                Send
              </button>
            </div>
          )}

          {/* Interested course search */}
          {showCourseSearch && (
            <div>
              <input
                type="text"
                placeholder="Search course..."
                value={userInput}
                onChange={handleUserInput}
                className="w-full px-3 py-2 border rounded-full mb-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <div className="max-h-40 overflow-y-auto border rounded-lg">
                {filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    onClick={() => handleCourseSelect(course)}
                    className="px-3 py-2 cursor-pointer hover:bg-orange-100 border-b last:border-b-0"
                  >
                    {course.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.getElementById("chat-portal")
  );
};

export default ChatPopup;
