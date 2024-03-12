const Tour = require('./../models/tourModel');

exports.getAllTours = async (req, res) => {
  console.log('hi');
  try {
    const tourData = await Tour.find();
    // const tours = JSON.parse(tourData);
    res.status(200).json({
      status: 'success',
      tourData
    });
  } catch (err) {
    res.status(500).json({
      status: 'failed',
      message: err.message
    });
  }
};

exports.getTour = async (req, res) => {
  console.log('Hajimemashite');
  try {
    const tour = await Tour.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      tour
    });
  } catch (err) {
    res.status(500).json({
      status: 'failed',
      message: err.message
    });
  }
};

exports.createTour = async (req, res) => {
  console.log('konbanwa');
  try {
    const newTour = await Tour.create(req.body);
    res.status(200).json({
      status: 'success',
      newTour
    });
  } catch (err) {
    res.status(500).json({
      status: 'failed',
      message: err.message
    });
  }
};

exports.updateTour = async (req, res) => {
  console.log('Itterashai');
  try {
    const updatedTour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json({
      status: 'success',
      updatedTour
    });
  } catch (err) {
    res.status(500).json({
      status: 'failed',
      message: err.message
    });
  }
};

exports.deleteTour = async (req, res) => {
  console.log('Omae wa mou shindeiru');
  try {
    await Tour.findByIdAndDelete(req.params.id);
    res.status(200).json({
      status: 'success',
      message: 'Tour Deleted Successfully'
    });
  } catch (err) {
    res.status(500).json({
      status: 'failed',
      message: err.message
    });
  }
};
