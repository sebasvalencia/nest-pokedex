//representacion entidad en la BD

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Pokemon extends Document {
  //id: string; MOngo me lo da

  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  no: number;
}

//Cuando se crea la BD
//muestra las definiciones

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
