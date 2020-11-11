const Game = require('../models/games.model');

exports.loadAll = async (req, res) => {
  try {
    const result = await Game.find()
      .select('_id name price photos genres');
    if(!result) res.status(404).json({ games: 'Not found'});
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};
