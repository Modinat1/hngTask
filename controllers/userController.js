const { getCatFact } = require("../utils/catFacts.js");

const getUserProfile = async (req, res) => {
  try {
    const fact = await getCatFact();
    const timestamp = new Date().toISOString();

    return res.status(200).json({
      status: "success",
      user: {
        email: "modinat@gmail.com",
        name: "Modinat",
        stack: "Node.js/Express",
      },
      timestamp,
      fact: fact,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  getUserProfile,
};
