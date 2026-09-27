const { GoogleGenAI } = require('@google/genai');

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

exports.getSchemeRecommendations = async (profile) => {
  const prompt = `You are an expert in government schemes for marginalized entrepreneurs in India.
Based on the following profile, recommend the 3-4 most suitable real Indian government schemes.

User profile:
- Category: ${profile.category}
- Business Type: ${profile.businessType}
- Annual Income: ₹${profile.income}
- State: ${profile.state}
- Age: ${profile.age}
- Gender: ${profile.gender}
- Location: ${profile.location}

Return ONLY a valid JSON array, no markdown backticks, no extra explanation. Format:

[
  {
    "name": "Scheme name",
    "description": "2-3 line description of the scheme",
    "eligibility": "Why this user is eligible, in simple language, based on their profile",
    "documents": "Required documents, comma separated",
    "applyLink": "Official government website link if known, otherwise 'https://www.myscheme.gov.in/'"
  }
]`;


const response = await ai.models.generateContent({
    model: 'gemini-3.8-flash',
    contents: prompt,
  });


  const responseText = response.text;

  
  
   const cleanedText = responseText.replace(/```json\s*|```/g, '').trim();

  try {
    const schemes = JSON.parse(cleanedText);
    return schemes;
  } catch (err) {
    console.error('Raw Gemini response:', responseText);
    throw new Error('Gemini does not able to respond : ' + err.message);
  }
};

