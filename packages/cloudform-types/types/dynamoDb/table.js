"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ap-northeast-3 (https://d2zq80gdmjim8k.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class TimeToLiveSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TimeToLiveSpecification = TimeToLiveSpecification;
class AttributeDefinition {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.AttributeDefinition = AttributeDefinition;
class LocalSecondaryIndex {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LocalSecondaryIndex = LocalSecondaryIndex;
class ProvisionedThroughput {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ProvisionedThroughput = ProvisionedThroughput;
class GlobalSecondaryIndex {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.GlobalSecondaryIndex = GlobalSecondaryIndex;
class KeySchema {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.KeySchema = KeySchema;
class Projection {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Projection = Projection;
class PointInTimeRecoverySpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.PointInTimeRecoverySpecification = PointInTimeRecoverySpecification;
class SSESpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SSESpecification = SSESpecification;
class StreamSpecification {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.StreamSpecification = StreamSpecification;
class Table extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::DynamoDB::Table', properties);
    }
}
Table.TimeToLiveSpecification = TimeToLiveSpecification;
Table.AttributeDefinition = AttributeDefinition;
Table.LocalSecondaryIndex = LocalSecondaryIndex;
Table.ProvisionedThroughput = ProvisionedThroughput;
Table.GlobalSecondaryIndex = GlobalSecondaryIndex;
Table.KeySchema = KeySchema;
Table.Projection = Projection;
Table.PointInTimeRecoverySpecification = PointInTimeRecoverySpecification;
Table.SSESpecification = SSESpecification;
Table.StreamSpecification = StreamSpecification;
exports.default = Table;
