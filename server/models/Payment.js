const PaymentSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Student's ID
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
    amount: { type: Number, required: true },
    payment_status: { type: String, enum: ["pending", "completed", "failed"], required: true },
    payment_date: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model("Payment", PaymentSchema);
  