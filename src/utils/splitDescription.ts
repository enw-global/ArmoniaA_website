// Helper function to split description into two columns if over 200 words
const splitDescription = (description: string) => {
  const words = description.split(/\s+/);
  const wordCount = words.length;
  if (wordCount <= 200) {
    return { column1: description, column2: null };
  }
  const splitIndex = Math.ceil(wordCount / 2);
  const column1Words = words.slice(0, splitIndex);
  const column2Words = words.slice(splitIndex);

  return {
    column1: column1Words.join(" "),
    column2: column2Words.join(" "),
  };
};
export default splitDescription;
