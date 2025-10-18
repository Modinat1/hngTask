const { getCatFact } = require("../utils/catFacts.js");

const getUserProfile = async (req, res) => {
  try {
    const fact = await getCatFact();
    const timestamp = new Date().toISOString();

    const user = {
      email: "modinat@gmail.com",
      name: "Modinat",
      stack: "Node.js/Express",
      fact: fact,
    };
    return res.status(200).json({
      message: "User found successfully!",
      data: {
        status: "success",
        user: user,
        timestamp,
      },
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
