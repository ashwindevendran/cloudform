/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.15.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class FieldToMatch {
    Type!: Value<string>
    Data?: Value<string>

    constructor(properties: FieldToMatch) {
        Object.assign(this, properties)
    }
}

export class SqlInjectionMatchTuple {
    TextTransformation!: Value<string>
    FieldToMatch!: FieldToMatch

    constructor(properties: SqlInjectionMatchTuple) {
        Object.assign(this, properties)
    }
}

export interface SqlInjectionMatchSetProperties {
    SqlInjectionMatchTuples?: List<SqlInjectionMatchTuple>
    Name: Value<string>
}

export default class SqlInjectionMatchSet extends ResourceBase {
    static FieldToMatch = FieldToMatch
    static SqlInjectionMatchTuple = SqlInjectionMatchTuple

    constructor(properties?: SqlInjectionMatchSetProperties) {
        super('AWS::WAFRegional::SqlInjectionMatchSet', properties)
    }
}
