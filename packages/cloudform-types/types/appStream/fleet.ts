/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class ComputeCapacity {
    DesiredInstances!: Value<number>

    constructor(properties: ComputeCapacity) {
        Object.assign(this, properties)
    }
}

export class DomainJoinInfo {
    OrganizationalUnitDistinguishedName?: Value<string>
    DirectoryName?: Value<string>

    constructor(properties: DomainJoinInfo) {
        Object.assign(this, properties)
    }
}

export class VpcConfig {
    SubnetIds?: List<Value<string>>
    SecurityGroupIds?: List<Value<string>>

    constructor(properties: VpcConfig) {
        Object.assign(this, properties)
    }
}

export interface FleetProperties {
    Description?: Value<string>
    ComputeCapacity: ComputeCapacity
    VpcConfig?: VpcConfig
    FleetType?: Value<string>
    EnableDefaultInternetAccess?: Value<boolean>
    DomainJoinInfo?: DomainJoinInfo
    Name?: Value<string>
    ImageName?: Value<string>
    MaxUserDurationInSeconds?: Value<number>
    DisconnectTimeoutInSeconds?: Value<number>
    DisplayName?: Value<string>
    InstanceType: Value<string>
    ImageArn?: Value<string>
}

export default class Fleet extends ResourceBase {
    static ComputeCapacity = ComputeCapacity
    static DomainJoinInfo = DomainJoinInfo
    static VpcConfig = VpcConfig

    constructor(properties?: FleetProperties) {
        super('AWS::AppStream::Fleet', properties)
    }
}
