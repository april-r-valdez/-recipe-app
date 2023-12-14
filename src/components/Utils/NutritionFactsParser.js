function extractNutritionData(input) {
    const caloriesRegex = /<b>(\d+)\s*calories<\/b>/i;
    const fatRegex = /<b>(\d+)g\s*of fat<\/b>/i;
    const proteinRegex = /<b>(\d+)g\s*of protein<\/b>/i;
    const carbsRegex = /<b>(\d+)g\s*of carbs<\/b>/i;
  
    function extractNumericalValue(input, regex) {
      const match = input.match(regex);
      return match ? match[1] : null;
    }
  
    const extractedData = {
      calories: extractNumericalValue(input, caloriesRegex),
      fat: extractNumericalValue(input, fatRegex),
      protein: extractNumericalValue(input, proteinRegex),
      carbs: extractNumericalValue(input, carbsRegex),
    };
  
    return JSON.stringify(extractedData, null, 2);
};

export default extractNutritionData;
