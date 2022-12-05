export const getGame = async (req, res) => {
  try {
    res.status(200).json({ message: "Successfull!" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
