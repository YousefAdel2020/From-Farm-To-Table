const Dish = require("../models/dishs");
const { StatusCodes } = require("http-status-codes");
const {
  BadRequestError,
  UnauthenticatedError,
  NotFoundError,
  ForbidenError,
} = require("../errors");

const getAllDishes = async (req, res) => {
  const dishes = await Dish.find({}).populate(
    "chef",
    "firstName lastName email img role gender summary address phoneNumber rating"
  );

  res.status(StatusCodes.OK).json({ dishes });
};

const getTopRated = async(req,res)=> {
  try {
    const dishes = await Dish.find({
      rating: {
        $gt: 3
      }
    }).sort({
      rating: -1
    }).limit(3);
   res.status(StatusCodes.OK).json(dishes);
  }catch(err){
    res.status(404).json({"message" : "Couldn't find dishes"})
  }

}
 
//   const dishes = await Dish.find({}).populate(
//     "chef",
//     "firstName lastName email img role gender summary address phoneNumber rating"
//   );

//   res.status(StatusCodes.OK).json({ dishes });
// };

const createDish = async (req, res) => {
  if (req.file) {
    req.body.img = req.file.filename;
  }
  req.body.chef = req.user.userId;
  const dish = await Dish.create(req.body);

  res.status(StatusCodes.CREATED).json({ dish });
};

const getDish = async (req, res) => {
  const { dishId } = req.params;

  const dish = await Dish.findOne({
    _id: dishId,
  });

  if (!dish) {
    throw new NotFoundError(`there is no Dish with this Id : ${dishId}`);
  }

  res.status(StatusCodes.OK).json({ dish });
};

const updateDish = async (req, res) => {

  const dishId = req.params.dishId;
  const userId = req.user.userId;


  const dish = await Dish.findOneAndUpdate(
    { _id: dishId, chef: userId },
    req.body,
    { new: true, runValidators: true }
  );

  if (!dish) {
    throw new NotFoundError(`No dish with Id ${dishId}`);
  }

  res.status(StatusCodes.OK).json({ dish });
};

const deleteDish = async (req, res) => {

  const {dishId}=req.params
  
  const dish = await Dish.findOneAndDelete({
    _id: dishId,
    chef: req.user.userId,
  });

  if (!dish) {
    throw new NotFoundError(`No dish with Id ${dishId}`);
  }

  res.status(StatusCodes.OK).send();
};

module.exports = {
  getAllDishes,
  createDish,
  getDish,
  updateDish,
  deleteDish,
  getTopRated
};
