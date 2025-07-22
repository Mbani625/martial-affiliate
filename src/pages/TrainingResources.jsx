// src/pages/TrainingResources.jsx
import React from "react";

const TrainingResources = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Martial Arts Training Resources</h1>

      <p className="mb-4">
        Whether you're just starting out or looking to improve your technique, here are some of the best training resources available to martial artists of all levels.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Recommended YouTube Channels</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          <a href="https://www.youtube.com/user/budobrothers" target="_blank" rel="noreferrer" className="text-blue-600 underline">
            Budo Brothers – Traditional & modern martial arts
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/c/KaratebyJesse" target="_blank" rel="noreferrer" className="text-blue-600 underline">
            Karate by Jesse – In-depth tutorials & breakdowns
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@FightTips" target="_blank" rel="noreferrer" className="text-blue-600 underline">
            FightTips – MMA & striking basics
          </a>
        </li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Training Apps & Trackers</h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>BJJ Flow</strong> – App for learning jiu-jitsu transitions and drills</li>
        <li><strong>Martial Arts Timer</strong> – Round timers for sparring & cardio</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Printable Resources</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Basic stance & technique checklists</li>
        <li>Stretching and mobility routines</li>
        <li>White-to-black belt curriculum outlines</li>
      </ul>
    </div>
  );
};

export default TrainingResources;
