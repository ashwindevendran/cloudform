import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Ingress {
    CidrIp?: Value<string>;
    CidrIpv6?: Value<string>;
    Description?: Value<string>;
    FromPort?: Value<number>;
    IpProtocol: Value<string>;
    SourceSecurityGroupId?: Value<string>;
    SourceSecurityGroupName?: Value<string>;
    SourceSecurityGroupOwnerId?: Value<string>;
    ToPort?: Value<number>;
    constructor(properties: Ingress);
}
export declare class Egress {
    CidrIp?: Value<string>;
    CidrIpv6?: Value<string>;
    Description?: Value<string>;
    DestinationPrefixListId?: Value<string>;
    DestinationSecurityGroupId?: Value<string>;
    FromPort?: Value<number>;
    IpProtocol: Value<string>;
    ToPort?: Value<number>;
    constructor(properties: Egress);
}
export interface SecurityGroupProperties {
    GroupDescription: Value<string>;
    GroupName?: Value<string>;
    SecurityGroupEgress?: List<Egress>;
    SecurityGroupIngress?: List<Ingress>;
    Tags?: ResourceTag[];
    VpcId?: Value<string>;
}
export default class SecurityGroup extends ResourceBase {
    static Ingress: typeof Ingress;
    static Egress: typeof Egress;
    constructor(properties?: SecurityGroupProperties);
}
