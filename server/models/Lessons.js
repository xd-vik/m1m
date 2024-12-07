const LessonSchema = new mongoose.Schema({
    module_id: { type: mongoose.Schema.Types.ObjectId, ref: "Module", required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    order: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Lesson", LessonSchema);

  