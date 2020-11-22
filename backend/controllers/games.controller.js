const Game = require('../models/games.model');

exports.loadAll = async (req, res) => {
  try {
    const currentDate = new Date();
    const result = await Game.find({ releaseDate: {$lte: currentDate} });
    if(!result) res.status(404).json({ games: 'Not found'});
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};

exports.loadSelected = async (req, res) => {
  try {
    const currentDate = new Date();
    const result = await Game.find({$and : [{ _id: req.params.id }, { releaseDate: {$lte: currentDate} }]});
    if(!result) res.status(404).json({ post: 'Not found' });
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};

exports.loadNewReleases = async (req, res) => {
  try {
    const currentDate = new Date();
    const result = await Game
      .find({ releaseDate: {$gt: currentDate} })
      .select('name releaseDate photos');
    if(!result) res.status(404).json({ games: 'Not found' });
    else res.json(result);
  } catch(err) {
    res.status(500).json(err);
  }
};
