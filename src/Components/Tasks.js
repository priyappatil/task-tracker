const tasks = [             // Array
    {
        id : 1,
        text : `Doctor's Appointment`,
        day : `July 31st, 2021`,
        reminder : true
    },
    {
        id : 2,
        text : `Meeting with the boss`,
        day : `July 12th, 2021`,
        reminder : false
    },
    {
        id : 3,
        text : `Shopping`,
        day : `August 1st, 2021`,
        reminder : true
    },
    {
        id : 4,
        text : `Dinner with family`,
        day : `August 2nd, 2021`,
        reminder : true
    }
]

const Tasks = () => {
    return (
        <div>
            {tasks.map( (task) => (
                <h3>{task.text}</h3>
            ))}
        </div>
    )
}

export default Tasks
