// src/pages/Recycle.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Recycle = () => {
  const recycleItems = [
    {
      icon: "📱",
      title: "Smartphone",
      description:
        "Recycle your old smartphones responsibly.\nWe ensure proper dismantling and recycling of electronic components.\nMake sure to remove any personal data before recycling.",
    },
    {
      icon: "💻",
      title: "Laptop",
      description:
        "Dispose of your old laptops in an eco-friendly way.\nOur recycling process adheres to environmental standards.\nPlease remove batteries before recycling.",
    },
    {
      icon: "🎧",
      title: "Accessories",
      description:
        "Recycle various electronic accessories responsibly.\nWe separate and recycle different materials for each accessory.\nBundle cables together before dropping off.",
    },
    {
      icon: "📺",
      title: "Television",
      description:
        "Environmentally friendly disposal of old televisions.\nProper disposal of harmful components to minimize environmental impact.\nBring remote controls and power cables for proper recycling.",
    },
    {
      icon: "🧊",
      title: "Refrigerator",
      description:
        "Eco-conscious disposal of old refrigerators.\nSafe removal and recycling of refrigerants and other components.\nEnsure the refrigerator is defrosted before recycling.",
    },
    {
      icon: "🔌",
      title: "Other",
      description:
        "Responsible recycling of any other Electronic Devices.\nProper dismantling and recycling of metal and electronic components.\nEnsure it’s not working before recycling.",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Recycle Center</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recycleItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h2 className="text-xl font-bold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <button
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              onClick={() => navigate("/AppointmentForm")}
            >
              RECYCLE NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recycle;
