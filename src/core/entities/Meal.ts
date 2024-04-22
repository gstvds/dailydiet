import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';

type MealOptionalProps = OptionalProps<Meal, 'id' | 'created_at' | 'updated_at' | 'meal_date'>;

export class Meal {
  public id!: string;
  public name!: string;
  public description!: string;
  public date!: string;
  public hour!: string;
  public on_diet!: boolean;
  public created_at!: Date;
  public updated_at!: Date;
  public meal_date!: Date;

  private constructor(props: Meal) {
    Object.assign(this, props);
  }

  static create({ id = uuid(), created_at = new Date(), updated_at = new Date(), ...props }: MealOptionalProps) {
    const [day, month, year] = props.date.split('/');
    const [hour, minute] = props.hour.split(':');
    const meal_date = new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute));
    return new Meal({ id, created_at, updated_at, meal_date, ...props });
  }
}
