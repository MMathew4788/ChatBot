import React from "react";
function DobDetails({ dob }) {
  const DOB = new Date(dob);
  const zodiacSigns = [
    {
      name: "Aquarius",
      personality: "independent, unconventional, and innovative",
      start: new Date(DOB.getFullYear(), 1, 20),
      end: new Date(DOB.getFullYear(), 2, 18)
    },
    {
      name: "Pisces",
      personality: "intuitive, compassionate, and creative",
      start: new Date(DOB.getFullYear(), 2, 19),
      end: new Date(DOB.getFullYear(), 3, 20)
    },
    {
      name: "Aries",
      personality: "bold, impulsive, and confident",
      start: new Date(DOB.getFullYear(), 3, 21),
      end: new Date(DOB.getFullYear(), 4, 19)
    },
    {
      name: "Taurus",
      personality: "practical, determined, and sensual",
      start: new Date(DOB.getFullYear(), 4, 20),
      end: new Date(DOB.getFullYear(), 5, 20)
    },
    {
      name: "Gemini",
      personality: "communicative, curious, and adaptable",
      start: new Date(DOB.getFullYear(), 5, 21),
      end: new Date(DOB.getFullYear(), 6, 20)
    },
    {
      name: "Cancer",
      personality: "emotional, nurturing, and intuitive",
      start: new Date(DOB.getFullYear(), 6, 21),
      end: new Date(DOB.getFullYear(), 7, 22)
    },
    {
      name: "Leo",
      personality: "confident, generous, and enthusiastic",
      start: new Date(DOB.getFullYear(), 7, 23),
      end: new Date(DOB.getFullYear(), 8, 22)
    },
    {
      name: "Virgo",
      personality: "practical, analytical, and detail-oriented",
      start: new Date(DOB.getFullYear(), 8, 23),
      end: new Date(DOB.getFullYear(), 9, 22)
    },
    {
      name: "Libra",
      personality: "harmonious, diplomatic, and balanced",
      start: new Date(DOB.getFullYear(), 9, 23),
      end: new Date(DOB.getFullYear(), 10, 22)
    },
    {
      name: "Scorpio",
      personality: "intense, mysterious, and resourceful",
      start: new Date(DOB.getFullYear(), 10, 23),
      end: new Date(DOB.getFullYear(), 11, 21)
    },
    {
      name: "Sagittarius",
      personality: "adventurous, optimistic, and free-spirited",
      start: new Date(DOB.getFullYear(), 11, 22),
      end: new Date(DOB.getFullYear(), 0, 19)
    },
    {
      name: "Capricorn",
      personality: "ambitious, disciplined, and practical",
      start: new Date(DOB.getFullYear(), 0, 20),
      end: new Date(DOB.getFullYear(), 1, 19)
    }
  ];

  const dobDate = new Date(DOB);
  let zodiacSign = "";
  let zodiacPersonality="";

  for (const sign of zodiacSigns) {
    if (dobDate >= sign.start && dobDate <= sign.end) {
      zodiacSign = sign.name;
      zodiacPersonality= sign.personality;
      break;
    }
  }

  return <div className="flex flex-col space-y-0 ">
  <div className="output-container">
    Your zodiac sign is: {zodiacSign}<br></br>
    Your are {zodiacPersonality}
     </div>
    {<div className="output-container mt-0">
      Do you know, I can find the compatibility<br></br>
      between you and your friend!!
    </div>}
    </div>

}
export default DobDetails;