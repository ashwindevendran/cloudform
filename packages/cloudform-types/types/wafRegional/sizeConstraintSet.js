"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class SizeConstraint {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SizeConstraint = SizeConstraint;
class FieldToMatch {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FieldToMatch = FieldToMatch;
class SizeConstraintSet extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::WAFRegional::SizeConstraintSet', properties);
    }
}
SizeConstraintSet.SizeConstraint = SizeConstraint;
SizeConstraintSet.FieldToMatch = FieldToMatch;
exports.default = SizeConstraintSet;
