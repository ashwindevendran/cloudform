"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class Sns extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::IoT::Sns', properties, dependsOn);
    }
}
exports.default = Sns;