const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    dueDate: Date,
    status: {
        type: String,
        enum: ['Not-Submitted', 'Submitted'],
        default: 'pending'
    },
    assignedUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Task', taskSchema);
