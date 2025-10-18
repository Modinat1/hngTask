const getCatFact = async () => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {
    const response = await fetch(process.env.CAT_FACT_URL, {
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch fact: ${response.status}`);
    }
    const data = await response.json();
    return data.fact;
  } catch (error) {
    clearTimeout(timeout);
    console.log("error fetching cats" + error);
    return "Could not fetch a random fact at this time, Try again later";
  }
};

module.exports = {
  getCatFact,
};
