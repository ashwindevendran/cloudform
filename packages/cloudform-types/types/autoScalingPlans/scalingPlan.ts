/* Generated from: 
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ApplicationSource {
    CloudFormationStackARN?: Value<string>
    TagFilters?: List<TagFilter>

    constructor(properties: ApplicationSource) {
        Object.assign(this, properties)
    }
}

export class ScalingInstruction {
    DisableDynamicScaling?: Value<boolean>
    ServiceNamespace!: Value<string>
    PredictiveScalingMaxCapacityBehavior?: Value<string>
    ScalableDimension!: Value<string>
    ScalingPolicyUpdateBehavior?: Value<string>
    MinCapacity!: Value<number>
    TargetTrackingConfigurations!: List<TargetTrackingConfiguration>
    PredictiveScalingMaxCapacityBuffer?: Value<number>
    CustomizedLoadMetricSpecification?: CustomizedLoadMetricSpecification
    PredefinedLoadMetricSpecification?: PredefinedLoadMetricSpecification
    ResourceId!: Value<string>
    ScheduledActionBufferTime?: Value<number>
    MaxCapacity!: Value<number>
    PredictiveScalingMode?: Value<string>

    constructor(properties: ScalingInstruction) {
        Object.assign(this, properties)
    }
}

export class TargetTrackingConfiguration {
    ScaleOutCooldown?: Value<number>
    TargetValue!: Value<number>
    PredefinedScalingMetricSpecification?: PredefinedScalingMetricSpecification
    DisableScaleIn?: Value<boolean>
    ScaleInCooldown?: Value<number>
    EstimatedInstanceWarmup?: Value<number>
    CustomizedScalingMetricSpecification?: CustomizedScalingMetricSpecification

    constructor(properties: TargetTrackingConfiguration) {
        Object.assign(this, properties)
    }
}

export class CustomizedScalingMetricSpecification {
    MetricName!: Value<string>
    Statistic!: Value<string>
    Dimensions?: List<MetricDimension>
    Unit?: Value<string>
    Namespace!: Value<string>

    constructor(properties: CustomizedScalingMetricSpecification) {
        Object.assign(this, properties)
    }
}

export class MetricDimension {
    Value!: Value<string>
    Name!: Value<string>

    constructor(properties: MetricDimension) {
        Object.assign(this, properties)
    }
}

export class PredefinedScalingMetricSpecification {
    ResourceLabel?: Value<string>
    PredefinedScalingMetricType!: Value<string>

    constructor(properties: PredefinedScalingMetricSpecification) {
        Object.assign(this, properties)
    }
}

export class TagFilter {
    Values?: List<Value<string>>
    Key!: Value<string>

    constructor(properties: TagFilter) {
        Object.assign(this, properties)
    }
}

export class PredefinedLoadMetricSpecification {
    PredefinedLoadMetricType!: Value<string>
    ResourceLabel?: Value<string>

    constructor(properties: PredefinedLoadMetricSpecification) {
        Object.assign(this, properties)
    }
}

export class CustomizedLoadMetricSpecification {
    MetricName!: Value<string>
    Statistic!: Value<string>
    Dimensions?: List<MetricDimension>
    Unit?: Value<string>
    Namespace!: Value<string>

    constructor(properties: CustomizedLoadMetricSpecification) {
        Object.assign(this, properties)
    }
}

export interface ScalingPlanProperties {
    ApplicationSource: ApplicationSource
    ScalingInstructions: List<ScalingInstruction>
}

export default class ScalingPlan extends ResourceBase {
    static ApplicationSource = ApplicationSource
    static ScalingInstruction = ScalingInstruction
    static TargetTrackingConfiguration = TargetTrackingConfiguration
    static CustomizedScalingMetricSpecification = CustomizedScalingMetricSpecification
    static MetricDimension = MetricDimension
    static PredefinedScalingMetricSpecification = PredefinedScalingMetricSpecification
    static TagFilter = TagFilter
    static PredefinedLoadMetricSpecification = PredefinedLoadMetricSpecification
    static CustomizedLoadMetricSpecification = CustomizedLoadMetricSpecification

    constructor(properties?: ScalingPlanProperties) {
        super('AWS::AutoScalingPlans::ScalingPlan', properties)
    }
}
