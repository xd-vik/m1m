const EnrollmentSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Student's ID
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    enrolled_at: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Enrollment", EnrollmentSchema);
  