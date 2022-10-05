import {FC, useState} from 'react';
import { English } from '../Translation/Translation'
// @ts-ignore
import {Exercise} from '../Exercises/Exercise/Exercise';

export type ExerciseType = {
    id: number
    name: string
    count: number
}

const exercisesList:ExerciseType[] = [
    {id: 1, name: English.exercisePullUps, count: 1},
    {id: 2, name: English.exerciseSitUps, count: 1},
    {id: 3, name: English.exercisePushUps, count: 1},
    {id: 4, name: English.exerciseLunges, count: 1},
    {id: 5, name: English.exercisePress, count: 1},
]

export const Exercises: FC = () => {
    const [exercises, setExercises] = useState<ExerciseType[]>(exercisesList);

    const onIncreaseCount = (id: number) => {
        const newExercisesCount = exercises.map((ex) => ex.id === id ?
            { ...ex, count: ex.count + 1} : ex);
        setExercises(newExercisesCount);
    }

    const onReduceCount = (id: number) => {
        const newExercisesCount = exercises.map((ex) => ex.id === id && ex.count > 1 ?
            { ...ex, count: ex.count -1} : ex);
        setExercises(newExercisesCount);
    }

    return (
        <div>
            {English.exercisesTitle}
            <Exercise exercisesList={exercises} onIncreaseCount={onIncreaseCount} onReduceCount={onReduceCount}/>
        </div>
    )
}