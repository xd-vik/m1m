const ReviewSchema = new mongoose.Schema({
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Student's ID
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String },
    created_at: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Review", ReviewSchema);
   