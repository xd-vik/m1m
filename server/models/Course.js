const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    thumbnail: { type: String },
    created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Instructor's ID
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Course", CourseSchema);
  