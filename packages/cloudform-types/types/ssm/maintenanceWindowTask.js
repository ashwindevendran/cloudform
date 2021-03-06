"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.8.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
const resource_1 = require("../resource");
class MaintenanceWindowLambdaParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MaintenanceWindowLambdaParameters = MaintenanceWindowLambdaParameters;
class NotificationConfig {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.NotificationConfig = NotificationConfig;
class MaintenanceWindowAutomationParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MaintenanceWindowAutomationParameters = MaintenanceWindowAutomationParameters;
class TaskInvocationParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.TaskInvocationParameters = TaskInvocationParameters;
class LoggingInfo {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.LoggingInfo = LoggingInfo;
class Target {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Target = Target;
class MaintenanceWindowStepFunctionsParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MaintenanceWindowStepFunctionsParameters = MaintenanceWindowStepFunctionsParameters;
class MaintenanceWindowRunCommandParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MaintenanceWindowRunCommandParameters = MaintenanceWindowRunCommandParameters;
class MaintenanceWindowTask extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::SSM::MaintenanceWindowTask', properties);
    }
}
MaintenanceWindowTask.MaintenanceWindowLambdaParameters = MaintenanceWindowLambdaParameters;
MaintenanceWindowTask.NotificationConfig = NotificationConfig;
MaintenanceWindowTask.MaintenanceWindowAutomationParameters = MaintenanceWindowAutomationParameters;
MaintenanceWindowTask.TaskInvocationParameters = TaskInvocationParameters;
MaintenanceWindowTask.LoggingInfo = LoggingInfo;
MaintenanceWindowTask.Target = Target;
MaintenanceWindowTask.MaintenanceWindowStepFunctionsParameters = MaintenanceWindowStepFunctionsParameters;
MaintenanceWindowTask.MaintenanceWindowRunCommandParameters = MaintenanceWindowRunCommandParameters;
exports.default = MaintenanceWindowTask;
