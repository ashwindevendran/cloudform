"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class IdentityPoolRoleAttachment extends resource_1.ResourceBase {
    constructor(properties, dependsOn) {
        super('AWS::Cognito::IdentityPoolRoleAttachment', properties, dependsOn);
    }
}
exports.default = IdentityPoolRoleAttachment;