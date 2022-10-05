import {FC} from 'react';
import {ExerciseType} from '../Exercises';
import s from './Exercise.module.css';

type Props = {
    exercisesList:ExerciseType[]
    onIncreaseCount: (id: number) => void
    onReduceCount: (id: number) => void
}

export const Exercise: FC<Props> = ( { exercisesList , onIncreaseCount, onReduceCount}) => {
return (
    <div>
        {exercisesList.map((exercise) =>
            <div key={exercise.id} className={s.common}>
                <div className={s.name}>{exercise.name}</div>
                <div className={s.count}>
                    <button  onClick={() => onReduceCount(exercise.id)}>-</button>
                    <div className={s.countNumber}>{exercise.count}</div>
                    <button onClick={() => onIncreaseCount(exercise.id)}>+</button>
                </div>
            </div>)
        }
    </div>
)
}