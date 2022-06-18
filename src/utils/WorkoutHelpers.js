export const FindUniqueEntries = (entries) => {
    
    var seen = {}   
    return entries.filter(
        (item) => seen.hasOwnProperty(item) ? false : (seen[item] = true)
    )
}

export const GetPlainName = (move) => {
    switch (move) {
        case 'SQUAT':
            return 'Kyykky'
        case 'BENCH':
            return 'Penkkipunnerrus'
        case 'ROW':
            return 'Kulmasoutu'
        case 'OVERHEAD':
            return 'Pystypunnerrus'
        case 'DEADLIFT':
            return 'Maastaveto'
        default:
            break;
    }
}

export const NordicNotation = (input) => {
    return input.replace('.', ',')
}

export const SortWorkouts = (a, b) => {
    const ordering = ['SQUAT', 'BENCH', 'ROW', 'OVERHEAD', 'DEADLIFT']
    const indexOfA = ordering.indexOf(a.kind)
    const indexOfB = ordering.indexOf(b.kind)
    if(indexOfA > indexOfB) {
        return 1
    } else {
        return -1
    }
}

