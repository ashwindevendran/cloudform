import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type Type = "*" | "SIMPLE" | "TERMINAL";
export interface RoutingStrategyProperties {
    FleetId?: Value<string>;
    Message?: Value<string>;
    Type: Value<Type>;
}
export default class RoutingStrategy extends ResourceBase {
    constructor(properties: RoutingStrategyProperties, dependsOn?: Value<string>);
}