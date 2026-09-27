const { getSchemeRecommendations } = require('../services/geminiServices');

exports.matchSchemes = async (req, res) => {
  try {
    const { category, businessType, income, state, age, gender, location } = req.body;

    if (!category || !businessType || !income) {
      return res.status(400).json({ message: 'Profile incomplete hai' });
    }

    const schemes = await getSchemeRecommendations({
      category, businessType, income, state, age, gender, location
    });

    res.json({ schemes });
  } catch (error) {
    console.error('Scheme matching error:', error.message);
    res.status(500).json({ message: 'Schemes fetch karne mein error aaya', error: error.message });
  }
};