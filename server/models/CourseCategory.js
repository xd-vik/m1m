const CourseCategorySchema = new mongoose.Schema({
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  });
  
  module.exports = mongoose.model("CourseCategory", CourseCategorySchema);
  