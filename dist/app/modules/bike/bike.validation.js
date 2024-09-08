"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBikeValidationSchema = exports.createBikeValidationSchema = void 0;
const zod_1 = require("zod");
exports.createBikeValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    description: zod_1.z.string(),
    // pricePerHour: z.number(),
    isAvailable: zod_1.z.boolean().default(true),
    // cc: z.number(),
    brand: zod_1.z.string(),
    model: zod_1.z.string(),
    type: zod_1.z.string(),
    size: zod_1.z.string(),
    availabilityStatus: zod_1.z.boolean().default(true),
    engine: zod_1.z.string().optional(),
    carburetionType: zod_1.z.string().optional(),
    engineType: zod_1.z.string().optional(),
    emissionControl: zod_1.z.string().optional(),
    boreStroke: zod_1.z.string().optional(),
    compressionRatio: zod_1.z.string().optional(),
    identification: zod_1.z.string().optional(),
    introductionYear: zod_1.z.string().optional(),
    maximumSpeed: zod_1.z.string().optional(),
    suspensionFrontType: zod_1.z.string().optional(),
    suspensionFrontSize: zod_1.z.string().optional(),
    frontTravel: zod_1.z.string().optional(),
    suspensionRearType: zod_1.z.string().optional(),
    rearTravel: zod_1.z.string().optional(),
    brakeFrontType: zod_1.z.string().optional(),
    brakeFrontDiameter: zod_1.z.string().optional(),
    brakeRearType: zod_1.z.string().optional(),
    brakeRearDiameter: zod_1.z.string().optional(),
    transmissionType: zod_1.z.string().optional(),
    clutchType: zod_1.z.string().optional(),
    // numberOfSpeeds: z.number().optional(),
    primaryDrive: zod_1.z.string().optional(),
    tractionControl: zod_1.z.string().optional(),
    frame: zod_1.z.string().optional(),
    length: zod_1.z.string().optional(),
    width: zod_1.z.string().optional(),
    wheelbase: zod_1.z.string().optional(),
    // gearCount: z.number().optional(),
    brakeType: zod_1.z.string().optional(),
    suspension: zod_1.z.enum(['front', 'rear', 'full', 'none']).optional(),
    // weight: z.number().optional(),
    material: zod_1.z.string().optional(),
    accessoriesIncluded: zod_1.z.string(),
    condition: zod_1.z.string().optional(),
    ageGroup: zod_1.z.string(),
    color: zod_1.z.string(),
    images: zod_1.z.string().array(),
});
exports.updateBikeValidationSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    pricePerHour: zod_1.z.number().optional(),
    isAvailable: zod_1.z.boolean().default(true).optional(),
    cc: zod_1.z.number().optional(),
    brand: zod_1.z.string().optional(),
    model: zod_1.z.string().optional(),
    type: zod_1.z.enum(['mountain', 'road', 'hybrid', 'electric']).optional(),
    size: zod_1.z.string().optional(),
    availabilityStatus: zod_1.z.boolean().default(true).optional(),
    engine: zod_1.z.string().optional(),
    carburetionType: zod_1.z.string().optional(),
    engineType: zod_1.z.string().optional(),
    emissionControl: zod_1.z.string().optional(),
    boreStroke: zod_1.z.string().optional(),
    compressionRatio: zod_1.z.string().optional(),
    identification: zod_1.z.string().optional(),
    introductionYear: zod_1.z.string().optional(),
    maximumSpeed: zod_1.z.string().optional(),
    suspensionFrontType: zod_1.z.string().optional(),
    suspensionFrontSize: zod_1.z.string().optional(),
    frontTravel: zod_1.z.string().optional(),
    suspensionRearType: zod_1.z.string().optional(),
    rearTravel: zod_1.z.string().optional(),
    brakeFrontType: zod_1.z.string().optional(),
    brakeFrontDiameter: zod_1.z.string().optional(),
    brakeRearType: zod_1.z.string().optional(),
    brakeRearDiameter: zod_1.z.string().optional(),
    transmissionType: zod_1.z.string().optional(),
    clutchType: zod_1.z.string().optional(),
    numberOfSpeeds: zod_1.z.number().optional(),
    primaryDrive: zod_1.z.string().optional(),
    tractionControl: zod_1.z.string().optional(),
    frame: zod_1.z.string().optional(),
    length: zod_1.z.string().optional(),
    width: zod_1.z.string().optional(),
    wheelbase: zod_1.z.string().optional(),
    gearCount: zod_1.z.number().optional(),
    brakeType: zod_1.z.string().optional(),
    suspension: zod_1.z.enum(['front', 'rear', 'full', 'none']).optional(),
    weight: zod_1.z.number().optional(),
    material: zod_1.z.string().optional(),
    accessoriesIncluded: zod_1.z.array(zod_1.z.string()).optional(),
    condition: zod_1.z.string().optional(),
    ageGroup: zod_1.z.string().array(),
    color: zod_1.z.string(),
    images: zod_1.z.string().array(),
});
