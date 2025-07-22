// src/pages/BeginnerGuide.jsx
import React from "react";

const BeginnerGuide = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Beginner’s Guide to Martial Arts</h1>

      <p className="mb-4">
        Starting martial arts is one of the best decisions you can make — for fitness, discipline, and self-defense. This guide covers what to expect and how to choose the right gear.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Choosing Your Discipline</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Karate:</strong> Great for structure, kata, and striking fundamentals.</li>
        <li><strong>Taekwondo:</strong> Focused on kicks, flexibility, and Olympic sport rules.</li>
        <li><strong>BJJ:</strong> Grappling art with a strong community and sparring culture.</li>
        <li><strong>Muay Thai:</strong> Powerful striking with clinch and elbows.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Sizing Your Equipment</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Gis (Uniforms):</strong> Usually sized A0–A5 (BJJ) or by height/weight (Karate, TKD). Check brand-specific size charts.</li>
        <li><strong>Gloves:</strong> Use oz sizing (10oz–16oz). Bigger = more padding, better for beginners.</li>
        <li><strong>Shin Guards & Pads:</strong> Fit snug without cutting circulation. Adjustable straps recommended.</li>
        <li><strong>Weapons:</strong> Use sizing charts for bo staff, nunchaku, or kali sticks. Start with foam-padded or wood practice weapons.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">First Day Tips</h2>
      <ul className="list-disc ml-6">
        <li>Wear athletic clothing if no uniform yet</li>
        <li>Show up early to meet the instructor</li>
        <li>Don’t be afraid to ask questions</li>
        <li>Respect the space, tradition, and partners</li>
      </ul>
    </div>
  );
};

export default BeginnerGuide;
