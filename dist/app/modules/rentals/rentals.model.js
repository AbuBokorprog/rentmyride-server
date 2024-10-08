"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentals = void 0;
const mongoose_1 = require("mongoose");
const rentalsSchema = new mongoose_1.Schema({
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    bikeId: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'bike',
    },
    startTime: {
        type: Date,
        required: true,
        default: new Date(),
    },
    returnTime: {
        type: Date,
        default: null,
    },
    totalCost: {
        type: Number,
        default: 0,
    },
    isReturned: {
        type: Boolean,
        default: false,
    },
    paymentStatus: {
        type: String,
        enum: ['Paid', 'Unpaid'],
        default: 'Unpaid',
    },
    advancePayment: {
        type: Number,
    },
    duePayment: {
        type: Number,
    },
    isConfirm: {
        type: Boolean,
        default: false,
    },
    isAdvancePaymentPaid: {
        type: Boolean,
        default: false,
    },
    tran_id: {
        type: String,
    },
}, {
    timestamps: true,
});
exports.rentals = (0, mongoose_1.model)('Rental', rentalsSchema);
