const ModuleSchema = new mongoose.Schema({
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    title: { type: String, required: true },
    description: { type: String },
    order: { type: Number, required: true }, // Order of the module in the course
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Module", ModuleSchema);
  