import { Field, InputType } from '@nestjs/graphql';

@InputType({ description: 'Create coffee input object type.' })
export class CreateCoffeeInput {
  @Field(() => String, { description: 'A new coffee name' })
  name: string;
  brand: string;
  flavors: string[];
}
