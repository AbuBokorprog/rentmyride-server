"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bike = exports.BikeSchema = void 0;
const mongoose_1 = require("mongoose");
exports.BikeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
    },
    pricePerHour: {
        type: Number,
        required: true,
    },
    isAvailable: {
        type: Boolean,
        default: true,
    },
    cc: {
        type: Number,
        required: true,
    },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    type: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: true,
        ref: 'type',
    },
    color: { type: String, required: true },
    size: { type: String, required: true },
    engine: String,
    carburetionType: String,
    engineType: String,
    emissionControl: String,
    boreStroke: String,
    compressionRatio: String,
    identification: String,
    introductionYear: String,
    maximumSpeed: String,
    suspensionFrontType: String,
    suspensionRearType: String,
    brakeFrontType: String,
    brakeRearType: String,
    suspensionFrontSize: String,
    frontTravel: String,
    rearTravel: String,
    brakeFrontDiameter: String,
    brakeRearDiameter: String,
    transmissionType: String,
    clutchType: String,
    numberOfSpeeds: Number,
    primaryDrive: String,
    tractionControl: String,
    frame: String,
    length: String,
    width: String,
    wheelbase: String,
    gearCount: Number,
    brakeType: String,
    suspension: { type: String, enum: ['front', 'rear', 'full', 'none'] },
    weight: Number,
    material: String,
    accessoriesIncluded: String,
    condition: String,
    ageGroup: {
        type: String,
        enum: ['Child', 'Adult'],
        required: true,
    },
    images: {
        type: [{ type: String }],
        required: true,
    },
}, {
    timestamps: true,
});
exports.Bike = (0, mongoose_1.model)('bike', exports.BikeSchema);
